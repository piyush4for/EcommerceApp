import React from 'react';
import { Link } from 'react-router-dom';

const SideNavbarLink = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/editProducts">Edit Products</Link>
        </li>
        <li>
          <Link to="/addProducts">Add Products</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/addCategory">Add Category</Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default SideNavbarLink;
