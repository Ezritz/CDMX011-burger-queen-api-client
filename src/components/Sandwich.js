import '../css/orders/Sandwich.scss'
import menu from '../data';
import BreakfastMenu from './BreakfastMenu';

export default function Sandwich() {
  let sandwich = menu.filter((elem) => elem.type === 'Sandwich');
  let menuFood = sandwich.map((element) => {
    console.log('img',element.img);
    let imgs = element.img
    return <BreakfastMenu image={imgs} text={element.description + " " + element.Price} id={"image-food"}/>
  })

  return (
    <div className="sandwiches">
      <p>Sandwiches:</p>
      {menuFood}
    </div>
  )
}