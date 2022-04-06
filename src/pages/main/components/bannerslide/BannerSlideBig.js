import style from './BannerSlideBig.module.css';
import React, { useState, useEffect } from 'react';

function BannerSlideBig(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('/dormitories/images', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        items.push(Object.entries(result)[0][1].map(data => data.imageUrl));
        setItems(items[0]);
      });
  }, []);

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
            props.css.cssBig === 1 ? style.sliderList : style.sliderList2
          }
        >
          <div
            className={props.css.cssBig === 1 ? style.wrapper : style.wrapper2}
          >
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
                    className={style.BannerSlideBig}
                    key={null}
                    src={items[itemIndex]}
                    alt={`banner${itemIndex}`}
                  />
                );
              })}
            </div>
            <div
              className={
                props.css.cssBig === 1
                  ? style.pageAndArrows
                  : style.pageAndArrows2
              }
            >
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
    </div>
  );
}

export default BannerSlideBig;
