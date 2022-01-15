import classNames from 'classnames/bind';
import React from 'react';
import styles from './filterBox.module.css';

const cx = classNames.bind(styles);

const FilterBox = () => {
  return (
    <section className={cx('filterBox')}>
      <div className={cx('first')}>
        <div className={cx('title')}>테마</div>
        <div className={cx('filter')}>
          <div className={cx('theme')}>
            <span className={cx('span')}>인물</span>
          </div>
          <div className={cx('theme')}>
            <span className={cx('span')}>풍경</span>
          </div>
          <div className={cx('theme')}>
            <span className={cx('span')}>정물</span>
          </div>
          <div className={cx('theme')}>
            <span className={cx('span')}>동물</span>
          </div>
          <div className={cx('theme')}>
            <span className={cx('span')}>상상</span>
          </div>
          <div className={cx('theme')}>
            <span className={cx('span')}>추상</span>
          </div>
        </div>
      </div>
      <div className={cx('second')}>
        <div className={cx('title')}>가격</div>
        <div className={cx('filter')}>
          <div className={cx('price')}>
            <span className={cx('span')}>~ 7만원</span>
          </div>
          <div className={cx('price')}>
            <span className={cx('span')}>~ 12만원</span>
          </div>
          <div className={cx('price')}>
            <span className={cx('span')}>15만원 ~</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBox;
