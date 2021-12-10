import React, { useState, useEffect } from 'react';
import { useLogout } from '../hooks/useLogout';
import '../css/kitchen/kitchen.scss';
import myImage from '../images/logoMesero.png';
import PendingOrders from './PendingOrders';
import Cookies from 'universal-cookie';
import { Logout } from '../lib/fakeServer';
import {
    getElements
} from '../crud';

const cookies= new Cookies();
export default function Kitchen() {
    const [data, setData] = useState([]);
    
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
                <p>{cookies.get("name")}</p>
                <button 
                className="logout-kitchen"
                onClick={Logout}>cerrar sesion</button>
            </div>
            <div className="container-orden">{orders}</div>
            
        </div>
    )

    
    
    /*
    useEffect(() => {
       
    }, [])
    */
}
