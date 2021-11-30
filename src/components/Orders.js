import { useLogout } from '../hooks/useLogout';
import { useState } from 'react';
import myImage from '../images/logoMesero.png';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Comanda from './Comanda';
import '../css/orders/Orders.scss';

export default function Orders() {
  const { logout } = useLogout();
  const [activeMenu, setActiveMenu] = useState('');
  const [orderProducts, setOrderProducts] = useState([]);



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
          <Breakfast orderProduct={orderProducts} />
        )}
        {activeMenu === 'lunch' && (
          <Lunch orderProduct={orderProducts}/>
        )}
      </div>



    </div>

  )
}