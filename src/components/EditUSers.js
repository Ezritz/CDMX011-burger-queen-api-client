export default function EditUsers({data, handleChangeDataUser, handleDeleteUser }) {
    
    let users = [];
    
    for (let i = 0; i < data.length; i++) {
        if(data[i].role.admin === true) {
            users.push( 
                <tr>
                  <td>{data[i].name}</td>
                  <td>{data[i].email}</td>
                  <td>{data[i].password}</td>
                  <td>Admin</td>
                  <td><button
                  onClick={()=> handleChangeDataUser(data[i], data[i].role)}
                  >Editar</button></td>
                  <td><button
                  onClick={()=> handleDeleteUser(data[i].id)}
                  >Borrar</button></td>
                </tr>
            )
        } else if(data[i].role.waiter === true){
            users.push( 
                <tr>
                  <td>{data[i].name}</td>
                  <td>{data[i].email}</td>
                  <td>{data[i].password}</td>
                  <td>Waiter</td>
                  <td><button
                  onClick={()=> handleChangeDataUser(data[i], data[i].role)}
                  >Editar</button></td>
                  <td><button
                  onClick={()=> handleDeleteUser(data[i].id)}
                  >Borrar</button></td>
                </tr>
            )
        } else {
            users.push( 
                <tr>
                  <td>{data[i].name}</td>
                  <td>{data[i].email}</td>
                  <td>{data[i].password}</td>
                  <td>Chef</td>
                  <td><button
                  onClick={()=> handleChangeDataUser(data[i], data[i].role)}
                  >Editar</button></td>
                  <td><button
                  onClick={()=> handleDeleteUser(data[i].id)}
                  >Borrar</button></td>
                </tr>
            )
        }
        
    }
    
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Puesto</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                  {users}  
                </tbody>
            </table>
            <hr/>
    
        </>
    )
}