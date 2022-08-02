import React, {useState, useEffect} from 'react'
import './CartWidget.css'
import carrito from '../../img/carrito-de-compras.png';
import ItemCount from "../ItemCount/ItemCount"

const CartWidget = () => {
  
    return (
        <span className="carrito-de-compras"> 
            <img src={carrito} alt="Imagen del Carrito de Compras" className='carrito-logo'></img>
            <span className='carrito-qty'> 1</span>
        </span>
      
    );
}

export default CartWidget