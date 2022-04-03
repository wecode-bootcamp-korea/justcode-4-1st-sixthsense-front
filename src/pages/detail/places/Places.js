import React from 'react';
import style from './Places.module.css';
import { FaCommentAlt } from 'react-icons/fa';

const Places = () => {
  return (
    <div className={style.placesWrapper}>
      <ul className={style.placesList}>
        <li className={style.place}>
          <div className={style.icon}>
            <FaCommentAlt size="30" />
            <span className={style.number}>1</span>
          </div>
          <div className={style.descWrapper}>
            <div className={style.title}>
              나무 식탁 <span className={style.category}>food</span>
            </div>
            <div className={style.description}>
              제주의 해산물로 만든 요리를 즐길 수 있는 일식당
            </div>
          </div>
        </li>
        <li className={style.place}>
          <div className={style.icon}>
            <FaCommentAlt size="30" />
            <span className={style.number}>2</span>
          </div>
          <div className={style.descWrapper}>
            <div className={style.title}>
              나무 식탁 <span className={style.category}>food</span>
            </div>
            <div className={style.description}>
              제주의 해산물로 만든 요리를 즐길 수 있는 일식당
            </div>
          </div>
        </li>
        <li className={style.place}>
          <div className={style.icon}>
            <FaCommentAlt size="30" />
            <span className={style.number}>3</span>
          </div>
          <div className={style.descWrapper}>
            <div className={style.title}>
              나무 식탁 <span className={style.category}>food</span>
            </div>
            <div className={style.description}>
              제주의 해산물로 만든 요리를 즐길 수 있는 일식당
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Places;
