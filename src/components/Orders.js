import { useLogout } from '../hooks/useLogout';
import { useState } from 'react';
import myImage from '../images/logoMesero.png';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Comanda from './Comanda';
import menu from '../data';
import '../css/orders/Orders.scss';
import Cookies from 'universal-cookie';
import { createElements } from '../crud';
import { Logout } from '../lib/fakeServer';
import { useEffect } from 'react';
import OrdersReady from '../components/OrdersReady';
import { getElements } from '../crud';

const cookies= new Cookies()
export default function Orders() {
  
  const [activeMenu, setActiveMenu] = useState('');
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  
  
  useEffect(() => {
    handleChangeNotif()
    
  },[setDataLength])
  
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
  
  
  const handleChangeNotif = () => {
    getElements('orders').then((data) => {setData(data)
      let result = data.filter((elem) => elem.status === 'delivering');
      setData(result);
      setDataLength(result.length)
    })
    
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
  

  const handleChangeRoute = ()=>{
    window.location.href = '/ordersToDelivered'
  }
  
  
  return (

    <div className="container">

      <div className="header">
        <img src={myImage} alt="img-waiter" className="user" />
        <div className='cont-name-btn'>
          <p>{cookies.get("name")}</p>
          <button className='btn-logout' onClick={Logout}>Cerrar Sesión</button>

        </div>
        <div className="cont-ntf">
          <button
          className="total-ntf"
          type="button"
          onClick={handleChangeRoute}>{dataLength}
          </button>
         
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