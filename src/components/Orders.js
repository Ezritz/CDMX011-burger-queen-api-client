import { useLogout } from '../hooks/useLogout';
import { useState } from 'react';
import myImage from '../images/logoMesero.png';
import notification from '../images/notification.png';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import '../css/orders/Orders.scss';

// import { useState } from 'react';


export default function Orders() {
  const { logout } = useLogout();
  const [activeMenu, setActiveMenu] = useState('');
  // const [showBreakf, setShowBreakf] = useState(false);
  // const onClick = () => setShowBreakf(true);
  return(
    
    <div className="container">
      
      <div className="header">
        <img src={myImage} alt="img-waiter" className="user"/>
        <div>
          <p></p>
          <button onClick={logout}>Cerrar Sesión</button>
          
        </div>
        <div className="cont-ntf">
          <img src={notification} alt="img-notification" className="ntf"/>
        </div>
        
        <button 
        type="button"
        onClick={() => setActiveMenu('breakfast')}>
        Desayuno</button>
        
        <button
        type="button"
        onClick={() => setActiveMenu('lunch')}>
        Almuerzo y Cena</button>
       
        <div>
          {activeMenu === 'breakfast' && (
            <Breakfast/>
          )}
          {activeMenu === 'lunch' && (
            <Lunch/>
          )}
        </div>
        
      </div>
      
    </div>
    
  )
}