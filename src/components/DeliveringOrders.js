export default function DeliveredOrders({product, id, client, handleChangeStatus, handleChangeDelivered, element}) {
    let productsOrderDelivered = [];
    let nameClient = client;
    for (let i = 0; i < product.length; i++) {
        productsOrderDelivered.push( 
        <tr>
          <td>{product[i].qty}</td>
          <td>{product[i].name}</td>
          
        </tr>
      )
    }
    return(
        <div className="container-pendingOrder">
            <p className="timer">Orden: {client}</p>
            <table>
                <thead>
                    <tr>
                        <th>Cant.</th>
                        <th>Producto</th>
                    </tr>
                </thead>
                <tbody>
                    {productsOrderDelivered}
                </tbody>
            </table>
            <hr/>
            <button 
            className="btn-finish"
            onClick= {()=>{handleChangeStatus(id,element)
            handleChangeDelivered()}}
            
            >Orden entregada</button>
        </div>
    )
}