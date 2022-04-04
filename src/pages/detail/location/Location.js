import React, { useRef, useEffect } from 'react';
import style from './Location.module.css';
import classNames from 'classnames/bind';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiKakao } from 'react-icons/si';

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

function Location({ name }) {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  const cx = classNames.bind(style);

  useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    return () => {};
  }, []);

  return (
    <div className={cx('mapWrapper')}>
      <div
        className={cx('map')}
        style={{ width: '1600px', height: '500px' }}
        ref={container}
      />
      <div className={cx('locationCard')}>
        <span className={cx('greeting', 'largeLetters')}>HELLO.</span>
        <span className={cx('dormName', 'largeLetters')}>{name}</span>
        <div className={cx('dormInfo')}>
          <p className={cx('address')}>
            충청남도 서산시 해미면 일락골길 368-10
          </p>
          <p className={cx('contact')}>0504-0904-2003</p>
          <p className={cx('email')}>stayforest@justcode.com</p>
        </div>
        <div className={cx('logos')}>
          <span className={cx('instagramLogo', 'logo')}>
            <AiOutlineInstagram color="gray" size="24" />
          </span>
          <span className={cx('kakaoLogo', 'logo')}>
            <SiKakao color="gray" size="40" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Location;
