import React from 'react';
import styles from './HeaderComponent.module.css';
import logo from './company-logo.jpg';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <div>
      <div className={styles.homePage}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <Link to="/home">
              <img src={logo} alt="Company Logo" className={styles.logo} />
            </Link>
          </div>
          <div className={styles.headerMiddle}>
            <input type="text" placeholder="Search" className={styles.searchBar} />
          </div>
          <div className={styles.headerRight}>
            <Link to="/">
            <img src="profile-icon.png" alt="Profile" className={styles.profileIcon} />
            </Link>
          </div>
        </header>
        <div className={styles.content}></div>
      </div>
    </div>
  );
}

export default HeaderComponent;
