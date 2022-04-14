import React, { useState } from 'react';
import style from './Info.module.css';

const Info = ({ detail }) => {
  return (
    <div className={style.container}>
      <div className={style.topDescription}>
        <h1>{detail.comment}</h1>
        <p className={style.dormName}>{detail.dormitoryName}</p>
      </div>
      <div className={style.middleLine} />
      <div className={style.mainDescription}>
        <p>{detail.main_description}</p>
      </div>
      <div className={style.bottomDescription}>
        <p>{detail.sub_description}</p>
      </div>
    </div>
  );
};

export default Info;
