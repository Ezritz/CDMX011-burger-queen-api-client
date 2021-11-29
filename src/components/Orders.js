import { useLogout } from '../hooks/useLogout';
import { useState } from 'react';
import myImage from '../images/logoMesero.png';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Comanda from './Comanda';
import '../css/orders/Orders.scss';

// import { useState } from 'react';


export default function Orders() {
  const { logout } = useLogout();
  const [activeMenu, setActiveMenu] = useState('');
  const [orderProducts, setOrderProducts] = ([]);

  

  const addProduct = (product) => {
    const exist = orderProducts.find((elem) => elem.id === product.id);

    console.log('holis',orderProducts);
    if(exist) {
      setOrderProducts(
        orderProducts.map((elem)=> 
          elem.id === product.id ? { ...exist, qty: exist.qty + 1} : elem
        )
      )
    } else {
      setOrderProducts(
        [...orderProducts, { ...product, qty: 1}]
      )
    }
  }

  const removeProduct = (product) => {
    const exist = orderProducts.find((elem) => elem.id === product.id);

    if(exist) {
      setOrderProducts(
        orderProducts.filter((elem)=> elem.id !== product.id)
      )
    } 
    
  }

  const reduceProduct = (product) => {
    const exist = orderProducts.find((elem) => elem.id === product.id);

    if(exist && exist.qty > 1) {
      setOrderProducts(
        orderProducts.map((elem)=> 
          elem.id === product.id ? { ...exist, qty: exist.qty - 1} : elem
        )
      )
    } 
    if(exist && exist.qty === 1) {
      setOrderProducts(
        orderProducts.filter(elem => elem.id !== product.id)
      )
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
        <Comanda removeProducts={removeProduct} orderProduct={orderProducts}/>
        {activeMenu === 'breakfast' && (
          <Breakfast addProducts={addProduct} reduceProducts={reduceProduct}/>
        )}
        {activeMenu === 'lunch' && (
          <Lunch addProducts={addProduct} reduceProducts={reduceProduct}/>
        )}
      </div>



    </div>

  )
}