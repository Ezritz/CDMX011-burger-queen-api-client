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
                  className="btn-edit-product"
                  onClick={()=> handleChangeDataUser(data[i], data[i].role)}
                  >Editar</button></td>
                  <td><button
                  className="btn-delete-product"
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
                  className="btn-edit-product"
                  onClick={()=> handleChangeDataUser(data[i], data[i].role)}
                  >Editar</button></td>
                  <td><button
                  className="btn-delete-product"
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
                  className="btn-edit-product"
                  onClick={()=> handleChangeDataUser(data[i], data[i].role)}
                  >Editar</button></td>
                  <td><button
                  className="btn-delete-product"
                  onClick={()=> handleDeleteUser(data[i].id)}
                  >Borrar</button></td>
                </tr>
            )
        }
        
    }
    
    return(
        <>
            <table className="table-update-Products">
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
            
    
        </>
    )
}