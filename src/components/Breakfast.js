import coffee from '../images/coffee.png';
import coffeeM  from '../images/coffee-mug.png';
import juice from '../images/orange-juice (1).png';
import sandwich from '../images/sandwich.png';
import styles from '../css/orders/Breakfast.scss';
export default function Breakfast () {
  
  return (
    <div className="comanda">
      <p>Comanda</p>
      <input type="text" placeholder="Nombre Cliente" className="client-name"></input>
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
        <img src={sandwich} alt="sandwich" className="imgs"/>
        <button>+</button>
        <button>-</button>
      </div>
      <div className = "drinks">
        <p>Bebidas</p>
        <img src={coffee} alt="coffee" className="imgs"/>
        <button className="btns-food">+</button>
        <button className="btns-food">-</button>
        <img src={coffeeM} alt="coffeeMilk" className="imgs"/>
        <button className="btns-food">+</button>
        <button className="btns-food">-</button>
        <img src={juice} alt="juice" className="imgs"/>
        <button className="btns-food">+</button>
        <button className="btns-food">-</button>
      </div>
    </div>

    
  )
}