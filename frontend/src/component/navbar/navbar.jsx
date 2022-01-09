import React from 'react';
import styles from './navbar.module.css';

const Navbar = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_box}>
        <img src="../../../logo.png" alt="logo" className={styles.logo} />
      </div>
      <nav className={styles.nav_wrap}>
        <ul className={styles.nav}>
          <li>작품보기</li>
          <li>렌탈하기</li>
          <li>이용후기</li>
          <li>작가</li>
          <li>큐레이터추천</li>
          <li>아트매거진</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
