import Orders from './Orders';
import coffee from '../images/coffee.png';
import coffeeM  from '../images/coffee-mug.png';
import juice from '../images/orange-juice (1).png';
import sandwich from '../images/sandwich.png';

export default function Breakfast () {
  const order = Orders();
  
  return (
    <div className="comanda">
      <p>Comanda</p>
      <input type="text" placeholder="Nombre Cliente"></input>
      <div>
        <table>
          <thead>
            <tr> {/* add row*/}
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
        <tr>
          <p>Total</p>
          <p>$0</p>
        </tr>
      </div>

      <div>
        <p>Sandwich</p>
        <img src={sandwich} alt="sandwich"/>
        <button>+</button>
        <button>-</button>
      </div>
      <div>
        <p>Bebidas</p>
        <img src={coffee} alt="coffee"/>
        <img src={coffeeM} alt="coffeeMilk"/>
        <img src={juice} alt="juice"/>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  )
}