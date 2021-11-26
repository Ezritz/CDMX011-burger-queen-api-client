import '../css/orders/Sandwich.scss'
import menu from '../data';
import BreakfastMenu from './BreakfastMenu';

export default function Sandwich() {
  let sandwich = menu["products"].filter((elem) => elem.type === 'Sandwich');
  let menuFood = sandwich.map((element) => {
    console.log('img',element.img);
    let imgs = element.image
    return <BreakfastMenu image={imgs} text={element.name + " $" + element.price} id={"image-food"} width={'50px'}/>
  })

  return (
    <div className="sandwiches">
      <p>Sandwiches:</p>
      <div className='sandwichito'>
        {menuFood}
      </div>
    </div>
  )
}