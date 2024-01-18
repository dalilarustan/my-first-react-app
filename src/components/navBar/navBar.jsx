import "./navBarStyle.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../../assets/logo.png";
import {useState} from 'react'

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
    const [seccionActual, setSeccionActual] = useState('inicio');
    const handleClick = (seccion)=>{
        setSeccionActual(seccion);
        console.log(`Usted se encuentra en la sección: ${seccion}`)
    }
    return (
        <div className="navBar">
            <img src={Logo} alt="logo" className="logo1"/>
            <div>
                <button onClick={()=> handleClick('plantas interior')}>plantas de interior</button>
                <button onClick={()=> handleClick('plantas exterior')}>plantas de exterior</button>
                <button onClick={()=> handleClick('cuidado')}>cuidado</button>
            </div>
            <CartWidget number={3}/>

        </div>
    )
}
export default Navbar;