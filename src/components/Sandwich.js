import '../css/orders/Sandwich.scss'
import menu from '../data';
import BreakfastMenu from './BreakfastMenu';

export default function Sandwich(props) {
  let sandwich = menu["products"].filter((elem) => elem.type === 'Sandwich');
  let menuFood = sandwich.map((element) => {
    return <BreakfastMenu 
      addProduct={props.addProduct} 
      image={element.image} 
      name={element.name} 
      price={element.price} 
      id={"image-food"} 
      width={'50px'}
      productId={element._id}

    />
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