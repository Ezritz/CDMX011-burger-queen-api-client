import '../css/orders/BreakfastMenuBox.scss'
import data from '../data';
export default function BreakfastMenu(props) {

  // reduce la lista de productos en caso de click en -
    function reducir(id){
      let exist= props.orderProduct.find((elem) => elem._id === id)
      if (exist  && exist.qty > 1){
        exist.qty =-1;
      }
      if(exist && exist.qty === 1) {
        return props.orderProduct.filter(elem => elem._id !== id)
      }
      return props.orderProduct
    }
    // agrega los productos en arreglo
    function add(id){
      let exist= props.orderProduct.find((elem) => elem._id === id)
      if (exist){
        exist.qty +=1
      } else{
        let prod = data.products.find(elem => elem._id === id)
        props.orderProduct.push({...prod, qty:1})
      }
      return props.orderProduct
    }
  return (
    <div className="container-menu">
      <div className="container-img">
        <img src={props.image} alt="img" className={props.id} width={props.width}></img>
      </div>
      <button 
      className="add"
      onClick={()=> {
        add(props.productId)
      }}>+</button>
      <button 
      className="sust"
      onClick={()=>{reducir(props.productId)}}
      >-</button>
      <p className='name-text'>{props.name + ' $' + props.price}</p>
    </div>
  )
}