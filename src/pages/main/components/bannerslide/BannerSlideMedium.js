import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './BannerSlideMedium.module.css';

function BannerSliderMedium() {
  const [current, setCurrent] = useState(0);
  const slide = [
    {
      id: 1,
      url: 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg',
    },
    {
      id: 2,
      url: 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265__480.jpg',
    },
    {
      id: 3,
      url: 'https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060__340.jpg',
    },

    {
      id: 4,
      url: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092__340.jpg',
    },
  ];

  const next = () => {
    setCurrent(() => (current === slide.length - 1 ? 0 : current + 1));
  };
  const prev = () => {
    setCurrent(() => (current === 0 ? slide.length - 1 : current - 1));
  };

  const order = current + 1;

  return (
    <div className={style.container}>
      <div className={style.slideWrapper}>
        {slide.map((el, idx) => {
          return (
            <div
              className={`${
                idx === current ? style.slideActive : style.slideNonActive
              } ${style.wrapper}`}
              key={el.id}
            >
              {idx === current && (
                <div className={style.contentsSection}>
                  <div className={style.textSection}>
                    <p className={style.slideMainDesc}>
                      숙소메인설명
                      <br />
                      변수지정{el.id}
                    </p>
                    <p className={style.slideSubDesc}>숙소 1줄 설명{el.id}</p>
                    <div className={style.infoSection}>
                      <h3 className={style.slideTitle}>숙소 이름 {el.id}</h3>
                      <p className={style.slidePlace}>
                        도시{el.id} / 시구군{el.id}· 숙소유형{el.id}
                      </p>
                      <p className={style.slidePeople}>인원{el.id}</p>
                      <p className={style.slidePrice}>가격{el.id}</p>
                    </div>
                  </div>
                  <Link to="/detail">
                    <img
                      className={style.slideImage}
                      src={el.url}
                      alt={el.id}
                    />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
        <div className={style.promotion}>PROMOTION</div>
        <div className={style.btns}>
          <p onClick={prev}>&lt;</p>
          <p onClick={next}>&gt;</p>
        </div>
        <div className={style.order}>
          {order}
          <span className={style.total}> / 4</span>
        </div>
      </div>
    </div>
  );
}

export default BannerSliderMedium;
