import '../css/orders/Breakfast.scss';
import DrinksBreakfast from './DrinksBreakfast';
import Sandwich from './Sandwich';
import '../css/orders/Comanda.scss';

export default function Breakfast (props) {
  
  return (
    <div className="components">
      
      <Sandwich addProducts={props.addProducts} reduceProducts={props.reduceProducts}/>
      <DrinksBreakfast addProducts={props.addProducts} reduceProducts={props.reduceProducts}/>
    </div>

    
  )
}