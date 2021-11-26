import React, { useState } from 'react';

export default function Comanda() {
  const [clientName, setClientName] = useState('');

  const resetComanda = () => {
    setClientName('');
  }


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