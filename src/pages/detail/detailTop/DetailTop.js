import React from 'react';
import style from './DetailTop.module.css';

const DetailTop = () => {
  return (
    <div className={style.top}>
      {/* 숙소명 및 날짜 선택*/}
      <div className={style.calendar}>
        <div className={style.title_container}>
          <div className={style.dormName}>
            <span className={style.title}>어연스테이</span>
            <i class="fa-regular fa-heart fa-xl" />
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
      <div className={style.dorm_img} />
    </div>
  );
};

export default DetailTop;
