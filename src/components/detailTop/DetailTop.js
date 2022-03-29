import React from 'react';
import styles from './DetailTop.module.scss';

const DetailTop = () => {
  return (
    <div className={styles.top}>
      {/* 숙소명 */}
      <span className={styles.title}>숙소명</span>

      {/* 숙소 사진 슬라이드 */}
      <div className={styles.dormImg}>img slide</div>

      {/* 숙소 이름 + 날짜 선택 */}
      <div className={styles.calendar}>
        <span className={styles.middleTitle}>숙소명</span>
        <div className={styles.day}>
          <div className={styles.selectBtn}>날짜를 선택해주세요.</div>
        </div>
      </div>
    </div>
  );
};

export default DetailTop;
