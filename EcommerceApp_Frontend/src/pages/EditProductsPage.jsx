import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SideNavbarComponent from '../Components/SideNavbarComponent';
import HeaderComponent from '../Components/HeaderComponent';
import styles from './EditProductPage.module.css';

const EditProductsPage = () => {
  const { categoryId, productId } = useParams();
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedProduct = {
        id: categoryId,
        name,
        imageURL,
        price,
        description,
        categoryId: productId,
      };

      const response = await axios.post(`http://localhost:8080/product/update/${categoryId}`, updatedProduct);
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.log(typeof(productId),productId,typeof(categoryId),categoryId);
      console.error(error);
    }
  };

  return (
    <>
      <HeaderComponent />
      <SideNavbarComponent />
      <div className={styles.editProductFormContainer}>
        <h2>Edit Product</h2>
        {successMessage && <p>{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="imageURL">Image URL:</label>
            <input
              type="text"
              id="imageURL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditProductsPage;
