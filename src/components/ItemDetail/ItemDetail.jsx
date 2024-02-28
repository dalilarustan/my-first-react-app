import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, nombre, precio, cantidad, category, img})=>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)
    const handleOnAdd = (quantity)=>{
        setQuantityAdded(quantity)

        const item ={
            id, nombre, precio
        }
        addItem(item,quantity)
    }
    return(
        <div className="itemDetail">
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p>
                    Categoría: {category}
                </p>
                <p>
                    Precio: ${precio}
                </p>
            </section>
            <footer>
                {
                    quantityAdded> 0 ? (
                        <Link className="Option" to="/cart">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={cantidad} onAdd={handleOnAdd}/>
                    )
                    /*<ItemCount initial={1} stock={cantidad} onAdd={(quantity)=>console.log("cantidad agregada ",quantity)}></ItemCount>*/
                }
            </footer>
        </div>
    )
}
export default ItemDetail