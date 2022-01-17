import classNames from 'classnames/bind';
import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styles from './artworkList.module.css';

const cx = classNames.bind(styles);

const ArtworkList = ({ art }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${art.artNo}`);
  };

  return (
    <div className={cx('artBox')} onClick={goToDetail}>
      <div className={cx('imgBox')}>
        <img src={`${art.path}`} alt="이미지" className={cx('img')} />
      </div>
      <div className={cx('contentBox')}>
        <h3 className={cx('title')}>{art.artName}</h3>
        <div className={cx('price')}>작가 : {art.author.authorName}</div>
        <div className={cx('theme')}>
          {art.theme}, ₩ {art.price}
        </div>
      </div>
    </div>
  );
};

export default ArtworkList;
