import style from './BannerSlideSmall3.module.css';
import React, { useState } from 'react';

function BannerSlideSmall3() {
  const items = [
    '/image/town01.jpg',
    '/image/town02.jpg',
    '/image/town03.jpg',
    '/image/town04.jpg',
    '/image/town05.jpg',
    '/image/town06.jpg',
    '/image/town07.jpg',
    '/image/town08.jpg',
    '/image/town09.jpg',
    '/image/town10.jpg',
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
        <div className={style.bannerSlideSmallDescription}>
          자연 속에서 느끼는 <br />
          <br /> 따스한 봄의 정취
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
            <div className={style.buttons}>
              <div
                className={style.prevButton}
                direction="prev"
                onClick={() => handleSwipe(-1)}
              >
                &lt;
              </div>
              <div
                className={style.nextButton}
                direction="next"
                onClick={() => handleSwipe(1)}
              >
                &gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSlideSmall3;
