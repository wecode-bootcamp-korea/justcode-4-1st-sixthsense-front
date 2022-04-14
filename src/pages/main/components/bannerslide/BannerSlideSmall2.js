import React, { useState, useEffect } from 'react';
import BASE_URL from '../../../../config';
import style from './BannerSlideSmall2.module.css';

function BannerSlideSmall2() {
  const transitionTime = 400;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const remain = 3; // 슬라이드가 끝나기 전 남아있는 슬라이드 개수
  const [currentIndex, setCurrentIndex] = useState(remain);
  const [slideTransition, setTransition] = useState(transitionStyle);
  const [items, setItems] = useState([
    {
      id: 1,
      name: '냠냠',
      imageUrl: ['/image/room01.jpg', '/image/room01.jpg', '/image/room01.jpg'],
      price: [1, 2],
    },
    {
      id: 1,
      name: '냠냠',
      imageUrl: ['/image/room01.jpg', '/image/room01.jpg', '/image/room01.jpg'],
      price: [1, 2],
    },
    {
      id: 1,
      name: '냠냠',
      imageUrl: ['/image/room01.jpg', '/image/room01.jpg', '/image/room01.jpg'],
      price: [1, 2],
    },
    {
      id: 1,
      name: '냠냠',
      imageUrl: ['/image/room01.jpg', '/image/room01.jpg', '/image/room01.jpg'],
      price: [1, 2],
    },
    {
      id: 1,
      name: '냠냠',
      imageUrl: ['/image/room01.jpg', '/image/room01.jpg', '/image/room01.jpg'],
      price: [1, 2],
    },
    {
      id: 1,
      name: '냠냠',
      imageUrl: ['/image/room01.jpg', '/image/room01.jpg', '/image/room01.jpg'],
      price: [1, 2],
    },
  ]);

  const itemSize = items.length;
  let slides = setSlides();

  useEffect(() => {
    fetch(`${BASE_URL}/dormitories`, { method: 'GET' })
      .then(res => res.json())
      .then(result => setItems(result.data));
  }, []);

  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    let index = 0;
    while (index < remain) {
      addedLast.push(items[remain]);
      addedFront.unshift(items[remain]);
      index++;
    }
    const temptArr = [...addedFront, ...items, ...addedLast];
    return replaceIdx(temptArr);
  }

  function replaceIdx(arr) {
    arr.splice(0, 3, arr[6], arr[7], arr[8]);
    arr.splice(9, 3, arr[3], arr[4], arr[5]);
    return arr;
  }

  function replaceSlide(index) {
    setTimeout(() => {
      setTransition('');
      setCurrentIndex(index);
    }, transitionTime);
  }

  function handleSlide(index) {
    setCurrentIndex(index);
    if (index - remain < 0) {
      index += itemSize;
      replaceSlide(index);
    } else if (index - remain >= itemSize) {
      index -= itemSize;
      replaceSlide(index);
    }
    setTransition(transitionStyle);
  }

  function handleSwipe(direction) {
    handleSlide(currentIndex + direction);
  }

  function getItemIndex(index) {
    index -= remain;
    if (index < 0) {
      index += itemSize;
    } else if (index >= itemSize) {
      index -= itemSize;
    }
    return index;
  }

  return (
    <div className={style.sliderArea}>
      <div className={style.slider}>
        <div className={style.eventAndArrows}>
          <span>EVENT</span>
          <span className={style.buttons}>
            <span
              className={style.prevButton}
              direction="prev"
              onClick={() => handleSwipe(-1)}
            >
              &lt;
            </span>
            <span
              className={style.nextButton}
              direction="next"
              onClick={() => handleSwipe(1)}
            >
              &gt;
            </span>
          </span>
        </div>
        <div className={style.sliderList}>
          <div className={style.wrapper}>
            <div
              className={style.sliderTrack}
              style={{
                transform: `translateX(calc(${
                  (-100 / slides.length) * currentIndex
                }%))`,
                transition: slideTransition,
              }}
            >
              {slides.map((slide, slideIndex) => {
                const itemIndex = getItemIndex(slideIndex);
                return (
                  <div
                    key={`${slide.name}+${slideIndex}small2`}
                    className={style.slide}
                  >
                    <div
                      style={{
                        width: 390,
                        height: 280.5,
                        marginRight: 60,
                      }}
                    >
                      <img
                        className={style.bannerSlideSmall}
                        key={`${slide.id}+${slideIndex}small2`}
                        src={slide.imageUrl[1]}
                        alt={`banner${itemIndex}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <section className={style.description}>
                      <div className={style.name}>{slide.name}</div>
                      <div className={style.location}>
                        {' '}
                        {`${slide.city}/${slide.district}`}
                      </div>
                      <div className={style.secondDescription}>
                        6.8일자 1박2인
                        <br />
                        숙박권 이벤트
                      </div>
                      <div className={style.readMore}>자세히 보기</div>
                    </section>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSlideSmall2;
