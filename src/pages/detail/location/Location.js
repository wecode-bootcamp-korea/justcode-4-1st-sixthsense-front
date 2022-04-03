import React, { useEffect } from 'react';
import style from './Location.module.css';
const { kakao } = window;

const Location = () => {
  useEffect(() => {
    const container = document.getElementsById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div
      id="map"
      className={style.kakaoMap}
      style={{
        width: '500px',
        height: '500px',
      }}
    />
  );
};

export default Location;
