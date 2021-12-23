import { useState } from 'react';

export default function CreateUsers({handleCreateUser, handleChangeName,handleChangeEmail, handleChangePassword, handleChangeRole, changeData, role, handleResetUser, isPending, handleUpdateUser, id}) {
    

    return(
        <div>
            <h1>Usuarios</h1>
            <input 
            type="text" 
            placeholder="Nombre"
            onChange={(e) => handleChangeName(e.target.value)}
            value={changeData.name}
            ></input><br/>
            <input 
            type="email" 
            placeholder="Email"
            onChange={(e) => handleChangeEmail(e.target.value)}
            value={changeData.email}
            ></input><br/>
            <input 
            type="password" 
            placeholder="Password"
            onChange={(e) => handleChangePassword(e.target.value)}
            value={changeData.password}
            ></input><br/>
            <select 
            name="role"
            onChange={(e) => handleChangeRole(e.target.value)}
            value={role}
            >
            <option value="" disabled>Selecciona una opcion</option>
            <option value="admin">Admin</option>
            <option value="waiter">Mesero</option>
            <option value="kitchen">Cocinero</option>
            </select> <br/>
            {!isPending && 
                <button
                onClick={()=> {handleCreateUser()
                    handleResetUser()}
                }
                >Agregar Usuario</button>}
            {isPending && <button 
                onClick={()=> {handleUpdateUser(id, changeData)
                handleResetUser()}
            }
            >Actualizar</button>}
            
            

        </div>
    )
}