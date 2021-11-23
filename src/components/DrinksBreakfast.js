//
import menu from '../data';
import BreakfastMenu from './BreakfastMenu';

export default function drinksBreakfast() {
    let drinksBreak = menu.filter((elem) => elem.type === 'Bebida-desayuno');
    let menuDrinks = drinksBreak.map((element) => {
        return <BreakfastMenu image={element.img} text={element.description + " " + element.Price} id={"image-drinks"}/>
    });

    return (
        <div className="drinks">
            <p>Bebidas:</p>
            {menuDrinks}
        </div>
    )
}