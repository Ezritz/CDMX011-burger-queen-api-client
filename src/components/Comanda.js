import React, { useState } from 'react';
import data from '../data';

export default function Comanda(props) {
  const [clientName, setClientName] = useState('');

  // const [order, setOrder] = useState([]);
  const resetComanda = () => {
    setClientName('');
  }

  let itemOrder = []; 

  for (let i = 0; i < props.orderProducts.length; i++) {
    itemOrder.push( 
      <tr>
        <td>{props.orderProducts[i].qty}</td>
        <td>{props.orderProducts[i].name}</td>
        <td>{props.orderProducts[i].price}</td>
        <td>BOTE</td>
      </tr>
    )
  }

  console.log('itemOrder: ',itemOrder);

  return (
    <div className="comanda">
      <p className="title-comanda">Comanda</p>
      <input 
      type="text" 
      placeholder="Nombre Cliente"
      onChange={(e) => setClientName(e.target.value)}
      value={clientName}
      id="client-name"></input>
      <div id="total-products">
        <table className="table">
          <thead>
            <tr className="title-total"> {/* add row*/}
              <th>Cant.</th> {/* add info to the cell in the column */}
              <th>Producto</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            <td>
              {itemOrder}
            </td>
          </tbody>
        </table> 
        <br/>
        <tr className="total">
          <p className="total">Total</p>
          <p className="total">$0</p>
          <p className="total">{clientName}</p>
        </tr>
      </div>
      <div className="btns-comanda">
        <button
        className="btn-comanda">Enviar comanda</button>
        <button 
        className="btn-cancelar"
        onClick={resetComanda}
        >Cancelar</button>
      </div>
      
    </div>  
  )
    
}