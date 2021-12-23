

export default function EditProducts({data, handleChangeDataProduct, handleDeleteProduct}) {

    let products = [];

    for (let i = 0; i < data.length; i++) {
        
        products.push( 
            <tr>
                <td>{data[i].name}</td>
                <td>{data[i].price}</td>
                <td>{data[i].image}</td>
                <td>{data[i].type}</td>
                
                <td><button
                onClick={()=> handleChangeDataProduct(data[i])}
                >Editar</button></td>
                <td><button
                onClick={()=> handleDeleteProduct(data[i].id)}
                >Borrar</button></td>
            </tr>
        )
        
    }


    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Tipo</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                  {products}  
                </tbody>
            </table>
            <hr/>
    
        </>
    )
}