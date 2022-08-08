import React from "react"
import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({onAdd, initial, stock}) => {
 
   const [qty, setQty] = useState(initial);

    const addProduct = (num) => {
        setQty(qty + num)
    }

    return (
        <div className="div-count">
            <div className="div-count2">
                <button 
                    className="btn-count"
                    onClick={() => addProduct(-1)}
                    disabled={qty === initial}
                    >
                        -
                </button>
                <span className="div-qty">
                    {qty}
                </span>
                <button 
                    className="btn-count"
                    onClick={() => addProduct(+1)}
                    disabled={qty === stock}
                    >
                        +
                </button>
            </div>

            <button 
                    className="btn-add"
                    onClick={() => onAdd(qty)}
                    disabled={stock === 0 ? true:null}
                    >
                        Agregar al Carrito
                </button>
        </div>
    )
}


export default ItemCount