import { useLogout } from '../hooks/useLogout';
import { useState } from 'react';
import myImage from '../images/logoMesero.png';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Comanda from './Comanda';
import Kitchen from './Kitchen';
import menu from '../data';
import '../css/orders/Orders.scss';

import { createElements } from '../crud';

export default function Orders() {
  const { logout } = useLogout();
  const [activeMenu, setActiveMenu] = useState('');
  
  

  // const [clientName, setClientName] = usestate('');
  const [otraOrden, setOtraOrden] = useState({
    "_id": "",
    "userId": "",
    "status": "pending",
    "dateEntry": new Date(),
    "client": "",
    "products": [],
  });

  const handleResetComanda=() => {
    setOtraOrden({
      "_id": "",
      "userId": "",
      "status": "pending",
      "dateEntry": new Date(),
      "client": "",
      "products": [],
    })
  }

  const handleNameClient =(newName) => {
    setOtraOrden({...otraOrden, client: newName, products:[...otraOrden.products]});

  }

  const handleAddProduct = (id) => {
    
    let exist= otraOrden.products.find((elem) => elem._id === id);
    if(exist) {
      exist.qty +=1;
      setOtraOrden({...otraOrden,products:[...otraOrden.products]});
    } else {
      let prod = menu.products.find(elem => elem._id === id);
      setOtraOrden({...otraOrden,products:[...otraOrden.products,{...prod, qty:1}]});
      
    }
    console.log(otraOrden);
  }
  const handleReduceProduct= (id) => {
    let exist= otraOrden.products.find((elem) => elem._id === id);
    if(exist && exist.qty >1) {
      exist.qty -=1;
      setOtraOrden({...otraOrden,products:[...otraOrden.products]});
    }
    if(exist && exist.qty === 1) {
      setOtraOrden({...otraOrden, products:otraOrden.products.filter(elem => elem._id !== id)})
    }
    console.log('resta', otraOrden);
  }

  const handleRemoveProduct = (id) => {
    let exist= otraOrden.products.find((elem) => elem._id === id);
    if(exist) {
      setOtraOrden({...otraOrden, products:otraOrden.products.filter(elem => elem._id !== id)})
    }
  }

  const handleSendComanda = async () => {
    await createElements('orders', otraOrden);
  }
  console.log(otraOrden)

  if(activeMenu==='kitchen') {
    return <Kitchen />
  }
  
  return (

    <div className="container">

      <div className="header">
        <img src={myImage} alt="img-waiter" className="user" />
        <div className='cont-name-btn'>
          <p>Juanita</p>
          <button className='btn-logout' onClick={logout}>Cerrar Sesión</button>

        </div>
        <div className="cont-ntf">
          <p className="p-ntf">0</p>
          
        </div>

        <button
          className='btn-breakfast'
          type="button"
          onClick={() => setActiveMenu('breakfast')}>
          Desayuno</button>

        <button
          className='btn-lunch'
          type="button"
          onClick={() => setActiveMenu('lunch')}>
          Almuerzo y Cena</button>
        <button
          
          type="button"
          onClick={() => setActiveMenu('kitchen')}>
          kitchen</button>
      </div>
      <div className="vista-perm">
        <Comanda handleResetComanda={handleResetComanda} handleNameClient={handleNameClient} otraOrden={otraOrden} handleRemoveProduct={handleRemoveProduct} handleSendComanda={handleSendComanda} />
        {activeMenu === 'breakfast' && (
          <Breakfast handleAddProduct={handleAddProduct} handleReduceProduct={handleReduceProduct}/>
        )}
        {activeMenu === 'lunch' && (
          <Lunch handleAddProduct={handleAddProduct} handleReduceProduct={handleReduceProduct}/>
        )}
        
      </div>



    </div>

  )
}