import '../css/orders/DrinksBreakfast.scss';
import menu from '../data';
import BreakfastMenu from './BreakfastMenu';

export default function drinksBreakfast(props) {
    let drinksBreak = menu["products"].filter((elem) => elem.type === 'Bebida-desayuno');
    let menuDrinks = drinksBreak.map((element) => {
        return <BreakfastMenu image={element.image} text={element.name + " $" + element.price} item={element} addProduct={props.addProduct} reduceProduct={props.reduceProduct} orderProduct={props.orderProducts} className={"image-drinks"} width={'48px'}/>
    });

    return (
        <div className="drinks-1">
            <p>Bebidas:</p>
            {menuDrinks}
        </div>
    )
}