export default function Comanda() {

  return (
    <div className="comanda">
      <p className="title-comanda">Comanda</p>
      <input type="text" placeholder="Nombre Cliente" id="client-name"></input>
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
        </tr>
      </div>
      <button className="btn-comanda">Enviar comanda</button>
    </div>  
  )
    
}