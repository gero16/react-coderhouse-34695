import "./Items.css"
import ItemCount from '../ItemCount/ItemCount';
function Items({product}) {
    
    const onAdd = (qty) => {
        alert(`Agregaste ${qty}`)
      }
      
    return( 
        <div className="contenedor-producto">
            <h3 className="">{product.name}</h3>
            <div className="contenedor-imagen">
                <img src={product.img} alt="Imagen del producto" className='producto-imagen'></img>
            </div>
            <div className="contenedor-texto">
                <ul className="lista-productos">
                    <li>Marca: {product.marca} </li>
                    <li>Trarjeta Grafica: {product.grafica}</li>
                    <li>Procesador: {product.procesador} </li>
                    <li>Memoria RAM: {product.ram} </li>
                    <li>Almacenamiento: {product.disco} </li>
                </ul>
                <h3 className="precio">U$S {product.price}</h3>
                <ItemCount onAdd={onAdd} initial={1} stock={10} />
            </div>
        
        </div>
    )
}


export default Items;