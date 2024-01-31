import React, { useState } from "react";
import "./ItemLiContainerStyle.css";
import { useEffect} from "react";
import { getProducts, getProductsByCategory } from "../../asynMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [items,setItems]=useState([])
    const params = useParams
    console.log(params)

    const{categoryId}= useParams();

    useEffect(()=>{
        const fetchProducts = async()=>{
            const asyncFunc = categoryId ? getProductsByCategory :getProducts
            try{
                const res = await asyncFunc(categoryId);
                setItems(res);
            }catch(err){
                console.log(err.message);
            }
        };
        fetchProducts();
    },[categoryId])

    return(
        <div className="containerStyle">
            <h1>{greeting}</h1>
            <ItemList items={items}/>
        </div>
    )
    /*
    const [items, setItems]=useState([])
    useEffect(()=>{
        const fetchProducts =async ()=>{
            try{
                const res = await getProducts ()
                setItems(res)
            }catch(err){
                console.log(err.message)
            }
        };
        fetchProducts();

    },[])
    return(
        <div className="containerStyle">
            <h1>{greeting}</h1>
            <div className="listItems">
                {items.map((item)=>{
                    const {id, nombre, precio, cantidad, categoria, img} = item
                    return(
                        <div key={id} className="item">
                            <img src={img} alt={nombre}></img>
                            <h3>{nombre}</h3>
                            <p>{precio}</p>
                            <p>{cantidad}</p>
                            <p>{categoria}</p>
                            <ItemCount initial={1} stock={10} onAdd={(quantity)=>console.log("Caantidad agregada ",quantity)}/>

                        </div>

                    )
                })}

            </div>
        </div>
    ) */
}
export default ItemListContainer;