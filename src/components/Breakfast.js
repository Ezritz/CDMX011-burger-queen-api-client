import '../css/orders/Breakfast.scss';
import BreakfastMenu from './BreakfastMenu';
import menu from '../data';

let menuArray = menu.filter((elem)=> elem.type === 'Sandwich');
  
let drinksBreak = menu.filter((elem) => elem.type === 'Bebida-desayuno');

let menuFood = menuArray.map((element) => {
  console.log('img',element.img);
  let imgs = element.img
  return <BreakfastMenu image={imgs} text={element.description + " " + element.Price} id={"image-food"}/>
})

let menuDrinks = drinksBreak.map((element, index) => {
  return <BreakfastMenu image={element.img} text={element.description + " " + element.Price} id={"image-drinks"}/>
})


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
        {menuFood}
        
      </div>
      <div className = "drinks">
        <p>Bebidas</p>
        {menuDrinks}
      </div>
    </div>

    
  )
}