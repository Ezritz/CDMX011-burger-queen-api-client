import '../css/orders/BreakfastMenuBox.scss'
import data from '../data';
export default function BreakfastMenu(props) {
    
  return (
    <div className="container-menu">
      <div className="container-img">
        <img src={props.image} alt="img" className={props.id} width={props.width}></img>
      </div>
      <button 
      className="add"
      onClick={()=> {
        console.log('idp',props.id)
        console.log("yoooo: ", props.addProduct)
        props.addProduct({id:props.productId, name:props.name, price:props.price});
      }}>+</button>
      <button 
      className="sust"
      onClick={()=>console.log(props.item)}
      >-</button>
      <p className='name-text'>{props.name + ' $' + props.price}</p>
    </div>
  )
}