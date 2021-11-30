import { useLogout } from '../hooks/useLogout';
import { useState } from 'react';
import myImage from '../images/logoMesero.png';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Comanda from './Comanda';
import '../css/orders/Orders.scss';
import BreakfastMenu from './BreakfastMenu';

// import { useState } from 'react';

function product(id, name, price, qty) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.qty = qty;
}


export default function Orders() {
  const { logout } = useLogout();
  const [activeMenu, setActiveMenu] = useState('');
  const [orderProducts, setOrderProducts] = useState([]);

  

  const addProduct = (item) => {
    console.log("item: ", item);
    let exist = false;
    for (let i = 0; i < orderProducts.length; i++) {
      if (orderProducts[i].id === item.id) {
        orderProducts[i].qty += 1;
        exist = true;
      }
    }
    console.log("exist: ", exist);
    if(exist){
      setOrderProducts(orderProducts);
    }else{
      let nop = [new product(item.id, item.name, item.price, 1)];
      setOrderProducts(nop);
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
        <Comanda orderProducts={orderProducts} />
        {activeMenu === 'breakfast' && (
          <Breakfast addProduct={addProduct} reduceProduct={reduceProduct} orderProduct={orderProducts} setOrderProduct={setOrderProducts}/>
        )}
        {activeMenu === 'lunch' && (
          <Lunch addProducts={addProduct} reduceProducts={reduceProduct}/>
        )}
      </div>



    </div>

  )
}