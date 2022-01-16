import classNames from 'classnames/bind';
import styles from './noticeBox.module.css';

const cx = classNames.bind(styles);

const NoticeBox = ({ showNotice, onNoticeClose }) => {
  return (
    showNotice && (
      <div className={cx('noticeBox')}>
        <div className={cx('noticeBox_inner')}>
          <div className={cx('noticeBox_closeBtn')} onClick={onNoticeClose} />
          <h3 className={cx('noticeBox_title')}>그림 선택이 어렵다면</h3>
          <div className={cx('noticeBox_subtitle')}>
            새로운 검색방법을 사용해 보세요
          </div>
          <div className={cx('noticeBox_image')} />
          <p className={cx('noticeBox_p')}>
            <span className={cx('noticeBox_num')}>1</span>
            "&nbsp; 원하는 "<b>공간</b>
            "과 "<b>작품 사이즈</b>" 먼저 선택 "
          </p>
          <p className={cx('noticeBox_p')}>
            <span className={cx('noticeBox_num')}>2</span>
            "&nbsp; 추천 작품 중 원하는 "<b>그림 선택</b>
          </p>
          <span className={cx('notice_startBtn')}>사용하기</span>
        </div>
      </div>
    )
  );
};

export default NoticeBox;
