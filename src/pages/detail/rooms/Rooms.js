import React from 'react';
import RoomImg from './roomImg/RoomImg';
import style from './Rooms.module.css';
import { IoCaretBackCircle, IoCaretForwardCircle } from 'react-icons/io5';

const Rooms = () => {
  return (
    <div className={style.container}>
      <div className={style.gray_box}>
        <div className={style.info}>
          <h1 className={style.title}>ROOMS</h1>
          <div className={style.border_line} />
          <h4 className={style.description}>내려놓는 시간 내려 놓는 마음</h4>
          <div className={style.buttons}>
            <div className={style.button}>
              <IoCaretBackCircle size="60" />
            </div>
            <div className={style.button}>
              <IoCaretForwardCircle size="60" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.whiteBox}>
        <RoomImg />
        <RoomImg />
        <RoomImg />
      </div>
    </div>
  );
};

export default Rooms;
