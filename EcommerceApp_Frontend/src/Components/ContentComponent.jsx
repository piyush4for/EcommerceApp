
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Content.module.css';
import { Link } from 'react-router-dom';

const ContentComponent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/category/list');
        setProducts(response.data);
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

    const handleDelete = async (productId) => {
      try {
        await axios.delete(`http://localhost:8080/product/${productId}`);
        // Refresh the product list
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
      } catch (error) {
        console.error(error);
      }
    };


  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;

    if (categoryId === 'all') {
      setSelectedCategory('All Categories');
      // Show all products when "All Categories" is selected
      const allProducts = categories.flatMap((category) => category.products);
      setSelectedProducts(allProducts);
    } else {
      const selectedCategory = categories.find((category) => category.id === parseInt(categoryId));
  
      if (selectedCategory) {
        setSelectedCategory(selectedCategory.categoryName);
        setSelectedProducts(selectedCategory.products);
      }
    }
  };

  return (
    <div className={styles.container}>
      <button>
           <Link to="/addCategory">add category</Link>
      </button>
      <button>
           <Link to="/DeleteCategory">delete category</Link>
      </button>
      <button>
        <Link to="/AddProduct">add product</Link>
      </button>
      <button>
        <Link to="/editCategory">edit category</Link>
      </button>
      <div className={styles.dropdownContainer}>
        <label htmlFor="categoryDropdown" className={styles.dropdownLabel}>
          Select Category:
        </label>
        <select
          id="categoryDropdown"
          className={styles.dropdown}
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.productsContainer}>
        {selectedProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.imageURL} alt={product.name} className={styles.image} />
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>Price: ${product.price}</p>
            
             <span>
               <button>
                 <Link to={`/editProducts/${product.id}/${product.categoryId}`}>update</Link>
               </button>
               <button onClick={() => handleDelete(product.id)}>delete
               </button>              
               <button>
               <Link to={`/attributes/${product.id}`}>attributes</Link>
             </button>
             </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentComponent;
