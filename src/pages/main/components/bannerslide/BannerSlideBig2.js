import style from './BannerSlideBig2.module.css';
import React, { useState } from 'react';

function BannerSlideBig2() {
  const items = [
    '/image/travel01.jpg',
    '/image/travel02.jpg',
    '/image/travel03.jpg',
    '/image/travel04.jpg',
  ];
  const itemSize = items.length;
  const transitionTime = 400;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const remain = 3; // 슬라이드가 끝나기 전 남아있는 슬라이드 개수
  const [currentIndex, setCurrentIndex] = useState(remain);
  const [slideTransition, setTransition] = useState(transitionStyle);

  let slides = setSlides();

  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    let index = 0;
    while (index < remain) {
      addedLast.push(items[remain]);
      addedFront.unshift(items[remain]);
      index++;
    }
    return [...addedFront, ...items, ...addedLast];
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
                  <img
                    className={style.BannerSlideBig2}
                    key={null}
                    src={items[itemIndex]}
                    alt={`banner${itemIndex}`}
                  />
                );
              })}
            </div>
            <div className={style.ButtonBackground} />
            <div className={style.pageCurrentNumber}>01</div>
            <div className={style.slash}>&#47;</div>
            <div className={style.pageTotalNumber}>10</div>
            <button
              className={style.PrevButton}
              direction="prev"
              onClick={() => handleSwipe(-1)}
            >
              &lt;
            </button>
            <div className={style.verticalLine}>&#124;</div>
            <button
              className={style.NextButton}
              direction="next"
              onClick={() => handleSwipe(1)}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSlideBig2;
