import '../css/orders/Breakfast.scss';
import menu from '../data';
import DrinksBreakfast from './DrinksBreakfast';
import Sandwich from './Sandwich';

let menuArray = menu.filter((elem)=> elem.type === 'Sandwich');
  
console.log('hlis',menuArray);

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
        <Sandwich />
        
      </div>
      <DrinksBreakfast />
    </div>

    
  )
}