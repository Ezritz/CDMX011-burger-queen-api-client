import '../css/admin/EditProducts.scss';

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
                className="btn-edit-product"
                onClick={()=> handleChangeDataProduct(data[i])}
                >Editar</button></td>
                <td><button
                className="btn-delete-product"
                onClick={()=> handleDeleteProduct(data[i].id)}
                >Borrar</button></td>
            </tr>
        )
        
    }


    return(
        <>
            <table className="table-update-Products">
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
        </>
    )
}