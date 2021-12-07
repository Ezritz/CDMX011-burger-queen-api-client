import React, { useState, useEffect } from 'react';
import { useLogout } from '../hooks/useLogout';
import '../css/kitchen/kitchen.scss';
import myImage from '../images/logoMesero.png';
import PendingOrders from './PendingOrders';
import {
    getElements
} from '../crud';

export default function Kitchen() {
    const [data, setData] = useState([]);
    const { logout } = useLogout();
  
    useEffect(() => {
      getElements('orders').then((data) => setData(data))
    }, [])
  

    let  ordersPending= data.filter((elem) => elem.status === 'pending');
    let  orders= ordersPending.map((element) => {
        return (
            <PendingOrders 
            product={element.products}
            timer={element.dateEntry}
            />
        )
    })
    
    return (
        <div>
            <div className="header-kitchen">
                <img src={myImage} className="user-kitchen"></img>
                <p></p>
                <button 
                className="logout-kitchen"
                onClick={logout}>cerrar sesion</button>
            </div>
            <div className="container-orden">{orders}</div>
            
        </div>
    )

    
    
    /*
    useEffect(() => {
       
    }, [])
    */
}
