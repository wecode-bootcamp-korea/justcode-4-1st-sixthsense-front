import React from 'react';
import styles from './Rooms.module.scss';
const Rooms = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gray_box}>
        <div className={styles.info}>
          <h1 className={styles.title}>ROOMS</h1>
          <div className={styles.border_line} />
          <h4 className={styles.description}>내려놓는 시간 내려 놓는 마음</h4>
        </div>
      </div>
      <div className={styles.white_box} />
    </div>
  );
};

export default Rooms;
