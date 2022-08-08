import {  useState, useEffect } from "react"
import {getProductById} from "../../products"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    
    const {Id} = useParams();

    useEffect(() =>  {
        getProductById(Id)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
    }, [] )

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    ) 
}


export default ItemDetailContainer