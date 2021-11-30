import '../css/orders/Breakfast.scss';
import DrinksBreakfast from './DrinksBreakfast';
import Sandwich from './Sandwich';
import '../css/orders/Comanda.scss';

export default function Breakfast (props) {
  
  return (
    <div className="components">
      
      <Sandwich addProduct={props.addProduct} reduceProduct={props.reduceProduct} orderProduct={props.orderProducts}/>
      <DrinksBreakfast addProduct={props.addProduct} reduceProduct={props.reduceProduct} orderProduct={props.orderProducts}/>
    </div>

    
  )
}