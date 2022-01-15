import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserBox from '../Pages/main/userBox/userBox';
import styles from './navbar.module.css';
import NoticeBox from './noticeBox/noticeBox';
import SearchBar from './serchBar/searchBar';

const cx = classNames.bind(styles);

const Navbar = (props) => {
  const [show, setShow] = useState(0);
  const [showNotice, setShowNotice] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(0);

  const onNoticeClose = () => {
    setShowNotice(false);
  };

  const showSubMenu = () => {
    setShow((show) => (show === 0 ? 1 : 0));
  };

  const toggleSerchBox = () => {
    setShowSearchBox((showSearchBox) => (showSearchBox === 0 ? 1 : 0));
  };

  return (
    <header
      className={cx(
        'header',
        `${show === 1 ? 'active_sub_menu' : ''}`,
        `${showSearchBox === 1 ? 'active_search' : ''}`,
      )}
    >
      <div className={cx('header_sub_menu')} />
      <nav className={cx('header_wrap')}>
        <h1 className={cx('logo_title')}>
          <div className={cx('logo_box')}>
            <Link to="/" className={cx('link')}>
              <div className={cx('logo')}>오픈갤러리</div>
            </Link>
          </div>
        </h1>
        <ul
          className={cx('nav')}
          onMouseEnter={showSubMenu}
          onMouseLeave={showSubMenu}
        >
          <li>
            <span className={cx('menu')}>
              <Link to="/discover" className={cx('link')}>
                작품보기
              </Link>
            </span>
          </li>
          <li>
            <span className={cx('menu')}>렌탈하기</span>
            <ul className={cx('sub_ul')}>
              <li>
                <span>그림렌탈</span>
              </li>
              <li>
                <span>법인상담</span>
              </li>
              <li>
                <span>기프트카드</span>
              </li>
            </ul>
          </li>
          <li>
            <span className={cx('menu')}>이용후기</span>
            <ul className={cx('sub_ul')}>
              <li>
                <span>개인 고객</span>
              </li>
              <li>
                <span>법인 고객</span>
              </li>
              <li>
                <span>셀럽 인터뷰</span>
              </li>
            </ul>
          </li>
          <li>
            <span className={cx('menu')}>작가</span>
            <ul className={cx('sub_ul')}>
              <li>
                <span>작가소개</span>
              </li>
              <li>
                <span>작가공모</span>
              </li>
            </ul>
          </li>
          <li>
            <span className={cx('menu')}>큐레이터추천</span>
            <ul className={cx('sub_ul')}>
              <li>
                <span>제안서 신청</span>
              </li>
              <li>
                <span>작품선택 Tip</span>
              </li>
              <li>
                <span>그림인테리어 Tip</span>
              </li>
              <li>
                <span>테마별 추천</span>
              </li>
            </ul>
          </li>
          <li>
            <span className={cx('menu')}>아트매거진</span>
            <ul className={cx('sub_ul')}>
              <li>
                <span>전시정보</span>
              </li>
              <li>
                <span>미술 이야기</span>
              </li>
              <li>
                <span>아트 딕셔너리</span>
              </li>
            </ul>
          </li>
        </ul>
        <div className={cx('header_right')}>
          <div className={cx('header_notice')}>
            <div
              className={cx('header_notice_btn')}
              onClick={() => {
                setShowNotice(true);
              }}
            />
          </div>
          <NoticeBox showNotice={showNotice} onNoticeClose={onNoticeClose} />
          <div className={cx('header_showSearch')}>
            <div
              className={cx('header_showSearch_btn')}
              onClick={toggleSerchBox}
            />
          </div>
          <div className={cx('header_cart')}>
            <div className={cx('header_cart_btn')} />
          </div>
          <div className={cx('header_mycollection')}>
            <div className={cx('header_mycollection_btn')} />
          </div>
          <UserBox />
        </div>
      </nav>
      <SearchBar className={cx('searchbar')} showSearchBox={showSearchBox} />
      <div className={cx(`${showSearchBox === 1 ? 'searchBody' : ''}`)} />
    </header>
  );
};

export default Navbar;
