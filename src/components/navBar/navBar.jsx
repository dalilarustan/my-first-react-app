import "./navBarStyle.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/logo.png"

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
function Navbar () {
    return (
        <div className="navBar">
            <img src={Logo} alt="logo" className="logo1"/>
            <CartWidget number={3}/>

        </div>
    )
}
export default Navbar;