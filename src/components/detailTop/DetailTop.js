import React from 'react';
import css from './DetailTop.module.scss';

const DetailTop = () => {
  return (
    <div className={css.top}>
      {/* 숙소명 및 날짜 선택*/}
      <div className={css.calendar}>
        <div className={css.title_container}>
          <span className={css.title}>어연스테이</span>
          <div className={css.date}>
            <div className={css.select_btn}>
              <span className={css.select_date}>날짜를 선택해주세요.</span>
              <i class="fa-solid fa-chevron-down" />
            </div>
            <div className={css.date_blank} />
          </div>
        </div>
      </div>
      {/* 숙소 사진 슬라이드 */}
      <div className={css.dorm_img}>img slide</div>
    </div>
  );
};

export default DetailTop;
