import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './SideNavbarComponent.module.css'

const SideNavbarComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/category/list');
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={styles.sidebar}>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>
            {category.id} - {category.categoryName}
            </Link>
              <ul>

                {category.products.map((cproducts)=>(
                     <li key={cproducts.id}>
                     <Link to={`/editProducts/${category.id}/${cproducts.id}`}>
                     {cproducts.id} - {cproducts.name}
                     </Link>

                    <ul>
                      {cproducts.subproducts.map((attr)=>(
                        <li key={attr.id}>
                        <Link to={`/attributes/${cproducts.id}`}>
                          <h6>
                          {attr.id}-{attr.attrName}-{attr.attrValue}  
                          </h6>
                        </Link>
                        </li>
                      ))}
                    </ul>

                   </li>
                ))}
              </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbarComponent;