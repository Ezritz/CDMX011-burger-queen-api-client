import CreateProducts from "./CreateProducts";
import EditProducts from '../components/EditProducts';
import { useState, useEffect } from 'react';
import {
    getElements, updateElements, createElements, deleteElements
} from '../crud';
export default function AdminProfileProducts(){
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [id, setId] = useState(0);
   
    const [changeData, setChangeData] = useState(
        {
            "name":'',
            "price": '',
            "image":'',
            "type": '',
            "dateEntry": new Date()
        }    
    );


    const handleChangeName = (newName) => {
        setChangeData({...changeData, "name": newName})
    }

    const handleChangePrice = (newPrice) => {
        setChangeData({...changeData, "price": newPrice})
    }

    const handleChangeImage = (newImage) => {
        setChangeData({...changeData, "image": newImage})
    }

    
    const handleChangeType = (newType) => {
        
        setChangeData({...changeData, "type": newType})
    }

    const handleCreateProduct = async () => {
       
        console.log('changeData', changeData);

        await createElements("products", changeData);
        setData([]);
    }
    
    const handleChangeDataProduct = (newData) => {
        
        setChangeData({...changeData, "name": newData.name, "price": newData.price,"image": newData.image, "type":newData.type })
        setId(newData.id);
        setIsPending(true)

        console.log('changedata',changeData);
    }
    const handleResetProduct=() => {
        setChangeData(
            {
                "name":'',
                "price": '',
                "image":'',
                "type": '',
                "dateEntry": new Date()
            }  
        )
      }

    useEffect(() => {
        getElements('products').then((data) => setData(data));

    },[data]);

    const handleDeleteProduct = (id) => {
        console.log(id)
        deleteElements("products", id)
        getElements('products').then((data) => setData(data));
    }
    
    const handleUpdateProduct = (id, newBody) => {
        console.log('id-newbody', id, newBody)
        updateElements("products", id, newBody);
        setData([])
        setIsPending(false)

    }

    return (
        <div>
            <CreateProducts handleChangeName={handleChangeName} handleChangePrice={handleChangePrice} id={id} 
            handleChangeImage={handleChangeImage} handleChangeType={handleChangeType} handleCreateProduct={handleCreateProduct}
             handleResetProduct={handleResetProduct} 
            handleUpdateProduct={handleUpdateProduct} changeData={changeData} isPending={isPending}
            />
            <EditProducts handleDeleteProduct={handleDeleteProduct}  handleChangeDataProduct={handleChangeDataProduct} data={data}/>
        </div>
    )
}