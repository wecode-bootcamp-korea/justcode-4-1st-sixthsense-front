import React from 'react';
import style from './RoomImg.module.css';

const RoomImg = ({ url, id }) => {
  return (
    <div className={style.card}>
      <img src={url} alt={id} className={style.roomImage} />
      <div className={style.infoLayer}>
        <div className={style.roomCondition}>
          <span className={style.roomName}>STANDARD ROOM</span>
          <span className={style.capacity}>3명</span>
        </div>
        <div className={style.priceInfo}>
          <span className={style.price}>$20,000</span>
          <span className={style.button}>BOOK</span>
        </div>
      </div>
    </div>
  );
};

export default RoomImg;
