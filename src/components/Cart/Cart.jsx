import './Cart.css'
import { useContext } from 'react'
import {useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    console.log(cart)
    if (!cart || cart.length === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to="/" className='Option'>ir a productos</Link>
            </div>
        );
    }

    return (
        <div>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: ${totalPrice()}
            </p>
            <Link to="/checkout" className='Option'>Checkout</Link>
        </div>
    );
}
export default Cart