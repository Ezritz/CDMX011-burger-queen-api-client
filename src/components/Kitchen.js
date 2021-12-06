import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import { resolveSoa } from 'dns/promises';

function Kitchen() {
    const [orders, setOrders] = useState([]);

    const productsList = () => {
        fetch('http://localhost:3001/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                const pendingProducts = data.filter((order).status === 'pending')
                setOrders(pendingProducts);
            })
    };
    console.log("fetch",orders)
    /*
    useEffect(() => {
       
    }, [])
    */
}
