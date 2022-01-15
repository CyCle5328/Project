import classNames from 'classnames/bind';
import React from 'react';
import styles from './searchBar.module.css';

const cx = classNames.bind(styles);

const SearchBar = ({ showSearchBox }) => {
  return (
    showSearchBox === 1 && (
      <div className={cx('header_searchBar')}>
        <form action="" className={cx('header_searchBar_form')}>
          <div className={cx('header_searchBar_inner')}>
            <div className={cx('header_searchBar_inputWrapper')}>
              <input
                type="search"
                name="sq"
                className={cx('header_searchBar_sq')}
                placeholder="작가 이름, 작품 제목, 태그, 재료"
              />
              <input
                type="submit"
                className={cx('header_searchBar_submit')}
                title="검색"
                value=""
              />
            </div>
          </div>
        </form>
      </div>
    )
  );
};

export default SearchBar;
