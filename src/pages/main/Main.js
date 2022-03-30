import React from 'react';
import css from './Main.module.css';

function Main() {
  return (
    <>
      <div className={`${css.sliderBig} ${css.first}`}>slider big 1</div>
      <div className={css.sliderSmall}>slider small 1</div>
      <div className={css.banner}>banner</div>
      <div className={css.sliderMedium}>slider medium 1</div>
      <div className={css.sliderSmall}>slider small 2</div>
      <div className={css.sliderBig}>slider big 2</div>
      <div className={css.travelList}>travel list</div>
      <div className={css.hashtagList}>hashtag list</div>
      <div className={css.sliderSmall}>slider small 3</div>
      <div className={css.sliderSmall}>slider small 4</div>
      <div className={css.contact}>
        <div className={css.contactWrapper}>
          <div>
            <p className={css.contactText1}>
              유니크한 숙소 공간을 추천해 주세요.
            </p>
            <p className={css.contactText2}>
              스테이포레스트는 여행자와 창작사 사이에서 <br />
              혁신적인 스테이 모델을 지속적으로 소개하고 있습니다.
            </p>
            <p className={css.contactMore}>read more</p>
          </div>
        </div>
        <div className={css.contactWrapper}>
          <div>
            <p className={css.contactText1}>FINE STAY AGENCY STAYFOREST</p>
            <p className={css.contactText2}>
              콘텐츠 제작, 마케팅 전략, 예약시스템 <br /> 비즈니스 모델의
              경쟁력을 높이는 호스트 솔루션을 만나보세요.
            </p>
            <p className={css.contactMore}>read more</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
