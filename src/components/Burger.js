import '../css/orders/Sandwich.scss';
import menu from '../data';
import BreakfastMenu from './BreakfastMenu';

export default function Burgers() {
    let burgers = menu.filter((elem) => elem.type === 'Hamburguesas');
    let menuBurgers = burgers.map((element) => {
        return <BreakfastMenu image={element.img} text={element.description + " " + element.Price} className={"image-drinks"} width={'48px'}/>
    });

    return (
        <div className="sandwiches">
          <p>Hamburguesas:</p>
          <div className='sandwichito'>
            {menuBurgers}
          </div>
        </div>
    )
}