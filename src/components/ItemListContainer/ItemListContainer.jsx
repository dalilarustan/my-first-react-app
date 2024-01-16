import React from "react";
import "./ItemLiContainerStyle.css"

function ItemListContainer ({greeting}){
    return(
        <div className="containerStyle">
            <h1>{greeting}</h1>
        </div>
    )
}
export default ItemListContainer;