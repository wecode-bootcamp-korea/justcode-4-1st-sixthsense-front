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
      <div className={css.contact}>contact</div>
    </>
  );
}

export default Main;
