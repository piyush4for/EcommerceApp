import React, { useState } from 'react';
import axios from 'axios';
import styles from './AddCategoryPage.module.css';
import HeaderComponent from '../Components/HeaderComponent';
import SideNavbarComponent from '../Components/SideNavbarComponent';
import FooterComponent from '../Components/FooterComponent';

const AddCategoryPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        categoryName: categoryName,
        description: description,
        imageUrl: imageUrl,
      };

      const response = await axios.post('http://localhost:8080/category/create', data);
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <><HeaderComponent/><SideNavbarComponent/>
    <div className={styles.addCategoryPage}>
      <div className={styles.addCategoryFormContainer}>
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="categoryName">Category Name:</label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
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
          <div>
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
    <FooterComponent/>
    </>
  );
};

export default AddCategoryPage;
