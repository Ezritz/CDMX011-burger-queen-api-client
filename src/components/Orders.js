import { useLogout } from '../hooks/useLogout';
import { useState } from 'react';
import myImage from '../images/logoMesero.png';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Comanda from './Comanda';
import menu from '../data';
import '../css/orders/Orders.scss';

export default function Orders() {
  const { logout } = useLogout();
  const [activeMenu, setActiveMenu] = useState('');
  
  

  // const [clientName, setClientName] = usestate('');
  const [otraOrden, setOtraOrden] = useState({
    nombre: '',
    item:[]
  });

  const handleResetComanda=() => {
    setOtraOrden({
      nombre: '',
      item:[]
    })
  }

  const handleNameClient =(newName) => {
    setOtraOrden({nombre: newName, item:[...otraOrden.item]});

  }

  const handleAddProduct = (id) => {
    
    let exist= otraOrden.item.find((elem) => elem._id === id);
    if(exist) {
      exist.qty +=1;
      setOtraOrden({...otraOrden,item:[...otraOrden.item]});
    } else {
      let prod = menu.products.find(elem => elem._id === id);
      setOtraOrden({...otraOrden,item:[...otraOrden.item,{...prod, qty:1}]});
      
    }
    console.log(otraOrden);
  }
  const handleReduceProduct= (id) => {
    let exist= otraOrden.item.find((elem) => elem._id === id);
    if(exist && exist.qty >1) {
      exist.qty -=1;
      setOtraOrden({...otraOrden,item:[...otraOrden.item]});
    }
    if(exist && exist.qty === 1) {
      setOtraOrden({...otraOrden, item:otraOrden.item.filter(elem => elem._id !== id)})
    }
    console.log('resta', otraOrden);
  }

  const handleRemoveProduct = (id) => {
    let exist= otraOrden.item.find((elem) => elem._id === id);
    if(exist) {
      setOtraOrden({...otraOrden, item:otraOrden.item.filter(elem => elem._id !== id)})
    }
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
      </div>
      <div className="vista-perm">
        <Comanda handleResetComanda={handleResetComanda} handleNameClient={handleNameClient} otraOrden={otraOrden} handleRemoveProduct={handleRemoveProduct}/>
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