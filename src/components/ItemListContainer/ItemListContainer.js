import "./ItemListContainer.css"
import React, {useState, useEffect} from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsCategory } from '../../products'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {category} = useParams()
    
    useEffect(() => {
        const asyncFunction = category ? getProductsCategory : getProducts
        asyncFunction(category).then(products => {
            setProducts(products)
        })
    }, [category])

    return (
        <div>
            <h1 className="titulo">Bienvenido al Mercadito </h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;