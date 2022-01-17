import axios from 'axios';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './artDetail.module.css';
import { BsEmojiSmileFill, BsEmojiFrownFill } from 'react-icons/bs';
import { AiOutlineShareAlt, AiOutlineExclamationCircle } from 'react-icons/ai';
import { BiCheckboxSquare, BiCheckbox } from 'react-icons/bi';

const cx = classNames.bind(styles);

const ArtDetail = () => {
  const params = useParams();
  const artNo = params.artNo;
  const [art, setArt] = useState([]);

  async function getArtwork() {
    const response = await axios.get(
      `http://localhost:8080/api/artList/${artNo}`,
    );
    setArt(response.data.artwork);
  }

  useEffect(() => {
    getArtwork();
  }, []);

  return (
    <section className={cx('wrap')}>
      <div className={cx('artWrap')}>
        <div className={cx('imgBox')}>
          <img src={`${art.path}`} alt="이미지" className={cx('img')} />
        </div>
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
              <div className={cx('back')}>
                <div className={cx('benefit')}>
                  <BiCheckbox /> <span>[신규고객] 첫 렌탈 혜택</span>
                </div>
                <button>자세히 보기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtDetail;
