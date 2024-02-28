import { useState, useEffect } from "react";
import { getProductsById } from "../../asynMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer =()=>{
    const [data, setData]= useState([]);
    const{itemId}= useParams();

    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc= doc(querydb, "productos", itemId);
        getDoc(queryDoc)
            .then(res=>setData({id: res.id, ...res.data() }))
    },[itemId])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail data={data}/>
        </div>
    )
}
export default ItemDetailContainer

