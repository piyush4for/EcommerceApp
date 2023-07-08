import React from 'react';
import SideNavbar from '../Components/SideNavbarComponent';
import FooterComponent from '../Components/FooterComponent';
import HeaderComponent from '../Components/HeaderComponent';
import ContentComponent from '../Components/ContentComponent';
import styles from './Home.module.css';

const Home = () => {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideNavbar />
      </div>
        <div className={styles.main}>
          <div className={styles.header}>
            <HeaderComponent />
          </div>
          <div className={styles.content}>
            <ContentComponent />
          </div>
          <div className={styles.footer}>
            <FooterComponent/>
          </div>
        </div>
      </div>
      );

};

      export default Home;
