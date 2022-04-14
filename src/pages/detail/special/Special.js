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
        {title.map((title, idx) => {
          return <SpecialCard title={title} des={des[idx]} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Special;
