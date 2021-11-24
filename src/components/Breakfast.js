import '../css/orders/Breakfast.scss';
import menu from '../data';
import DrinksBreakfast from './DrinksBreakfast';
import Sandwich from './Sandwich';
import Comanda from './Comanda';
import '../css/orders/Comanda.scss';

let menuArray = menu.filter((elem)=> elem.type === 'Sandwich');
  
console.log('hlis',menuArray);

export default function Breakfast () {
  
  return (
    <div className="components">
      <Comanda />
      <Sandwich />
      <DrinksBreakfast />
    </div>

    
  )
}