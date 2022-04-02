import React from 'react';
import style from './RoomImg.module.css';

const RoomImg = () => {
  return (
    <div className={style.card}>
      <img
        src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        alt="room image"
        className={style.roomImage}
      />
      <div className={style.infoLayer}>
        <div className={style.roomCondition}>
          <span className={style.roomName}>THE LAKE</span>
          <span className={style.roomType}>오픈형</span>
          <span className={style.capacity}>기준 2명 (최대 3명)</span>
        </div>
        <div className={style.priceInfo}>
          <span className={style.price}>$180,000~</span>
          <span className={style.button}>BOOK</span>
        </div>
      </div>
    </div>
  );
};

export default RoomImg;
