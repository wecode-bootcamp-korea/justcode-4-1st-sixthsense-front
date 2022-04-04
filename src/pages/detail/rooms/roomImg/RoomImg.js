import React from 'react';
import style from './RoomImg.module.css';

const RoomImg = ({ url, id }) => {
  return (
    <div className={style.card}>
      <img src={url} alt={id} className={style.roomImage} />
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
