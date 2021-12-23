import '../css/admin/CreateProducts.scss';

export default function CreateProducts({handleCreateProduct, handleChangeName,handleChangePrice, handleChangeImage, handleChangeType, changeData, handleResetProduct, isPending, handleUpdateProduct, id}){



    return(
        <div className="container-createElements">
            <h1>Productos</h1>
            <div className= "containerInputs">
            
                <input 
                type="text" 
                placeholder="Nombre"
                onChange={(e) => handleChangeName(e.target.value)}
                value={changeData.name}
                ></input>
                <input 
                type="number"
                min= "0" 
                placeholder="Precio"
                onChange={(e) => handleChangePrice(e.target.value)}
                value={changeData.price}
                ></input>
                <input 
                type="text" 
                placeholder="Imagen"
                onChange={(e) => handleChangeImage(e.target.value)}
                value={changeData.image}
                ></input>
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
                    className="btn-menu-add"
                    onClick={()=> {handleCreateProduct()
                        handleResetProduct()}
                    }
                    >Agregar Producto</button>}
                {isPending && <button 
                    className="btn-menu-update"
                    onClick={()=> {handleUpdateProduct(id, changeData)
                        handleResetProduct()}
                }
                >Actualizar Producto</button>}
            </div>
        </div>
    )
}