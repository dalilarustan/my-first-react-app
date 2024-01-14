import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css"
/*
function CartWidget ({number,clickEnCarrito}) {
    return(
        <div className='containerCart'>
            <ShoppingCartIcon
                className="cartIcon"
                onClick={()=>clickEnCarrito("Carrito")}
            />
            <span className='cartNumber'>{number}</span>
            </div>
    );
}
export default CartWidget;
*/
function CartWidget ({number}){
    return (
        <div className='containerCart'>
            <ShoppingCartIcon className='cartIcon'/>
            <span className='cartNumber'>{number}</span>
        </div>
    )
}
export default CartWidget;