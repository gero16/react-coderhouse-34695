import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import "../CartWidget/CartWidget"


const ItemDetail = ({name, price, category, img, grafica, teclado, color, marca, ram, sistema, procesador, resolucion, pantalla, disco, }) => {
    
    const onAdd = (qty) => {
        alert(`Agregaste ${qty}`)
      }



    return (
       
        <div className="contenedor-producto-detalle">
            <div className="contenedor-imagen-detalle">
                <img src={img} alt="Imagen del producto" className='producto-imagen-detalle'></img>    
           </div>
            <div className="contenedor-texto-detalle">
                <h2 className="titulo-detalle">{name}</h2>
                <h3> Caracteristicas </h3>
                <ul className="lista-productos">
                    <li>Marca: {marca} </li>
                    <li>Marca: {category} </li>
                    <li>Trarjeta Grafica: {grafica}</li>
                    <li>Procesador: {procesador} </li>
                    <li>Memoria RAM: {ram} </li>
                    <li>Almacenamiento: {disco} </li>
                    <li>Almacenamiento: {teclado} </li>
                    <li>Almacenamiento: {sistema} </li>
                    <li>Almacenamiento: {color} </li>
                    <li>Almacenamiento: {resolucion} </li>
                    <li>Almacenamiento: {pantalla} </li>
                </ul>
              
            </div>
            <div className='contenedor-precio-detalle'>
                <h2 className="precio-detalle">U$S {price}</h2>
                <ItemCount onAdd={onAdd} initial={1} stock={10} />
            </div>
        </div>  
    )
    
}

export default ItemDetail