import "./Navbar.css"
import Logo from '../../img/logo.jpg';
import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    
    const text = "Click";

    const handleClick = () => {
        console.log(text)
    }

    return ( 
        <nav className="Navbar"> 

            <div className="div-logo">
                <img src={Logo} alt="Imagen del logo de la tienda"/>
            </div>

            <div className="div-menu"> 
                <Button label="Celulares"/> 
                <Button label ="Notebooks"/>  
                <Button label="Tablets" />  
                <Button label="PC-Gamer" /> 
                <Button label="Auriculares" />  
                <CartWidget />  
            </div>
            
        </nav>
    )
}


export default Navbar