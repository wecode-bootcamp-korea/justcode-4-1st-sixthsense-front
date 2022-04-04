import React, { useState } from 'react';
import style from './DetailTop.module.css';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import DormSlide from './DormSlide';

const DetailTop = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <div className={style.top}>
      {/* 숙소명 및 날짜 선택*/}
      <div className={style.calendar}>
        <div className={style.title_container}>
          <div className={style.dormName}>
            <span className={style.title}>어연스테이</span>
            {isLike ? (
              <FiHeart
                size="20"
                color="lightgray"
                onClick={() => setIsLike(prev => !prev)}
                className={style.heart}
              />
            ) : (
              <FaHeart
                size="20"
                color="pink"
                onClick={() => setIsLike(prev => !prev)}
                className={style.heart}
              />
            )}
          </div>
          <div className={style.date}>
            <div className={style.select_btn}>
              <span className={style.select_date}>날짜를 선택해주세요.</span>
              <i class="fa-solid fa-chevron-down" />
            </div>
            <div className={style.date_blank} />
          </div>
        </div>
      </div>
      {/* 숙소 사진 슬라이드 */}
      <DormSlide />
    </div>
  );
};

export default DetailTop;
