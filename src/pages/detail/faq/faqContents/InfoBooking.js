import React from 'react';
import style from './InfoBooking.module.css';
import classNames from 'classnames/bind';

const InfoBooking = ({ name, index }) => {
  const cx = classNames.bind(style);

  return (
    <div>
      <div className={cx('nameWrapper')}>
        <span className={cx('name')}>{name}</span>
      </div>
      <div className={cx('contentWrapper')}>
        <div className={cx('subHeading')}>환불 규정</div>
        <div className={cx('contents')}>
          <ul>
            <li className={cx('contentList')}>
              예약 취소 및 날짜 변경 시 아래의 환뷸 규정에 따른 환불 금액을
              드립니다.
            </li>
            <li className={cx('contentList')}>
              예약의 확정은 아래 사항을 모두 숙지하였고 모든 사항에 동의함을
              의미합니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoBooking;
