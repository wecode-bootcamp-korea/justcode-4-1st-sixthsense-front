import React from 'react';
import css from './Special.module.scss';

const Special = () => {
  return (
    <div className={css.container}>
      <div className={css.special}>
        <h1>SPECIAL</h1>
      </div>
      <div className={css.cardWrapper}>
        <div className={css.card}>
          <h1 className={css.title}>MUSIC</h1>
          <p className={css.description}>
            강력하고도 정교한 사운드를 선사하는 뱅앤올룹슨 A9 스피커가 마련되어
            있습니다. 풍부한 음질과 함께 품격 있는 시간을 가질 수 있습니다.
          </p>
        </div>
        <div className={css.card}>
          <h1 className={css.title}>NATURE</h1>
          <p className={css.description}>
            산이 펼쳐지고 물이 흐르는 곳에 자리하여 큰 창 가득 완주의 자연을
            끌어안는 공간입니다.
          </p>
        </div>
        <div className={css.card}>
          <h1 className={css.title}>BATH</h1>
          <p className={css.description}>
            외부의 시선으로부터 자유로운 야외 소프트 욕조에서 자연의 치유력을
            느끼며 몰튼 브라운 어메니티로 피로를 풀어보세요.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Special;
