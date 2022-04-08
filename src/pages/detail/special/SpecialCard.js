import React from 'react';
import style from './SpecialCard.module.css';
const SpecialCard = ({ title, des }) => {
  return (
    <div className={style.card}>
      <div className={style.contents}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.description}>{des}</p>
      </div>
    </div>
  );
};

export default SpecialCard;
