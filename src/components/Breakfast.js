import '../css/orders/Breakfast.scss';
import DrinksBreakfast from './DrinksBreakfast';
import Sandwich from './Sandwich';
import '../css/orders/Comanda.scss';

export default function Breakfast () {
  
  return (
    <div className="components">
      
      <Sandwich />
      <DrinksBreakfast />
    </div>

    
  )
}