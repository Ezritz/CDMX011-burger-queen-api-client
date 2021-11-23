import '../css/orders/Breakfast.scss'
export default function BreakfastMenu(props) {
    
  return (
    <div className="container-menu">
      <div className="container-img">
        <img src={props.image} alt="img" className={props.id}></img>
      </div>
      <button className="add">+</button>
      <button className="sust">-</button>
      <p>{props.text}</p>
    </div>
  )
}