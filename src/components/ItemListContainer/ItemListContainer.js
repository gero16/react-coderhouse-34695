import "./ItemListContainer.css"
import React, {useState, useEffect} from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsCategory } from '../../products'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    console.log(categoryId)
    
    useEffect(() => {
        if(!categoryId) {
            getProducts().then(products => {
                setProducts(products)
            })
        } else {
            getProductsCategory(categoryId).then(products => {
                setProducts(products)
            })
        }
        /*
        const asyncFunction = categoryId ? getProductsCategory : getProducts
        asyncFunction(categoryId).then(products => {
            setProducts(products)
        })
        */
    }, [categoryId])

    return (
        <div>
            <h1 className="titulo">Bienvenido al Mercadito </h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;