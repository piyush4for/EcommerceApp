
import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import SideNavbarComponent from '../Components/SideNavbarComponent'

function EditCategoryPage() {
  return (
    <>
    <HeaderComponent/>
    <SideNavbarComponent/>
    <center>

    <div>Sorry For inconvenience, i will get back to you soon</div>
    </center>
    </>
  )
}

export default EditCategoryPage


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import styles from './EditCategoryPage.module.css';
// import HeaderComponent from '../Components/HeaderComponent';
// import SideNavbarComponent from '../Components/SideNavbarComponent';

// const EditCategoryPage = () => {
//   const { categoryId } = useParams();
//   const [categoryName, setCategoryName] = useState('');
//   const [description, setDescription] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/category/${categoryId}`);
//         const category = response.data;
//         setCategoryName(category.categoryName);
//         setDescription(category.description);
//         setImageUrl(category.imageUrl);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCategory();
//   }, [categoryId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const updatedCategory = {
//         categoryName,
//         description,
//         imageUrl
//       };

//       const response = await axios.post(`http://localhost:8080/category/update/${categoryId}`, updatedCategory);
//       console.log(response.data); // Handle the success response as desired
//       setSuccessMessage(response.data.message);
//     } catch (error) {
//       console.error(error);
//       if (error.response && error.response.data && error.response.data.message) {
//         setSuccessMessage(error.response.data.message);
//       } else {
//         setSuccessMessage('An error occurred while updating the category.');
//       }
//     }
//   };

//   return (
//     <>
//     <HeaderComponent/>
//     <SideNavbarComponent/>
//     <div className={styles.container}>
//       <h2>Edit Category</h2>
//       {successMessage && <p>{successMessage}</p>}
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.formGroup}>
//           <label htmlFor="categoryName">Category Name:</label>
//           <input
//             type="text"
//             id="categoryName"
//             value={categoryName}
//             onChange={(e) => setCategoryName(e.target.value)}
//             required
//             />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="imageUrl">Image URL:</label>
//           <input
//             type="text"
//             id="imageUrl"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className={styles.submitButton}>Update Category</button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default EditCategoryPage;
