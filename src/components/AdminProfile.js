import React, { useState, useEffect } from 'react';
import '../css/kitchen/kitchen.scss';
import myImage from '../images/Logo.png';
import EditUsers from '../components/EditUSers';
import CreateUsers from '../components/CreateUsers'
import Cookies from 'universal-cookie';
import { Logout } from '../lib/fakeServer';
import {
    getElements, updateElements, createElements
} from '../crud';
import Swal from 'sweetalert2'

const cookies= new Cookies();

export default function AdminProfile() {
    const [data, setData] = useState([]);
    const [role, setRole] = useState('');
   
    const [changeData, setChangeData] = useState(
        {
            "email":'',
            "name": '',
            "password":'',
            "role": {
                "admin":false,
                "waiter": false,
                "kitchen": false
            }
        }    
    );

    const handleChangeName = (newName) => {
        setChangeData({...changeData, "name": newName})
    }

    const handleChangeEmail = (newEmail) => {
        setChangeData({...changeData, "email": newEmail})
    }

    const handleChangePassword = (newPassword) => {
        setChangeData({...changeData, "password": newPassword})
    }

    
    const handleChangeRole = (newRole) => {
        
        
        let objRole;
        if(newRole === 'admin') {
            objRole = {
                "admin":true,
                "waiter": false,
                "kitchen": false
            }
        } 
        if(newRole == 'waiter') {
            objRole = {
                "admin":false,
                "waiter": true,
                "kitchen": false
            }
        } 
        if(newRole === 'chef') {
            objRole = {
                "admin":false,
                "waiter": false,
                "kitchen": true
            }
        }
        setChangeData({...changeData, "role": objRole})
        setRole(newRole);
        /*
        Swal('Se creo al usuario exitosamente')
        console.log('role', role);*/
    }


    const handleCreateUser = async () => {
       
        console.log('changeData', changeData);
        await createElements("users", changeData);
        setData([]);
    }
    
    const handleChangeDataUser = (id, element) => {
        updateElements('users', id, { ...element })
         setData([]);
        Swal.fire(`El rol de usuario ha sido modificado`)
    }
    const handleResetUser=() => {
        setRole('');
        setChangeData({
            "email":'',
            "name": '',
            "password":'',
            "role": {
                "admin":false,
                "waiter": false,
                "kitchen": false
            }
        })
      }

    useEffect(() => {
        getElements('users').then((data) => setData(data));

    },[data]);
    /*
    const handleChangeChef = () => {
        getElements('users').then((data) => setData(data.filter((element) => element.role.admin === 'false')))
    }
    */
    
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
                <CreateUsers handleCreateUser={handleCreateUser} handleChangeName={handleChangeName} changeData={changeData} handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword} handleChangeRole={handleChangeRole} role={role} handleResetUser={handleResetUser}/>
                <EditUsers data={data} handleChangeDataUser={handleChangeDataUser}/>
                
            </div>
            
        </div>
        
    )
}