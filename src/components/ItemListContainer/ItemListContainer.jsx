import React, { useState } from "react";
import "./ItemLiContainerStyle.css";
import { useEffect } from "react";
import { getProducts } from "../../serverProducts/productMock";

function ItemListContainer ({greeting}){
    const [items, setItems]=useState([])
    useEffect(()=>{
        getProducts().then((res)=>setItems(res));
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

                        </div>

                    )
                })}
            </div>
        </div>
    )
}
export default ItemListContainer;