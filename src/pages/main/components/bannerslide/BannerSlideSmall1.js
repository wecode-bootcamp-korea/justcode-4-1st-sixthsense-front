import style from './BannerSlideSmall1.module.css';
import React, { useState, useEffect } from 'react';

function BannerSlideSmall1(props) {
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
    fetch('http://localhost:8000/dormitories', { method: 'GET' })
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
                  <div
                    key={`${slide.name}+${slideIndex}`}
                    className={style.slide}
                  >
                    <div
                      style={{
                        width: 390,
                        height: 280.5,
                        marginRight: 50,
                      }}
                    >
                      <img
                        className={style.bannerSlideSmall}
                        key={`${slide.id}+${slideIndex}`}
                        src={slide.imageUrl[2]}
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
                        {`${slide.city}/${slide.district}`}
                        <span className={style.dot}>&nbsp;&#183;&nbsp;</span>
                        <span className={style.price}>
                          {`${slide.price[0].toLocaleString('ko-KR', {
                            style: 'currency',
                            currency: 'KRW',
                            currencyDisplay: 'symbol',
                          })}~`}
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
