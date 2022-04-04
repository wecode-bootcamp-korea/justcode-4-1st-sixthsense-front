import React, { useState } from 'react';
import style from './DormSlide.module.css';
import classNames from 'classnames/bind';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const DormSlide = ({ dormName }) => {
  const [current, setCurrent] = useState(0);

  const cx = classNames.bind(style);

  const slide = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1623718649591-311775a30c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1584132869994-873f9363a562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  const next = () => {
    setCurrent(() => (current === slide.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setCurrent(() => (current === 0 ? slide.length - 1 : current - 1));
  };

  return (
    <div className={cx('container')}>
      {slide.map((el, idx) => {
        return (
          <div
            className={cx(
              'wrapper',
              idx === current ? 'slideActive' : 'slideInactive'
            )}
            key={el.id}
          >
            {idx === current && (
              <img className={cx('slideImg')} src={el.url} alt={el.id} />
            )}
          </div>
        );
      })}
      <div className={cx('prevBtn', 'btnWrapper')} onClick={prev}>
        <IoIosArrowBack className={cx('btn')} size="20" color="white" />
      </div>
      <div className={cx('nextBtn', 'btnWrapper')} onClick={next}>
        <IoIosArrowForward className={cx('btn')} size="20" color="white" />
      </div>
      <div className={cx('description')}>
        <p className={cx('quote')}>여름 햇살 아래 구옥이 품은 빈티지</p>
        <div className={cx('category')}>
          <p className={cx('categoryName', 'magazine')}>MAGAZINE</p>
          <p className={cx('categoryName', 'pick')}>PICK</p>
          <p className={cx('categoryName', 'promotion')}>PROMOTION</p>
        </div>
        <div className={cx('dormInfo')}>
          <p className={cx('dormName')}>'dormName'</p>
          <p className={cx('location')}>'location'/ 'district'</p>
        </div>
      </div>
    </div>
  );
};

export default DormSlide;
