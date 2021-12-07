import '../css/kitchen/pendingOrders.scss';

export default function PendingOrders ({timer, product}) {
    let productsOrder = []; 
  
    for (let i = 0; i < product.length; i++) {
        productsOrder.push( 
        <tr>
          <td>{product[i].qty}</td>
          <td>{product[i].name}</td>
          
        </tr>
      )
    }
    return(
        <div className="container-pendingOrder">
            <p className="timer">{timer}</p>
            <table>
                <thead>
                    <tr>
                        <th>Cant.</th>
                        <th>Producto</th>
                    </tr>
                </thead>
                <tbody>
                    {productsOrder}
                </tbody>
            </table>
            <hr/>
            <button className="btn-finish">Terminar pedido</button>
        </div>
    )
}