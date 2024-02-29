import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({data})=>{
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data,quantity);
    }

    return(
        <div className="itemDetail">
            <div>
                <h2>
                    {data.nombre}
                </h2>
            </div>
            <picture>
                <img src={data.img} alt={data.nombre} className="ItemImg"/>
            </picture>
            <section>
                <p>
                    Categoría: {data.category}
                </p>
                <p>
                    Precio: ${data.precio}
                </p>
            </section>
            <footer>
                {
                    goToCart
                        ?<Link className="Option" to="/cart">Terminar compra</Link>
                        : 
                        <ItemCount initial={1} stock={data.cantidad} onAdd={onAdd}/>
                    
                }
            </footer>
        </div>
    )
}
export default ItemDetail