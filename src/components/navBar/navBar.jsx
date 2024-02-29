import "./navBarStyle.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/logo.png";
import {useState} from 'react'
import {Link, NavLink} from "react-router-dom";

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
                <NavLink className="navlink" to={"/category/Plantas de interior"}>plantas interior</NavLink>
                <NavLink className="navlink" to={"/category/Plantas de exterior"}>plantas exterior</NavLink>
                <NavLink className="navlink" to={"/category/Cuidado"}>cuidado</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar;