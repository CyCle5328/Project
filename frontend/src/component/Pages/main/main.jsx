import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import styles from './main.module.css';
import MainSlide from './mainSlide/mainSlide';
import { FiArrowUp } from 'react-icons/fi';

const cx = classNames.bind(styles);

const Main = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (scrollY < 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <div className={cx('wrap')}>
      <MainSlide />
      <div className={cx('fake')} />
      <FiArrowUp
        className={cx('top', `${!btnStatus ? 'active' : ''}`)}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default Main;
