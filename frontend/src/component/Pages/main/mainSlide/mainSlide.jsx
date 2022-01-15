import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './mainSlide.module.css';
import React, { useEffect, useRef, useState } from 'react';
import SlideImg from './slideImg/slideImg';

const cx = classNames.bind(styles);

const MainSlide = () => {
  const [slides, setSlides] = useState([]);
  const [slidePage, setSlidePage] = useState(0);
  const [size, setSize] = useState(0);
  const page = useRef(0);

  async function getSlide() {
    const response = await axios.get('http://localhost:8080/api/advertisement');
    setSlides(response.data.list);
    setSize(response.data.list.length);
  }

  const autoSlide = () => {
    slideMover('left');
  };

  useEffect(() => {
    getSlide();
  }, []);

  const slideMover = (direction) => {
    if (direction === 'left') {
      if (page.current === 0) {
        setSlidePage(-300);
        page.current = 3;
        return;
      }
      page.current--;
      setSlidePage(slidePage + 100);
    } else {
      if (page.current > size - 2) {
        setSlidePage(0);
        page.current = 0;
        return;
      }
      page.current++;
      setSlidePage(slidePage - 100);
    }
  };

  const styles = {
    transform: `translateX(${slidePage}vw)`,
    transition: `transform 0.2s ease-in`,
  };

  return (
    <div className={cx('slideWrap')}>
      <ul className={cx('wrapper')} style={styles}>
        {slides.map((slide) => (
          <SlideImg key={slide.adNo} slide={slide} />
        ))}
      </ul>
      <div
        className={cx('leftBtn', 'btn')}
        onClick={() => slideMover('left')}
      />
      <div
        className={cx('rightBtn', 'btn')}
        onClick={() => slideMover('right')}
      />
    </div>
  );
};

export default MainSlide;
