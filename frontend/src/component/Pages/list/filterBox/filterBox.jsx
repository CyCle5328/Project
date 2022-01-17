import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './filterBox.module.css';

const cx = classNames.bind(styles);

const FilterBox = ({ setTheme, theme, arrange, setArrange }) => {
  const [id, setId] = useState('');
  const [priceId, setPriceId] = useState('recent');

  const toggleTheme = () => {
    if (theme === '인물') setTheme('전체보기');
    if (theme === '풍경') setTheme('전체보기');
    if (theme === '정물') setTheme('전체보기');
    if (theme === '동물') setTheme('전체보기');
    if (theme === '상상') setTheme('전체보기');
    if (theme === '추상') setTheme('전체보기');
    if (id === '인물') setId('');
    if (id === '풍경') setId('');
    if (id === '정물') setId('');
    if (id === '동물') setId('');
    if (id === '상상') setId('');
    if (id === '추상') setId('');
  };

  const togglePrice = () => {
    if (arrange === 'HIGHPRICE') setArrange('RECENT');
    if (arrange === 'LOWPRICE') setArrange('RECENT');
    if (priceId === 'high') setPriceId('recent');
    if (priceId === 'low') setPriceId('recent');
  };

  return (
    <section className={cx('filterBox')}>
      <div className={cx('first')}>
        <div className={cx('title')}>테마</div>
        <div className={cx('filter')}>
          <div
            id="인물"
            className={cx('theme', `${id === '인물' ? 'active' : ''}`)}
            onClick={(e) => {
              setId(e.currentTarget.id);
              setTheme('인물');
              toggleTheme();
            }}
          >
            <span className={cx('span')}>인물</span>
          </div>
          <div
            className={cx('theme', `${id === '풍경' ? 'active' : ''}`)}
            id="풍경"
            onClick={(e) => {
              setId(e.currentTarget.id);
              setTheme('풍경');
              toggleTheme();
            }}
          >
            <span className={cx('span')}>풍경</span>
          </div>
          <div
            className={cx('theme', `${id === '정물' ? 'active' : ''}`)}
            id="정물"
            onClick={(e) => {
              setId(e.currentTarget.id);
              setTheme('정물');
              toggleTheme();
            }}
          >
            <span className={cx('span')}>정물</span>
          </div>
          <div
            className={cx('theme', `${id === '동물' ? 'active' : ''}`)}
            id="동물"
            onClick={(e) => {
              setId(e.currentTarget.id);
              setTheme('동물');
              toggleTheme();
            }}
          >
            <span className={cx('span')}>동물</span>
          </div>
          <div
            className={cx('theme', `${id === '상상' ? 'active' : ''}`)}
            id="상상"
            onClick={(e) => {
              setId(e.currentTarget.id);
              setTheme('상상');
              toggleTheme();
            }}
          >
            <span className={cx('span')}>상상</span>
          </div>
          <div
            className={cx('theme', `${id === '추상' ? 'active' : ''}`)}
            id="추상"
            onClick={(e) => {
              setId(e.currentTarget.id);
              setTheme('추상');
              toggleTheme();
            }}
          >
            <span className={cx('span')}>추상</span>
          </div>
        </div>
      </div>
      <div className={cx('second')}>
        <div className={cx('title')}>가격</div>
        <div className={cx('filter')}>
          <div
            className={cx('price', `${priceId === 'recent' ? 'active' : ''}`)}
            id="recent"
            onClick={(e) => {
              setArrange('RECENT');
              setPriceId(e.currentTarget.id);
              togglePrice();
            }}
          >
            <span className={cx('span')}>최근등록순</span>
          </div>
          <div
            className={cx('price', `${priceId === 'high' ? 'active' : ''}`)}
            id="high"
            onClick={(e) => {
              setArrange('HIGHPRICE');
              setPriceId(e.currentTarget.id);
              togglePrice();
            }}
          >
            <span className={cx('span')}>높은가격순</span>
          </div>
          <div
            className={cx('price', `${priceId === 'low' ? 'active' : ''}`)}
            id="low"
            onClick={(e) => {
              setArrange('LOWPRICE');
              setPriceId(e.currentTarget.id);
              togglePrice();
            }}
          >
            <span className={cx('span')}>낮은가격순</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBox;
