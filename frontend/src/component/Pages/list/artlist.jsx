import classNames from 'classnames';
import React from 'react';
import styles from './artlist.module.css';
import Navbar from '../../navbar/navbar';
import FillterBox from './filterBox/filterBox';

const cx = classNames.bind(styles);

const Artlist = () => {
  return (
    <div className={cx('wrap')}>
      <Navbar />
      <FillterBox />
    </div>
  );
};

export default Artlist;
