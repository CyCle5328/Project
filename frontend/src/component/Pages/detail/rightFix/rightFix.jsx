import classNames from 'classnames/bind';
import React from 'react';
import styles from './rightFix.module.css';
import { BsEmojiSmileFill, BsEmojiFrownFill } from 'react-icons/bs';
import { AiOutlineShareAlt, AiOutlineExclamationCircle } from 'react-icons/ai';
import { BiCheckboxSquare, BiCheckbox } from 'react-icons/bi';

const cx = classNames.bind(styles);

const RightFix = ({ benefit, onClickBenifit, art }) => {
  return (
    <div className={cx('rightFix')}>
      <div className={cx('state')}>
        {art.state === 1 ? (
          <span>
            <BsEmojiSmileFill /> 렌탈 가능 작품
          </span>
        ) : (
          <span>
            <BsEmojiFrownFill /> 렌탈중
          </span>
        )}
      </div>
      <h2 className={cx('name')}>{art.artName}</h2>
      <div className={cx('infoWrap')}>
        <div className={cx('author')}>작가</div>
        <div>최풀림</div>
        <div className={cx('info')}>작품정보</div>
        <p>천에 색연필, 오일파스텔</p>
      </div>
      <div className={cx('share')}>
        <AiOutlineShareAlt />
      </div>
      <div className={cx('rentalSection')}>
        <div className={cx('first')}>
          <span>
            렌탈가 &nbsp;
            <AiOutlineExclamationCircle />
          </span>
          <div>월 {art.price}</div>
        </div>
        <div className={cx('second')}>
          <span>렌탈기간</span>
          <div>3개월 (기본)</div>
        </div>
        <div className={cx('third')}>
          <div className={cx('back', `${benefit ? 'on' : 'off'}`)}>
            <div className={cx('click')} onClick={onClickBenifit}>
              {benefit && <BiCheckboxSquare className={cx('icon')} />}
              {!benefit && <BiCheckbox className={cx('icon')} />}
              <span>[신규고객] 첫 렌탈 혜택</span>
            </div>
            <div className={cx('detail')}>자세히 보기</div>
          </div>
        </div>
      </div>
      <div className={cx('priceBox')}>
        <div className={cx('priceInfo')}>
          <div className={cx('left')}>
            최종 렌탈가 <span>(3개월)</span>
          </div>
          <div className={cx('right')}>
            <div className={cx('temp')}>
              {!benefit && `${art.price}원`}
              {benefit && `99,000원`}
            </div>
            <div className={cx('byMonth')}>
              {!benefit && `월 ${art.price / 3}원`}
              {benefit && `월 33,000원`}
            </div>
          </div>
        </div>
        <div className={cx('rentalArea')}>
          <div className={cx('cartBtn')}>렌탈 카트</div>
          <div className={cx('rentalBtn')}>렌탈 하기</div>
        </div>
      </div>
      <div className={cx('rightBottom')}>
        <div className={cx('ps')}>
          * 출장비 및 설치비는 별도입니다. <br />* 작품에 따라 액자 처리 되어
          있을 수 있습니다.
        </div>
      </div>
    </div>
  );
};

export default RightFix;
