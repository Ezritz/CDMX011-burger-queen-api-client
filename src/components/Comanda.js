import React, { useState } from 'react';
import data from '../data';


export default function Comanda({handleResetComanda, handleNameClient, otraOrden, handleRemoveProduct, handleSendComanda}) {
  
  let itemOrder = []; 
  
  for (let i = 0; i < otraOrden.products.length; i++) {
    itemOrder.push( 
      <tr>
        <td>{otraOrden.products[i].qty}</td>
        <td>{otraOrden.products[i].name}</td>
        <td>{'$'+(otraOrden.products[i].price*otraOrden.products[i].qty)}</td>
        <td><button 
        className="btn-delete"
        onClick={() => handleRemoveProduct(otraOrden.products[i]._id)}>
        <img src="https://i.ibb.co/6BtwSzC/eliminar.png" alt="eliminar" heigth="20px" width="20px"></img> </button></td>
      </tr>
    )
  }

  let total = 0;
  for(let i = 0; i < otraOrden.products.length; i++){
    total += otraOrden.products[i].price*otraOrden.products[i].qty;
  }

  

  //console.log('itemOrder: ',itemOrder);

  return (
    <div className="comanda">
      <p className="title-comanda">Comanda</p>
      <input 
      type="text" 
      placeholder="Nombre Cliente"
      onChange={(e) => handleNameClient(e.target.value)}
      value={otraOrden.client}
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
          <p className="total">Total: ${total}</p>
          
          <p className="total">{otraOrden.client}</p>
        </div>
      </div>
      <div className="btns-comanda">
        <button
        className="btn-comanda"
        onClick={()=> {handleSendComanda()
        handleResetComanda()}}
        >Enviar comanda</button>
        <button 
        className="btn-cancelar"
        onClick={()=> handleResetComanda()}
        >Cancelar</button>
      </div>
      
    </div>  
  )
    
}