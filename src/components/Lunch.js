import '../css/orders/Breakfast.scss';
import menu from '../data';
import BreakfastMenu from './BreakfastMenu';

export default function Lunch({handleAddProduct, handleReduceProduct}) {
    let burgers = menu["products"].filter((elem) => elem.type === 'Hamburguesas');
    let menuBurgers = burgers.map((element) => {
        return <BreakfastMenu 
        image={element.image}
        name={element.name}
        price={element.price}
        productId={element._id}
        handleAddProduct={handleAddProduct}
        handleReduceProduct={handleReduceProduct}
        className={"image-drinks"} width={'48px'}/>
    });

    let drinksLunch = menu["products"].filter((elem) => elem.type === 'Bebidas');
    let menuDrinks = drinksLunch.map((element) => {
        return <BreakfastMenu 
        image={element.image}
        name={element.name}
        price={element.price}
        productId={element._id}
        handleAddProduct={handleAddProduct}
        handleReduceProduct={handleReduceProduct}
        className={"image-drinks"} width={'30px'}/>
    });

    let extras = menu["products"].filter((elem) => elem.type === 'Acompañamiento');
    let menuExtras = extras.map((element) => {
        return <BreakfastMenu  
        image={element.image}
        name={element.name}
        price={element.price}
        productId={element._id}
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