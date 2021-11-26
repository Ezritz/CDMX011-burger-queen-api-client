import '../css/orders/DrinksBreakfast.scss';
import menu from '../data';
import BreakfastMenu from './BreakfastMenu';

export default function DrinksLunch() {
    let drinksLunch = menu["products"].filter((elem) => elem.type === 'Bebidas');
    let menuDrinks = drinksLunch.map((element) => {
        return <BreakfastMenu image={element.image} text={element.name + " $" + element.price} className={"image-drinks"} width={'30px'}/>
    });

    return (
        <div className="drinks-2">
            <p>Bebidas:</p>
            {menuDrinks}
        </div>
    )
}