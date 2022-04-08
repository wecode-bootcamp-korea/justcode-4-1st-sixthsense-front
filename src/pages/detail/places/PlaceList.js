import React from 'react';
import { FaCommentAlt } from 'react-icons/fa';
import style from './PlaceList.module.css';

const PlaceList = ({ id, placeTitle, placeCategory, placeDescription }) => {
  return (
    <li className={style.place}>
      <div className={style.icon}>
        <FaCommentAlt size="30" />
        <span className={style.number}>{id}</span>
      </div>
      <div className={style.descWrapper}>
        <div className={style.title}>
          {placeTitle} <span className={style.category}>{placeCategory}</span>
        </div>
        <div className={style.description}>{placeDescription}</div>
      </div>
    </li>
  );
};

export default PlaceList;
