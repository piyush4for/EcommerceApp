import React, { useState } from 'react';
import axios from 'axios';
import styles from './DeleteCategory.module.css'
import HeaderComponent from '../Components/HeaderComponent';
import SideNavbarComponent from '../Components/SideNavbarComponent';

const DeleteCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:8080/category/byname/${categoryName}`);
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setResponseMessage('Error deleting category');
    }
  };

  return (
    <>
    <HeaderComponent/>
    <SideNavbarComponent/>
    <div className={styles.deleteCategoryPage}>
        
      <form className={styles.deleteCategoryFormContainer} onSubmit={handleFormSubmit}>
      <h2>Delete Category</h2>
        <label htmlFor="categoryName">Category Name:</label>
        <input
          type="text"
          id="categoryName"
          value={categoryName}
          onChange={(event) => setCategoryName(event.target.value)}
          />
        <button type="submit">Delete</button>
      </form>
      <div>{responseMessage}</div>
    </div>
    </>
  );
};

export default DeleteCategory;
