import React from 'react';
import style from './Main.module.css';
import MainContact from './components/contact/MainContact';

function Main() {
  return (
    <>
      <div className={`${style.sliderBig} ${style.mainFirst}`}>
        slider big 1
      </div>
      <div className={style.sliderSmall}>slider small 1</div>
      <div className={style.mainBanner}>banner</div>
      <div className={style.sliderMedium}>slider medium 1</div>
      <div className={style.sliderSmall}>slider small 2</div>
      <div className={style.sliderBig}>slider big 2</div>
      <div className={style.travelList}>travel list</div>
      <div className={style.hashtagList}>hashtag list</div>
      <div className={style.sliderSmall}>slider small 3</div>
      <div className={style.sliderSmall}>slider small 4</div>
      <div>
        <MainContact />
      </div>
    </>
  );
}

export default Main;
