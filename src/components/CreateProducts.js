export default function CreateProducts({handleCreateProduct, handleChangeName,handleChangePrice, handleChangeImage, handleChangeType, changeData, handleResetProduct, isPending, handleUpdateProduct, id}){



    return(
        <div>
            <h1>Productos</h1>
            <input 
            type="text" 
            placeholder="Nombre"
            onChange={(e) => handleChangeName(e.target.value)}
            value={changeData.name}
            ></input><br/>
            <input 
            type="number"
            min= "0" 
            placeholder="Precio"
            onChange={(e) => handleChangePrice(e.target.value)}
            value={changeData.price}
            ></input><br/>
            <input 
            type="text" 
            placeholder="Imagen"
            onChange={(e) => handleChangeImage(e.target.value)}
            value={changeData.image}
            ></input><br/>
            <select 
            name="Tipo"
            onChange={(e) => handleChangeType(e.target.value)}
            value={changeData.type}
            >
            <option value="" disabled>Selecciona una opcion</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Bebida">Bebida desayuno</option>
            <option value="Hamburguesas">Hamburguesas</option>
            <option value="Acompañamiento">Acompañamientos</option>
            <option value="Bebidas">Bebidas almuerzo</option>
            </select> <br/>
            {!isPending && 
                <button
                onClick={()=> {handleCreateProduct()
                    handleResetProduct()}
                }
                >Agregar Producto</button>}
            {isPending && <button 
                onClick={()=> {handleUpdateProduct(id, changeData)
                    handleResetProduct()}
            }
            >Actualizar Producto</button>}
        </div>
    )
}