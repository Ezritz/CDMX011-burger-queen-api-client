import { useLogout } from '../hooks/useLogout';
import myImage from '../images/logoMesero.png';
import notification from '../images/notification.png';
import Breakfast from './Breakfast';
import { useState } from 'react';


export default function Orders() {
  const { logout } = useLogout();
  const [showBreakf, setShowBreakf] = useState(false);
  const onClick = () => setShowBreakf(true);
  return(
    
    <div className="container">
      
      <div className="header">
        <img src={myImage} alt="img-waiter" />
        <div>
          <p></p>
          <button onClick={logout}>Cerrar Sesión</button>
          
        </div>
        <div>
          <img src={notification} alt="img-notification" />
        </div>
        <button onClick={onClick}>Desayuno</button>
        {showBreakf ? <Breakfast /> :null}
        <button>Almuerzo y Cena</button>
      </div>
      
    </div>
    
  )
}