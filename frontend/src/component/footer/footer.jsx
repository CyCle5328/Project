import classNames from 'classnames';
import React from 'react';
import styles from './footer.module.css';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('wrap')}>
        <div className={cx('introduce')}>
          <ul>
            <li>회사소개</li>
            <li>제후문의</li>
            <li>작가공모 지원</li>
          </ul>
        </div>
        <div className={cx('content')}>
          <p>
            상호명 : 오픈갤러리 I 대표 : 박의규 I 사업자등록번호 : 206-86-83224
            I 호스팅 제공자 : AWS 통신판매신고번호 : 제2014-서울강남-01614호 I
            주소 : 서울 성동구 성수동1가 656-75 헤이그라운드 서울숲점 7층
            E-mail: contact@opengallery.co.krI© OPEN GALLERY, Inc.
            <span>이용약관</span>
            <span>개인정보처리방침</span>FAQ
          </p>
        </div>
        <div className={cx('right')}>
          <p>
            <b>대표번호 1668-1056</b> 평일 <span>9:00 - 18:00</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
