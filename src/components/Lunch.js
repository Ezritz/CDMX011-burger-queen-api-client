import '../css/orders/Breakfast.scss';
import DrinksLunch from './DrinksLunch';
import Burgers from './Burger';
import Extras from './Extras';

export default function Lunch(props) {
    return (
        <div className="components">
            <div>
                <Burgers addProducts={props.addProducts} reduceProducts={props.reduceProducts}/>
                <Extras addProducts={props.addProducts} reduceProducts={props.reduceProducts}/>
            </div>
            <DrinksLunch addProducts={props.addProducts} reduceProducts={props.reduceProducts}/>
        </div>
    )
}