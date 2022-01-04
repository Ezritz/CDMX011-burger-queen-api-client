import '../css/orders/Breakfast.scss';
import BreakfastMenu from './BreakfastMenu';
import { useEffect, useState } from 'react';
import {
    getElements
  } from '../crud';

export default function Lunch({handleAddProduct, handleReduceProduct}) {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      getElements('products').then((data) => setData(data))
    }, [])
  

    let burgers = data.filter((elem) => elem.type === 'Hamburguesas');
    let menuBurgers = burgers.map((element) => {
        return <BreakfastMenu 
        image={element.image}
        name={element.name}
        price={element.price}
        productId={element.id}
        handleAddProduct={handleAddProduct}
        handleReduceProduct={handleReduceProduct}
        className={"image-drinks"} width={'48px'}/>
    });

    let drinksLunch = data.filter((elem) => elem.type === 'Bebidas');
    let menuDrinks = drinksLunch.map((element) => {
        return <BreakfastMenu 
        image={element.image}
        name={element.name}
        price={element.price}
        productId={element.id}
        handleAddProduct={handleAddProduct}
        handleReduceProduct={handleReduceProduct}
        className={"image-drinks"} width={'30px'}/>
    });

    let extras = data.filter((elem) => elem.type === 'Acompañamiento');
    let menuExtras = extras.map((element) => {
        return <BreakfastMenu  
        image={element.image}
        name={element.name}
        price={element.price}
        productId={element.id}
        handleAddProduct={handleAddProduct}
        handleReduceProduct={handleReduceProduct}
        className={"image-drinks"} width={'46px'}/>
    });

    return (
        <div className="components">
            <div>
                <div className="sandwiches">
                    <p>Hamburguesas:</p>
                    <div className='sandwichito'>
                    {menuBurgers}
                    </div>
                </div>
                <div className="sandwiches">
                    <p>Acompañamientos:</p>
                    <div className='sandwichito'>
                        {menuExtras}
                    </div>
                </div>
            </div>
            <div className="drinks-2">
                <p>Bebidas:</p>
                {menuDrinks}
            </div>
        </div>
    )
}