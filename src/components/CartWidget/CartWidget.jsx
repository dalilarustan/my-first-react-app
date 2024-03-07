import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css";
import Modal from "../Modal/Modal";
import { useState } from 'react';
import { useContext } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import cart from "../../assets/cart.png";



/*
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
export default CartWidget; */
const CartWidget =()=>{
    const{totalProductos}=useCartContext()
    console.log(totalProductos())
    return(
        <Link to="/cart" className='containerCart'>
            <ShoppingCartIcon className='cartIcon'/>
            <span>{totalProductos() || ""}</span>
            {totalProductos}
        </Link>
    )
}
export default CartWidget
