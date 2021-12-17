import React, { useState, useEffect } from 'react';
import '../css/kitchen/kitchen.scss';
import myImage from '../images/Logo.png';
import Cookies from 'universal-cookie';
import { Logout } from '../lib/fakeServer';
import {
    getElements, updateElements
} from '../crud';
import Swal from 'sweetalert2'

const cookies= new Cookies();
export default function AdminProfile() {

    return (
        <div>
            <div className="header-kitchen">
                <img src={myImage} className="user-kitchen"></img>
                <p>{cookies.get("name")}</p>
                <button 
                className="logout-kitchen"
                onClick={Logout}>cerrar sesion</button>
            </div>
            <div className="container-orden"></div>
            
        </div>
    )
}