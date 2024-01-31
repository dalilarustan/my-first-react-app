import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({id, nombre, precio, cantidad, categoria, img})=>{
    return(
        <div className="ListItems item">
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
                    Categoría: {categoria}
                </p>
                <p>
                    Precio: ${precio}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={cantidad} onAdd={(quantity)=>console.log("cantidad agregada ",quantity)}></ItemCount>
            </footer>
        </div>
    )
}
export default ItemDetail