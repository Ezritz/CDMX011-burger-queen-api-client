import React, { useState, useEffect } from 'react';
import '../css/kitchen/kitchen.scss';
import myImage from '../images/Logo.png';
import AdminProfileProducts from '../components/AdminProfileProducts';
import AdminProfileUsers from '../components/AdminProfileUsers';
import Cookies from 'universal-cookie';
import { Logout } from '../lib/fakeServer';

import Swal from 'sweetalert2'

const cookies= new Cookies();

export default function AdminProfile() {
    
    const [activeMenu, setActiveMenu] = useState('');
    
    return (
        <div>
            <div className="header-kitchen">
                <img src={myImage} className="user-kitchen"></img>
                <p>{cookies.get("name")}</p>
                <button 
                className="logout-kitchen"
                onClick={Logout}>cerrar sesion</button>
            </div>
            <div className="container-orden">
                <button
                className="btn-menu-admin"
                onClick={()=> setActiveMenu('users')}
                >Usuarios</button>
                <button
                className="btn-menu-admin"
                onClick={()=> setActiveMenu('products')}
                >Productos</button>
                
                
                
            </div>
            
            {activeMenu === 'users' && (
                <AdminProfileUsers/>
            )}
            {activeMenu === 'products' && (
                <AdminProfileProducts/>
            )}

            
        </div>
        
    )
}