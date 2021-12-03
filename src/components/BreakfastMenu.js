import '../css/orders/BreakfastMenuBox.scss'
import data from '../data';
export default function BreakfastMenu({image, id, width, handleAddProduct,handleReduceProduct, productId, name, price}) {

  return (
    <div className="container-menu">
      <div className="container-img">
        <img src={image} alt="img" className={id} width={width}></img>
      </div>
      <button 
      className="add"
      onClick={()=> {
        handleAddProduct(productId)
      }}>+</button>
      <button 
      className="sust"
      onClick={()=>{handleReduceProduct(productId)}}
      >-</button>
      <p className='name-text'>{name + ' $' + price}</p>
    </div>
  )
}