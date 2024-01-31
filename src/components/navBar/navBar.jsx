import "./navBarStyle.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/logo.png";
import {useState} from 'react'
import { NavLink, Link } from "react-router-dom";

/*
function Navbar () {
    const handleClick = (seccion) =>{
        console.log(seccion);
    };
    return(
        <div className="navBar">
            <img src={Logo} alt="logo" className="logo"/>
            <CartWidget number={2} clickEnCarrito={clickEnCarrito}/>
        </div>
    );
}
export default Navbar;
*/
const Navbar= ()=> {
    return (
        <nav className="navBar">
            <Link to="/">
                <img src={Logo} alt="logo" className="logo1"/>
            </Link>
            <div className="categories">
                <Link to={"/category/Plantas-interior"}>plantas interior</Link>
                <Link to={"/category/Plantas-exterior"}>plantas exterior</Link>
                <Link to={"/category/Cuidado"}>cuidado</Link>
            </div>
            <CartWidget number={3}/>

        </nav>
    )
}
export default Navbar;