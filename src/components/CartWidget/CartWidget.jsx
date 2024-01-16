import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css";
import Modal from "../Modal/Modal";
import { useState } from 'react';
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
    const [isShowModal, setIsShowModal] = useState (false);
    return (
        <div className='containerCart'>
            <ShoppingCartIcon className='cartIcon'
            onClick={()=>setIsShowModal(true)}
            />
            <span className='cartNumber'>{number}</span>
            {isShowModal && <Modal/>}
        </div>
    )
}
export default CartWidget;