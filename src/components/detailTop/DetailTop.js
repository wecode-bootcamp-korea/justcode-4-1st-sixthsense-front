import React from 'react';
import styles from './DetailTop.module.scss';

const DetailTop = () => {
  return (
    <div className={styles.top}>
      {/* 숙소명 및 날짜 선택*/}
      <div className={styles.calendar}>
        <div className={styles.title_container}>
          <span className={styles.title}>어연스테이</span>
          <div className={styles.date}>
            <div className={styles.select_btn}>
              <span className={styles.select_date}>날짜를 선택해주세요.</span>
              <i class="fa-solid fa-chevron-down" />
            </div>
            <div className={styles.date_blank} />
          </div>
        </div>
      </div>
      {/* 숙소 사진 슬라이드 */}
      <div className={styles.dorm_img}>img slide</div>
    </div>
  );
};

export default DetailTop;
