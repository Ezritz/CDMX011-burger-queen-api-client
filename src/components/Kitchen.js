import React, { useState, useEffect } from 'react';
import { useLogout } from '../hooks/useLogout';
import '../css/kitchen/kitchen.scss';
import myImage from '../images/logoMesero.png';
import PendingOrders from './PendingOrders';
import Cookies from 'universal-cookie';
import { Logout } from '../lib/fakeServer';
import {
    getElements, updateElements
} from '../crud';
import Swal from 'sweetalert2'


const cookies= new Cookies();
export default function Kitchen() {
    const [data, setData] = useState([]);
    

    const handleChangeStatus = (id, element, result) => {
        updateElements('orders', id, { ...element, "status": 'delivering', "dateProcessed":new Date()} )
         setData([]);
        Swal.fire(`La orden tardo en prepararse: ${result[0]}: ${result[1]}: ${result[2]}`)

    }

    useEffect(() => {
        getElements('orders').then((data) => setData(data));

    },[]);

    const handleChangeDelivering = () => {
        getElements('orders').then((data) => setData(data.filter((element) => element.status === 'pending')))
    }
    

    let  ordersPending= data.filter((elem) => elem.status === 'pending');
    let orders = ordersPending.map((element) => {
        return (
            <PendingOrders 
            product={element.products}
            timer={element.dateEntry}
            id={element.id}
            handleChangeStatus={handleChangeStatus}
            handleChangeDelivering={handleChangeDelivering}
            />
        )
    });

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
