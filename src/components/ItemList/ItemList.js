import Items from '../Items/Items'
import "./ItemList.css"

const ItemList = ({ products }) => {
    return (
        <div className="container-list">
            {products.map(prod => <Items key={prod.id} product={prod} />)}
        </div>

    )
}

export default ItemList
