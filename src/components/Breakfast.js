import '../css/orders/Breakfast.scss';
import { useEffect } from 'react';
import BreakfastMenu from './BreakfastMenu';
import '../css/orders/Comanda.scss';
import { useState } from "react";
import {
  getElements
} from '../crud';

export default  function Breakfast({handleAddProduct, handleReduceProduct}) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getElements('products').then((data) => setData(data))
  }, [])

  let sandwich = data.filter((elem) => elem.type === 'Sandwich');
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

  let drinksBreak = data.filter((elem) => elem.type === 'Bebida');
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