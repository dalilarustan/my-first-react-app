import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, cantidad, img})=> {
    return (
        <div className="listItems item">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    Stock disponible: {cantidad}
                </p>
            </section>
            <footer>
                <Link to ={`/item/${id}`}className="buttonDetail">Ver detalles</Link>
            </footer>
        </div>
    )
}
export default Item