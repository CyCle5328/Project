import axios from 'axios';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './artDetail.module.css';
import Recommand from './recommand/recommand';
import RightFix from './rightFix/rightFix';
import TryBox from './tryBox/tryBox';

const cx = classNames.bind(styles);

const ArtDetail = () => {
  const params = useParams();
  const artNo = params.artNo;
  const [art, setArt] = useState([]);
  const [benefit, setBenefit] = useState(false);

  async function getArtwork() {
    const response = await axios.get(
      `http://localhost:8080/api/artList/${artNo}`,
    );
    setArt(response.data.artwork);
  }

  const onClickBenifit = () => {
    setBenefit(!benefit);
  };

  useEffect(() => {
    getArtwork();
  }, [art]);

  return (
    <section className={cx('wrap')}>
      <div className={cx('artWrap')}>
        <div className={cx('imgBox')}>
          <img src={`${art.path}`} alt="이미지" className={cx('img')} />
        </div>
        <div className={cx('left')}>
          <div className={cx('banner')}>
            <h3>신규고객 대상 혜택</h3>
            <p>첫 렌탈이라면 무조건 33,000원!</p>
          </div>
          <TryBox art={art} />
          <Recommand />
        </div>
        <RightFix art={art} onClickBenifit={onClickBenifit} benefit={benefit} />
      </div>
    </section>
  );
};

export default ArtDetail;
