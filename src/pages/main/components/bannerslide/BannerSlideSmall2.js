import style from './BannerSlideSmall2.module.css';
import React, { useState } from 'react';

function BannerSlideSmall2() {
  const items = [
    '/image/house01.jpg',
    '/image/house02.jpg',
    '/image/house03.jpg',
    '/image/house04.jpg',
  ];
  const itemSize = items.length;
  const transitionTime = 400;
  const transitionStyle = `transform ${transitionTime}ms ease 0.15s`;
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
        <div className={style.eventAndArrows}>
          <span className={style.eventDescription}>EVENT</span>
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
                  <img
                    className={style.bannerSlideSmall}
                    key={null}
                    src={items[itemIndex]}
                    alt={`banner${itemIndex}`}
                  />
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
