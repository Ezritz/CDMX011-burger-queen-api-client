import '../css/orders/Breakfast.scss';
import DrinksLunch from './DrinksLunch';
import Burgers from './Burger';
import Extras from './Extras';

export default function Lunch() {
    return (
        <div className="components">
            <div>
                <Burgers />
                <Extras />
            </div>
            <DrinksLunch />
        </div>
    )
}