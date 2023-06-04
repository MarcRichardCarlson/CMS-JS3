import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navigate } from '../const/routes.js';
import { useNavigate } from 'react-router-dom';
import { deleteById } from '../utils/ApiUtil.js';

export function RemovalModal({productId}) {
  /*Handles modal state*/
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*Navigates back to products after deletion of product*/
  const navigate = useNavigate()  
  const removeAndGoBack = () => {
    deleteById(productId)
    navigate(Navigate.products)
  }

  return (
    <>
      <Button className="removeBtn" variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Deletion in progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure that you want to remove this item?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={ () => removeAndGoBack()}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
