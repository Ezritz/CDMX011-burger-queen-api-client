import '../css/orders/BreakfastMenuBox.scss'
export default function BreakfastMenu(props) {
    
  return (
    <div className="container-menu">
      <div className="container-img">
        <img src={props.image} alt="img" className={props.id} width={props.width}></img>
      </div>
      <button 
      className="add"
      onClick={()=>console.log(props.addProduct)}
      >+</button>
      <button 
      className="sust"
      onClick={()=>console.log(props.item)}
      >-</button>
      <p className='name-text'>{props.text}</p>
    </div>
  )
}