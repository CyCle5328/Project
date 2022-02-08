import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './tryBox.module.css';
import { AiOutlineCheck } from 'react-icons/ai';

const cx = classNames.bind(styles);

const TryBox = ({ art }) => {
  const [changeBack, setChangeBack] = useState('room1');
  const onChange = (e) => {
    setChangeBack(e.currentTarget.id);
  };

  const [changeColor, setChangeColor] = useState('aliceblue');

  const onChangeColor = (e) => {
    setChangeColor(e.currentTarget.id);
  };

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [moveMouse, setMoveMous] = useState({});

  const showMouse = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <div className={cx('tryArea')}>
      <h2>작품 걸어보기</h2>
      <div className={cx('tryBox')}>
        <div className={cx('try_left')}>
          <div className={cx('a')}>
            <div
              className={cx(
                'background',
                `${changeBack}` === 'room2' ? 'background2' : '',
                `${changeBack}` === 'room3' ? 'background3' : '',
                `${changeColor}` === 'aliceblue' ? 'back_aliceblue' : '',
                `${changeColor}` === 'lightgray' ? 'back_lightgray' : '',
                `${changeColor}` === 'antiquewhite' ? 'back_antiquewhite' : '',
                `${changeColor}` === 'skyblue' ? 'back_skyblue' : '',
                `${changeColor}` === 'gray' ? 'back_gray' : '',
                `${changeColor}` === 'crimson' ? 'back_crimson' : '',
                `${changeColor}` === 'darkslategray'
                  ? 'back_darkslategray'
                  : '',
              )}
            >
              <img
                src={`${art.path}`}
                alt="이미지"
                className={cx('prevImg')}
                draggable="true"
                onClick={(e) => showMouse(e)}
              />
            </div>
          </div>
        </div>
        <div className={cx('try_right')}>
          <div className={cx('space')}>
            <h2>공간</h2>
            <div className={cx('rooms')}>
              <div
                className={cx(
                  'room1',
                  `${changeBack}` === 'room1' ? 'active' : '',
                )}
                id="room1"
                onClick={(e) => {
                  onChange(e);
                }}
              >
                거실
              </div>
              <div
                className={cx(
                  'room2',
                  `${changeBack}` === 'room2' ? 'active' : '',
                )}
                id="room2"
                onClick={(e) => {
                  onChange(e);
                }}
              >
                침실
              </div>
              <div
                className={cx(
                  'room3',
                  `${changeBack}` === 'room3' ? 'active' : '',
                )}
                id="room3"
                onClick={(e) => {
                  onChange(e);
                }}
              >
                복도
              </div>
            </div>
            <div className={cx('color')}>
              <h2>배경색</h2>
              <div className={cx('colors')}>
                <div
                  className={cx(
                    'aliceblue',
                    `${changeColor}` === 'aliceblue' ? 'choose' : '',
                  )}
                  id="aliceblue"
                  onClick={(e) => {
                    onChangeColor(e);
                  }}
                >
                  <AiOutlineCheck className={cx('icon')} />
                </div>
                <div
                  className={cx(
                    'lightgray',
                    `${changeColor}` === 'lightgray' ? 'choose' : '',
                  )}
                  id="lightgray"
                  onClick={(e) => {
                    onChangeColor(e);
                  }}
                >
                  <AiOutlineCheck className={cx('icon')} />
                </div>
                <div
                  className={cx(
                    'antiquewhite',
                    `${changeColor}` === 'antiquewhite' ? 'choose' : '',
                  )}
                  id="antiquewhite"
                  onClick={(e) => {
                    onChangeColor(e);
                  }}
                >
                  <AiOutlineCheck className={cx('icon')} />
                </div>
                <div
                  className={cx(
                    'skyblue',
                    `${changeColor}` === 'skyblue' ? 'choose' : '',
                  )}
                  id="skyblue"
                  onClick={(e) => {
                    onChangeColor(e);
                  }}
                >
                  <AiOutlineCheck className={cx('icon')} />
                </div>
                <div
                  className={cx(
                    'gray',
                    `${changeColor}` === 'gray' ? 'choose' : '',
                  )}
                  id="gray"
                  onClick={(e) => {
                    onChangeColor(e);
                  }}
                >
                  <AiOutlineCheck className={cx('icon')} />
                </div>
                <div
                  className={cx(
                    'crimson',
                    `${changeColor}` === 'crimson' ? 'choose' : '',
                  )}
                  id="crimson"
                  onClick={(e) => {
                    onChangeColor(e);
                  }}
                >
                  <AiOutlineCheck className={cx('icon')} />
                </div>
                <div
                  className={cx(
                    'darkslategray',
                    `${changeColor}` === 'darkslategray' ? 'choose' : '',
                  )}
                  id="darkslategray"
                  onClick={(e) => {
                    onChangeColor(e);
                  }}
                >
                  <AiOutlineCheck className={cx('icon')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryBox;
