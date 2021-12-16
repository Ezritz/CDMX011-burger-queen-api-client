import React, { useState, useEffect } from 'react';
import myImage from '../images/logoMesero.png';
import DeliveredOrders from '../components/DeliveringOrders';
import Cookies from 'universal-cookie';

import {
    getElements, updateElements
} from '../crud';
import Swal from 'sweetalert2'

const cookies = new Cookies();
export default function OrdersReady() {

    const [data, setData] = useState([]);
    
    const handleChangeRoute =() => {
        window.location.href = '/orders'
    }

    const handleChangeStatus = (id,element, client) => {
        updateElements('orders', id, { ...element, "status": 'delivered', "dateProcessed":new Date()} )
        setData([]);
        
        Swal.fire(`La orden ${id} fue entregada con exito`)

    }

    useEffect(() => {
        getElements('orders').then((data) => setData(data));
    },[]);

    const handleChangeDelivered = () => {
        getElements('orders').then((data) => setData(data.filter((element) => element.status === 'delivering')))
    }
    

    let  ordersDelivering= data.filter((elem) => elem.status === 'delivering');
    let orders = ordersDelivering.map((element) => {
        return (
            <DeliveredOrders 
                product={element.products}
                id={element.id}
                client={element.client}
                handleChangeStatus={handleChangeStatus}
                handleChangeDelivered={handleChangeDelivered}
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
                onClick={handleChangeRoute}>Regresar a menu</button>
            </div>
            <div className="container-orden">{orders}</div>
            
        </div>
    )
}