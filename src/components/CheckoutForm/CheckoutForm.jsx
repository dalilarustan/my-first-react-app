import { useState } from "react";
import {collection, addDoc, getFirestore} from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutForm = () =>{
    const{cart, totalPrice} = useCartContext()
    const [orderId, setOrderId] = useState (null)
    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')

    const db = getFirestore()

    const handleSubmit = (event) => {
        event.preventDefault()
        const ordersCollection = collection(db, "orden")

        const order={
            buyer:{
                name,
                email
            },
            items: cart,
            total: totalPrice(),
        }
    
        addDoc(ordersCollection, order).then(({id})=>{
            setOrderId(id)
        })

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={(event)=>setName(event.target.value)}/>
                <input type="email" placeholder="Email" onChange={(event)=>setEmail(event.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
            <h3>Id de la orden: {orderId}</h3>
        </>
    )
}
export default CheckoutForm