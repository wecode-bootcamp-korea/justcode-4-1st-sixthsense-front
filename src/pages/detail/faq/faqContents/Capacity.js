import React from 'react';
import style from './InfoForUsing.module.css';
import classNames from 'classnames/bind';

const Capacity = ({ name, index }) => {
  const cx = classNames.bind(style);

  return (
    <div>
      <div className={cx('nameWrapper')}>
        <span className={cx('name')}>{name}</span>
      </div>
      <div className={cx('contentWrapper')}>
        <div className={cx('subHeading')}>인원 기준</div>
        <div className={cx('contents')}>
          <ul>
            <li className={cx('contentList')}>
              숙박 기준인원은 4인, 최대인원은 5인입니다.
            </li>
            <li className={cx('contentList')}>
              기준인원 외 인원추가 요금은 별도 없으며, 싱글 요 세트를 추가로
              준비해드립니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Capacity;
