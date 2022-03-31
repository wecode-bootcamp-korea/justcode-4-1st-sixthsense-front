import React from 'react';
import DetailTop from '../../components/detailTop/DetailTop';
import Info from '../../components/info/Info';
import Rooms from '../../components/rooms/Rooms';
import Special from '../../components/special/Special';
import styles from './Detail.module.scss';

function Detail() {
  return (
    <>
      <DetailTop />
      <Rooms />
      <Info />
      <Special />
    </>
  );
}

export default Detail;
