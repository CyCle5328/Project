import classNames from 'classnames/bind';
import styles from './slideImg.module.css';
import React from 'react';

const cx = classNames.bind(styles);

const SlideImg = ({ slide }) => {
  return (
    <li className={cx('imgBox')}>
      <img src={slide.adPath} alt="이미지" className={cx('img')} />
      <div className={cx('contentBox')}>
        <div className={cx('content')}>
          <h3
            className={cx(
              'type',
              `${slide.adType === 'event' ? 'typeBrown' : ''}`,
              `${slide.adType === 'artwork' ? 'typeRed' : ''}`,
              `${slide.adType === 'service' ? 'typeGreen' : ''}`,
            )}
          >
            {slide.adType}
          </h3>
          <h2 className={cx('title')}>{slide.adTitle}</h2>
          <p className={cx('explain')}>{slide.adExplain}</p>
        </div>
      </div>
    </li>
  );
};
export default SlideImg;
