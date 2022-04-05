import style from './BannerSlideSmall1.module.css';
import React, { useState } from 'react';

function BannerSlideSmall1(props) {
  const items = [
    '/image/room01.jpg',
    '/image/room02.jpg',
    '/image/room03.jpg',
    '/image/room04.jpg',
    '/image/room05.jpg',
    '/image/room06.jpg',
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
        <div
          className={
            props.description.css === 1
              ? style.bannerSlideSmallDescription
              : style.bannerSlideSmallDescription2
          }
        >
          {props.description.text}
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
                  <div key={null} className={style.slide}>
                    <img
                      className={style.bannerSlideSmall}
                      key={null}
                      src={items[itemIndex]}
                      alt={`banner${itemIndex}`}
                    />
                    <section className={style.description}>
                      <div className={style.name}>신돌집</div>
                      <div className={style.location}>
                        제주/서귀포시
                        <span className={style.dot}>&nbsp;&#183;&nbsp;</span>
                        <span className={style.price}>
                          &#92;550,000 ~ &#92;650,000
                        </span>
                      </div>
                      <div className={style.readMore}>read more</div>
                    </section>
                  </div>
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

export default BannerSlideSmall1;
