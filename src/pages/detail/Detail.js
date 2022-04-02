import React from 'react';
import DetailTop from '../../components/detailTop/DetailTop';
import FAQ from '../../components/faq/FAQ';
import Info from '../../components/info/Info';
import Location from '../../components/location/Location';
import Places from '../../components/places/Places';
import Rooms from '../../components/rooms/Rooms';
import Special from '../../components/special/Special';
import style from './Detail.module.scss';

function Detail() {
  return (
    <div className={style.detailWrapper}>
      <DetailTop />
      <Rooms />
      <Info />
      <Special />
      <Places />
      <FAQ />
    </div>
  );
}

export default Detail;
