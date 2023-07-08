import React, { useState } from 'react';
import axios from 'axios';
import styles from './AddProductPage.module.css';
import HeaderComponent from '../Components/HeaderComponent';
import SideNavbarComponent from '../Components/SideNavbarComponent';

const AddProductPage = () => {
  const [categoryId, setCategoryId] = useState('');
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/product/add', {
        categoryId,
        name,
        imageURL,
        price,
        description
      });
      console.log(response.data); // Handle the success response as desired
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        setSuccessMessage(error.response.data.message);
      } else {
        setSuccessMessage('An error occurred while adding the product.');
      }
    }
  };

  return (
    <>
    <HeaderComponent/>
    <SideNavbarComponent/>
    <div className={styles.container}>
      <h2>Add Product</h2>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="categoryId">Category ID:</label>
          <input
            type="text"
            id="categoryId"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
            />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="imageURL">Image URL:</label>
          <input
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            required
            />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Add Product</button>
      </form>
    </div>
    </>
  );
};

export default AddProductPage;
