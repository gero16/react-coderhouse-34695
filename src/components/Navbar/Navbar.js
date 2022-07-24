import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget";
import Button from "../Button/Button"

const Navbar = () => {
    
    const text = "Le hiciste Click!";

    const handleClick = () => {
        console.log(text)
    }

    return ( 
        <nav className="Navbar"> 
            <div className="div-logo">
                <img src="./img/logo.jpg" alt="Imagen del logo de la tienda"/>
            </div>

            <div className="div-menu"> 
                <Button label ="Inicio"/>  
                <Button handleClick={handleClick} label="Celulares"/> 
                <Button label ="Notebooks"/>  
                <Button label="Tablets" />  
                <Button label="PC-Gamer" />  
                <Button label="Auriculares" />  
            </div>

            <div className="div-carrito"> 
                <CartWidget />
            </div>
            
        </nav>
    )
}


export default Navbar