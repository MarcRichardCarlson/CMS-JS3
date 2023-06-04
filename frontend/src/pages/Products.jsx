import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllProduct, postProduct } from '../utils/ApiUtil'
import { Navigate } from '../const/routes'
import IOP from '../assets/OIP.jpg'

const Products = () => {

    /*Handles the input values when adding a case*/
    const [productName, setProductName] = useState('');
    const [productDiscription, setProductDiscription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    
    const handleNameChange = (event) => {
        setProductName(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setProductCategory(event.target.value);
    };

    const handleDiscriptionChange = (event) => {
        setProductDiscription(event.target.value);
    };
    
    const handlePriceChange = (event) => {
        setProductPrice(event.target.value);
    };
    const handleImageChange = (event) => {
        setProductImage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        /*Validation*/
        if (!productName || !productDiscription ||!productPrice ||!productCategory ||!productImage) {
        alert('Please enter both product name and price.');
        return;
        }
    
        /*Creates new product*/
        const newProduct = {
        name: productName,
        description: productDiscription,
        category: productCategory,
        price: parseFloat(productPrice),
        image: productImage
        };
    
        console.log('New product:', newProduct);
        setproducts(await postProduct(newProduct))

        // Reset the form fields
        setProductName('');
        setProductDiscription('');
        setProductCategory('');
        setProductPrice('');
        setProductImage('');
    };
 

    const [products, setproducts] = useState([])
    const navigate = useNavigate()

    const goToDetails = (id) => {
        navigate(Navigate.productDetails + id,{
            state: {id}
        })
    }

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            setproducts(await getAllProduct());
          } catch (error) {
            console.error(error);
          }
        };
        
        fetchProducts()
      }, []);

    return (
        <>
        <div className='pageWrapper'>
        {   
            <div className='productWrapper'>
                <ul className='productList'>
                <li className='product' >
                        <div className='productCard'>
                            
                            <img src={IOP} alt=""/>
                            <div className='productText'>
                                <h3>Add product to list</h3>
                              <input className='inputs' placeholder=' image href' type='text' id="productImage" value={productImage} onChange={handleImageChange}></input>
                              <input className='inputs' placeholder=' Product Name' type='text' id="productName" value={productName} onChange={handleNameChange}></input>
                              <input className='inputs' placeholder=' description' type='text' value={productDiscription} onChange={handleDiscriptionChange}></input>
                              <input className='inputs' placeholder=' category' type='text' value={productCategory} onChange={handleCategoryChange}></input>
                              <input className='inputs' placeholder=' £ Price' type='number' id="productPrice" value={productPrice} onChange={handlePriceChange}></input>
                              <button className='productBtn' type='submit' onClick={handleSubmit}> Add product </button>
                            </div>
                        </div>
                        </li>
                    {products.map((product, index) => (
                        <li className='product' key={index}>
                            <div className='productCard'>
                                <img src={product.image} alt=''></img>
                                <div className='productText'>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>{product.price}:-</p>
                                <button className='productBtn' onClick={() => goToDetails(product._id)}> Gå till produktsida </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
        }
        </div>
        </>
    )

}

export default Products
