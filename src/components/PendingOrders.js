import '../css/kitchen/pendingOrders.scss';
import { useEffect, useState } from 'react';
import { updateElements } from '../crud';

export default function PendingOrders ({timer, product, id, handleChangeStatus, element}) {
    let productsOrder = [];
    const [contHours, setContHours] = useState(0);
    const [contMinutes, setContMinutes] = useState(0);
    const [contSeconds, setContSeconds] = useState(0);

    let oldDate = new Date(timer)
    let now = new Date()
    let diff = now - oldDate
    const horasMilSec = 1000 * 60 * 60
    let  hours = diff/ horasMilSec
    let minutes  = [hours - Math.floor(hours)]*60
    let seconds = [minutes -Math.floor(minutes)]*60
    // console.log([Math.floor(hours), Math.floor(minutes), Math.floor(seconds)])
    let result = [Math.floor(hours), Math.floor(minutes), Math.floor(seconds)]
    
    /*
    setContHours(result[0]);
    setContMinutes(result[1]); 
    setContSeconds(result[2]);
    */
   if (contSeconds == 60){
        contSeconds = 0;
        contMinutes = contMinutes +1
    }

    /*
    useEffect(() => {
        const interval = setInterval(() => { 
            setContSeconds((current) => current + 1);
            if (contSeconds == 60){
                setContSeconds(0);
                setContMinutes((current) => current + 1)
            }
        },1000)
        return () => clearInterval(interval) 
    },[])
    */
    
//}


    for (let i = 0; i < product.length; i++) {
        productsOrder.push( 
        <tr>
          <td>{product[i].qty}</td>
          <td>{product[i].name}</td>
          
        </tr>
      )
    }
    return(
        <div className="container-pendingOrder">
            <p className="timer">Orden: {id}</p>
            <table>
                <thead>
                    <tr>
                        <th>Cant.</th>
                        <th>Producto</th>
                    </tr>
                </thead>
                <tbody>
                    {productsOrder}
                </tbody>
            </table>
            <hr/>
            <button 
            className="btn-finish"
            onClick= {()=>handleChangeStatus(id, element)}
            >Terminar pedido</button>
        </div>
    )
}