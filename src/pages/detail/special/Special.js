import React, { useState } from 'react';
import style from './Special.module.css';
import SpecialCard from './SpecialCard';

const Special = ({ detail }) => {
  const title = detail.roomSpecialTitle;
  const des = detail.roomSpecialDes;

  return (
    <div className={style.container}>
      <div className={style.special}>
        <h1>SPECIAL</h1>
      </div>
      <div className={style.cardWrapper}>
        <SpecialCard title={title[0]} des={des[0]} />
        <SpecialCard title={title[1]} des={des[1]} />
        <SpecialCard title={title[2]} des={des[2]} />
      </div>
    </div>
  );
};

export default Special;
