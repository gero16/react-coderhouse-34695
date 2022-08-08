import "./Items.css"
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom"

function Items({product}) {
    
    const onAdd = ({qty}) => {
        alert(`Agregaste ${qty}`)
      }
      
    return( 
        <div className="contenedor-producto">
        
            <h3 className="">{product.name}</h3>
            <div className="contenedor-imagen">
                <Link to={`/detail/${product.id}`} > 
                    <span className="Option"> Ver Detalle </span> 
                    <img src={product.img} alt="Imagen del producto" className='producto-imagen'></img>
                </Link>
               
            </div>
            <div className="contenedor-texto">
                <h2 className="precio">U$S {product.price}</h2>
                <ul className="lista-productos">
                    <li>Marca: {product.marca} </li>
                    <li>Trarjeta Grafica: {product.grafica}</li>
                    <li>Procesador: {product.procesador} </li>
                    <li>Memoria RAM: {product.ram} </li>
                    <li>Almacenamiento: {product.disco} </li>
                    <li>Camara: {product.camara} </li>
                </ul>
               
            </div>
  
        </div>  
    )
}


export default Items;