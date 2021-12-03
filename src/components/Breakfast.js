import '../css/orders/Breakfast.scss';
//import DrinksBreakfast from './DrinksBreakfast';
//import Sandwich from './Sandwich';
import BreakfastMenu from './BreakfastMenu';
import '../css/orders/Comanda.scss';
import menu from '../data'

export default function Breakfast({handleAddProduct, handleReduceProduct}) {
 
  let sandwich = menu["products"].filter((elem) => elem.type === 'Sandwich');
  let menuFood = sandwich.map((element) => {
    return <BreakfastMenu
      image={element.image}
      name={element.name}
      price={element.price}
      id={"image-food"}
      width={'50px'}
      productId={element._id}
      handleAddProduct={handleAddProduct}
      handleReduceProduct={handleReduceProduct}
    />
  })

  let drinksBreak = menu["products"].filter((elem) => elem.type === 'Bebida');
  let menuDrinks = drinksBreak.map((element) => {
    return <BreakfastMenu
      image={element.image}
      name={element.name}
      price={element.price}
      productId={element._id} 
      handleAddProduct={handleAddProduct} className={"image-drinks"} width={'48px'}
      handleReduceProduct={handleReduceProduct} />
  });

  return (
    <div className="components">
      <div className="sandwiches">
        <p>Sandwiches:</p>
        <div className='sandwichito'>
          {menuFood}
        </div>
      </div>
      <div className="drinks-1">
        <p>Bebidas:</p>
        {menuDrinks}
      </div>
    </div>


  )
}