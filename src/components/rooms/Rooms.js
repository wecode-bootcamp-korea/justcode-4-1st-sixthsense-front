import React from 'react';
import style from './Rooms.module.sstyle';
const Rooms = () => {
  return (
    <div className={style.container}>
      <div className={style.gray_box}>
        <div className={style.info}>
          <h1 className={style.title}>ROOMS</h1>
          <div className={style.border_line} />
          <h4 className={style.description}>내려놓는 시간 내려 놓는 마음</h4>
        </div>
      </div>
      <div className={style.white_box} />
    </div>
  );
};

export default Rooms;
