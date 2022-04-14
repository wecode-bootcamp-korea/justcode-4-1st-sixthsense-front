import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './BannerSlideMedium.module.css';

function BannerSliderMedium() {
  const [current, setCurrent] = useState(0);
  const [slide, setSlide] = useState([
    {
      id: 1,
      category: '펜션',
      comment: '안녕안녕안녕',
      imageUrl: [
        'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg',
        'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg',
      ],
      headCount: [1, 2],
      price: [1, 2],
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:8000/dormitories', { method: 'GET' })
      .then(res => res.json())
      .then(result => {
        setSlide(result.data);
      });
  }, []);

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
                  <div
                    className={style.textSection}
                    style={{ paddingRight: 50 }}
                  >
                    <p className={style.slideMainDesc}>{el.comment}</p>
                    <p className={style.slideSubDesc}>
                      위코드 커뮤니티 가입 인증시 10% 할인
                    </p>
                    <div className={style.infoSection}>
                      <h3 className={style.slideTitle}>{el.name}</h3>
                      <p className={style.slidePlace}>
                        {el.city} / {el.district} · {el.category}
                      </p>
                      <p className={style.slidePeople}>
                        기준 인원 {el.headCount[0]}명
                      </p>
                      <p className={style.slidePrice}>
                        최저가{' '}
                        {el.price[0].toLocaleString('ko-KR', {
                          style: 'currency',
                          currency: 'KRW',
                          currencyDisplay: 'symbol',
                        })}
                      </p>
                    </div>
                  </div>
                  <Link to="/detail">
                    <img
                      className={style.slideImage}
                      src={el.imageUrl[1]}
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
          <span className={style.total}> / {slide.length}</span>
        </div>
      </div>
    </div>
  );
}

export default BannerSliderMedium;
