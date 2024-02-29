import { useCartContext } from "../../context/CartContext"


const ItemCart = ({product})=>{
    const {removeProduct} = useCartContext();
    return(
        <div>
            <img src={product.img} className="ItemImg" alt={product.nombre}/>
            <div>
                <p>{product.nombre}</p>
                <p>cantidad:{product.quantity}</p>
                <p>precio unidad:{product.precio}</p>
                <p>subtotal: ${product.quantity * product.precio}</p>
                <button onClick={()=> removeProduct (product.id)}>Eliminar</button>
            </div>
        </div>
    )
}
export default ItemCart