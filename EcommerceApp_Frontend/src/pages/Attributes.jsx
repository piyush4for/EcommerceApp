import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HeaderComponent from '../Components/HeaderComponent';
import SideNavbarComponent from '../Components/SideNavbarComponent';
import styles from './Attributes.module.css'

const AttributesPage = () => {
  const [attributes, setAttributes] = useState([]);
  const { productId } = useParams();
  const [errorMessage, setErrorMessage] = useState('');

  const fetchAttributes = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/product/subproduct/search2?productId=${productId}`);
      setAttributes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchAttributes();
    }// eslint-disable-next-line
  }, [productId]);

  const handleAddAttribute = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const attrName = formData.get('attrName');
    const attrValue = formData.get('attrValue');

    try {
      const response = await axios.post('http://localhost:8080/product/subproduct/add', {
        attrName,
        attrValue,
        productId
      });
      console.log(response.data); 

      // Refresh attributes list
      fetchAttributes();
      setErrorMessage('');
    } catch (error) {
        // console.log(attrName,attrValue,productId);
      console.error(error);
      
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while adding the attribute.');
      }
    }
  };
  const handleDeleteAttribute = async (attributeId) => {
    try {
      await axios.delete(`http://localhost:8080/product/subproduct/${attributeId}`);
      // Refresh attributes list
      fetchAttributes();
    } catch (error) {
      console.error(error);
    }
  };

  if (!productId) {
    return <div>No product ID specified.</div>;
  }

  return (
    <>
    <HeaderComponent/>
    <SideNavbarComponent/>
    <div className={styles.attributesContainer}>
      <h2>Attributes</h2>
      <ul>
        {attributes.map((attribute) => (
            <li key={attribute.id}>
            id:{attribute.id} . {attribute.attrName} : {attribute.attrValue}
            <button onClick={() => handleDeleteAttribute(attribute.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => handleAddAttribute(e)}>
        <label htmlFor="attrNameInput">Attribute Name:</label>
        <input type="text" id="attrNameInput" name="attrName" required />

        <label htmlFor="attrValueInput">Attribute Value:</label>
        <input type="text" id="attrValueInput" name="attrValue" required />

        <button type="submit">Add Attribute</button>
      </form>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
        </>
  );
};

export default AttributesPage;
