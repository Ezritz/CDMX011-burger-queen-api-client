import '../css/orders/Sandwich.scss';
import menu from '../data';
import BreakfastMenu from './BreakfastMenu';

export default function Extras() {
    let extras = menu.filter((elem) => elem.type === 'Acompañamiento');
    let menuExtras = extras.map((element) => {
        return <BreakfastMenu image={element.img} text={element.description + " " + element.Price} className={"image-drinks"} width={'46px'}/>
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