import React from 'react';
import style from './Detail.module.scss';
import DetailTop from './detailTop/DetailTop';
import Rooms from './rooms/Rooms';
import Info from './info/Info';
import Special from './special/Special';
// import Location from './location/Location';
import Places from './places/Places';
import FAQ from './faq/FAQ';

function Detail() {
  return (
    <div className={style.detailWrapper}>
      <DetailTop />
      <Rooms />
      <Info />
      <Special />
      {/* <Location /> */}
      <Places />
      <FAQ />
    </div>
  );
}

export default Detail;
