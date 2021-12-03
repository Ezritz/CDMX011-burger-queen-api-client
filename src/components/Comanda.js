import React, { useState } from 'react';
import data from '../data';

export default function Comanda({handleResetComanda, handleNameClient, otraOrden}) {
  
  let itemOrder = []; 
  
  for (let i = 0; i < otraOrden.item.length; i++) {
    itemOrder.push( 
      <tr>
        <td>{otraOrden.item[i].qty}</td>
        <td>{otraOrden.item[i].name}</td>
        <td>{'$'+(otraOrden.item[i].price*otraOrden.item[i].qty)}</td>
        <td>BOTE</td>
      </tr>
    )
  }

  //console.log('itemOrder: ',itemOrder);

  return (
    <div className="comanda">
      <p className="title-comanda">Comanda</p>
      <input 
      type="text" 
      placeholder="Nombre Cliente"
      onChange={(e) => handleNameClient(e.target.value)}
      value={otraOrden.nombre}
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
            
              {itemOrder}
          </tbody>
        </table> 
        <br/>
        <div className="total">
          <p className="total">Total</p>
          <p className="total">$0</p>
          <p className="total">{otraOrden.nombre}</p>
        </div>
      </div>
      <div className="btns-comanda">
        <button
        className="btn-comanda">Enviar comanda</button>
        <button 
        className="btn-cancelar"
        onClick={()=> handleResetComanda()}
        >Cancelar</button>
      </div>
      
    </div>  
  )
    
}