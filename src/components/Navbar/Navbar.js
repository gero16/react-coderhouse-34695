import "./Navbar.css"
import Logo from '../../img/logo.jpg';
import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

const Navbar = () => {
    
   

    return ( 
        <nav className="Navbar"> 

            <div className="div-logo">
               
                <Link to={"/"} className="">
                    <img src={Logo} alt="Imagen del logo de la tienda"/>
                </Link>
            </div>

            <div className="div-menu"> 
                <Link to={"/category/celulares"}>
                    <Button label ="Celulares"/>  
                </Link>
               
                <Link to={"/category/notebooks"}>
                    <Button label ="Notebooks"/>  
                </Link> 
                <Link to={"/category/tablets"}>
                    <Button label ="Tablets"/>  
                </Link>  
                <Link to={"/category/PC"}>
                    <Button label ="PCs"/>  
                </Link>  
                <Link to={"/category/auriculares"}>
                    <Button label="Auriculares" />   
                </Link>  
              
                <CartWidget />  
            </div>
            
        </nav>
    )
}


export default Navbar