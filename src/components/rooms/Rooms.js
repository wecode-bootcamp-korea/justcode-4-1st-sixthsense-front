import React from 'react';
import css from './Rooms.module.scss';
const Rooms = () => {
  return (
    <div className={css.container}>
      <div className={css.gray_box}>
        <div className={css.info}>
          <h1 className={css.title}>ROOMS</h1>
          <div className={css.border_line} />
          <h4 className={css.description}>내려놓는 시간 내려 놓는 마음</h4>
        </div>
      </div>
      <div className={css.white_box} />
    </div>
  );
};

export default Rooms;
