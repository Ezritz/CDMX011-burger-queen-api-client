import '../css/orders/Sandwich.scss';
import menu from '../data';
import BreakfastMenu from './BreakfastMenu';

export default function Extras() {
    let extras = menu["products"].filter((elem) => elem.type === 'Acompañamiento');
    let menuExtras = extras.map((element) => {
        return <BreakfastMenu image={element.image} text={element.name + " $" + element.price} className={"image-drinks"} width={'46px'}/>
    });

    return (
        <div className="sandwiches">
          <p>Acompañamientos:</p>
          <div className='sandwichito'>
            {menuExtras}
          </div>
        </div>
    )
}