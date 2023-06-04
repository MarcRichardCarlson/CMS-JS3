import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getById, putById } from '../utils/ApiUtil.js'
import { EditProductModal } from '../components/PutModal.jsx'
import { RemovalModal } from '../components/DeleteModal.jsx'


const Details = () => {
    /*Goes to product page using location*/
    const [product, setproduct] = useState([])

    const page = useLocation()

    useEffect(() => {
        const productId = page.state.id
        const fetchProduct = async () => {
            setproduct(await getById(productId))
        }
        fetchProduct()
    }, [])

    /*Updates product*/
    const refreshProduct = async (updatedProduct) => {
        const productFromApi = await putById(product._id, updatedProduct)
        console.log('updatedProduct', updatedProduct)
        setproduct(productFromApi)
        
    }
    
   
  return (
    <>
        <div className="detailsWrapper">
            <div className="detailsCard">
                <img src={product.image} alt=''></img>
                <div className='detailsText'>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <p>{product.price}:-</p>
                    <EditProductModal handleSubmit={refreshProduct} productId={product._id} />
                    <RemovalModal productId={product._id} />
                </div>
            </div>
        </div> 
   </>
)}

export default Details