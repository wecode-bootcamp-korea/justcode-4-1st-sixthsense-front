import React from 'react';
import style from './InfoAmenity.module.css';
import classNames from 'classnames/bind';

const InfoAmenity = ({ name, index }) => {
  const cx = classNames.bind(style);

  return (
    <div>
      <div className={cx('nameWrapper')}>
        <span className={cx('name')}>{name}</span>
      </div>
      <div className={cx('contentWrapper')}>
        <div className={cx('subHeading')}>침실동</div>
        <div className={cx('contents')}>
          <ul>
            <li className={cx('contentList')}>
              좌식형 거실과 침실, 화장실이 있습니다.
            </li>
            <li className={cx('contentList')}>
              퀸사이즈 베드1, 더블 요 세트1 (5인 숙박 시 싱글 요 세트 추가)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoAmenity;
