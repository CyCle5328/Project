import React from 'react';
import Navbar from '../../navbar/navbar';
import styles from './main.module.css';
import MainSlide from './mainSlide/mainSlide';

const Main = (props) => {
  return (
    <div className={styles.wrap}>
      <Navbar />
      <MainSlide />
    </div>
  );
};

export default Main;
