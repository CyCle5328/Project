import classNames from 'classnames/bind';
import React from 'react';
import styles from './recommand.module.css';

const cx = classNames.bind(styles);

const Recommand = () => {
  return (
    <div className={cx('recommandBox')}>
      <h2 className={cx('review')}>작품 감상하기</h2>
      <div className={cx('title')}>큐레이터 노트</div>
      <div className={cx('content')}>
        <p>
          구글 어스(google earth)* 프로그램을 통해 본 풍경을 사실적으로 묘사한
          일부 작품들과는 다르게 지도에서 볼p 수 없는 비현실적인 공간을
          묘사함으로써 작가의 상상력을 잘 담아내고 있는 작품이다. 공중에서
          부유하는 나무들과 땅 위에 뿌리를 내리고 있는 나무들의 모습이 대비되어
          가상과 현실이 혼재된 느낌을 준다. 작품 전체에 깔린 맑은 푸른 색채는
          바다를 떠올리게 하며 동시에 끝없는 하늘을 연상시키기도 한다. 도시에
          익숙한 많은 현대인이 보기에 인공적인 조형물이 부재한 이 작품은 완전한
          자연 그대로의 모습을 보여주는 듯하다. 그 안에 알게 모르게 존재하는
          질서와 비현실성은 닿을 수 없는 유토피아를 나타내며 공허한 초현실주의적
          분위기를 자아낸다.
        </p>
      </div>
      <div className={cx('title')}>추천 이유</div>
      <div className={cx('content')}>
        <p>
          이 작품들에서는 안정감을 가장 먼저 느낄 수 있습니다. 이는 작품을
          구성하고 있는 색이 우리에게 익숙한 색이기 때문에 보는 사람의 마음까지
          편안하게 만들어주기 때문일텐데요. 또한 언뜻 그림 속 요소들이
          무작위하게 배열된 것처럼 보이는 작품들 역시 정확히 구획된 공간을
          다루고 있는 작품만큼이나 안정적인 구성을 이루고 있는 것을 볼 수
          있습니다. 매일 두고 보기에 이보다 적합한 작품이 있을까요? 가라앉아
          있는 주변의 공기마저 가볍게 해줄 것 같은 작품들입니다.
        </p>
      </div>
    </div>
  );
};

export default Recommand;
