import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { putById } from '../utils/ApiUtil';

export function EditProductModal({productId, handleSubmit}) {
  
  /*All of this is handeling the inputfields and collecting vaules that is going to be updated*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  
  /*Puts the product after save*/
  const putProduct = async () => {


    const updatedProduct = {
      name: productName,
      description: productDiscription,
      category: productCategory,
      price: parseFloat(productPrice),
      image: productImage
    };

    handleSubmit(updatedProduct)

    setProductName('');
    setProductDiscription('');
    setProductCategory('');
    setProductPrice('');
    setProductImage('');

    handleClose()
    window.location.reload();
  }
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit  
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit product</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <input className='inputs' placeholder=' image' type='text' id="productImage" value={productImage} onChange={handleImageChange}></input>
              <input className='inputs' placeholder=' Product Name' type='text' id="productName" value={productName} onChange={handleNameChange}></input>
              <input className='inputs' placeholder=' description' type='text' value={productDiscription} onChange={handleDiscriptionChange}></input>
              <input className='inputs' placeholder=' category' type='text' value={productCategory} onChange={handleCategoryChange}></input>
              <input className='inputs' placeholder=' £ Price' type='number' id="productPrice" value={productPrice} onChange={handlePriceChange}></input>
            </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => putProduct() }>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
