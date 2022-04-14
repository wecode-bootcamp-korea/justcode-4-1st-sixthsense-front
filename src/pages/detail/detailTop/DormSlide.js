import React, { useState } from 'react';
import style from './DormSlide.module.css';
import classNames from 'classnames/bind';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const DormSlide = ({ dormitoryName, images, comment, city, district }) => {
  const [current, setCurrent] = useState(0);
  const cx = classNames.bind(style);
  const next = () => {
    setCurrent(() => (current === images.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setCurrent(() => (current === 0 ? images.length - 1 : current - 1));
  };

  return (
    <div className={cx('container')}>
      {images.map((el, idx) => {
        return (
          <div
            className={cx(
              'wrapper',
              idx === current ? 'slideActive' : 'slideInactive'
            )}
            key={el.id}
          >
            {idx === current && (
              <img className={cx('slideImg')} src={el} alt="dormitory images" />
            )}
          </div>
        );
      })}
      <div className={cx('prevBtn', 'btnWrapper')} onClick={prev}>
        <IoIosArrowBack className={cx('btn', 'back')} size="20" color="white" />
      </div>
      <div className={cx('nextBtn', 'btnWrapper')} onClick={next}>
        <IoIosArrowForward
          className={cx('btn', 'forward')}
          size="20"
          color="white"
        />
      </div>
      <div className={cx('description')}>
        <p className={cx('quote')}>{comment}</p>
        <div className={cx('category')}>
          <p className={cx('categoryName', 'magazine')}>MAGAZINE</p>
          <p className={cx('categoryName', 'pick')}>PICK</p>
          <p className={cx('categoryName', 'promotion')}>PROMOTION</p>
          <div className={cx('dormInfo')}>
            <p className={cx('dormName')}>{dormitoryName}</p>
            <p className={cx('location')}>
              {city}/ {district}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DormSlide;
