import { useState, useEffect } from 'react';
import EditUsers from '../components/EditUSers';
import CreateUsers from '../components/CreateUsers'
import {
    getElements, updateElements, createElements, deleteElements
} from '../crud';

export default function AdminProfileUsers(){
    const [data, setData] = useState([]);
    const [role, setRole] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [id, setId] = useState(0);
   
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
        if(newRole === 'kitchen') {
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
    
    const handleChangeDataUser = (newData, newRole) => {
        // updateElements('users', id, { ...element })
        // setData([]);
        let valuesObj = Object.values(newRole);
        
        let indexTrue = valuesObj.indexOf(true);
        let keysObj= Object.keys(newRole);
        let newNewRole = keysObj[indexTrue];
        
        console.log('newData', newData.email)
        console.log('newRole', newRole)
        console.log('newnwRole', newNewRole)
        setChangeData({...changeData, "name": newData.name, "email": newData.email,"password": newData.password, "role":newRole })
        setRole(newNewRole);
        setId(newData.id)
        setIsPending(true)
        // setRole(handleChangeRole(newRole))

        console.log('changedata',changeData);
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

    const handleDeleteUser = (id) => {
        console.log(id)
        deleteElements("users", id)
        getElements('users').then((data) => setData(data));
    }
    
    const handleUpdateUser = (id, newBody) => {
        console.log('id-newbody', id, newBody)
        updateElements("users", id, newBody);
        setData([])
        setIsPending(false)

    }

    return (
        <div>
            <CreateUsers handleCreateUser={handleCreateUser} handleChangeName={handleChangeName} 
                changeData={changeData} handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword} 
                handleChangeRole={handleChangeRole} role={role} handleResetUser={handleResetUser} handleChangeDataUser={handleChangeDataUser} 
                isPending={isPending} handleUpdateUser={handleUpdateUser} id={id} />
            
                <EditUsers data={data} handleChangeDataUser={handleChangeDataUser} handleDeleteUser={handleDeleteUser}/>
        </div>
        
    )
}