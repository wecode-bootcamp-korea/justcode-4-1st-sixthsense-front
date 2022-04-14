import React, { useState, useEffect, useRef } from 'react';
import RoomImg from './roomImg/RoomImg';
import style from './Rooms.module.css';
import { IoCaretBackCircle, IoCaretForwardCircle } from 'react-icons/io5';

const Rooms = () => {
  const slideRef = useRef();
  const [slide, setSlide] = useState([
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:8000/rooms/images', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => {
        setSlide(result.data.splice(0, 3));
      });
  }, []);

  const [currentRoom, setCurrentRoom] = useState(0);
  const state = (100 / slide.length) * currentRoom;

  const next = () => {
    setCurrentRoom(() =>
      currentRoom === slide.length - 1 ? currentRoom : currentRoom + 1
    );
  };

  const prev = () => {
    setCurrentRoom(() => (currentRoom === 0 ? currentRoom : currentRoom - 1));
  };

  useEffect(() => {
    slideRef.current.style.transform = `translate(-${state}%)`;
    slideRef.current.style.transition = '.5s';
  }, [state]);
  return (
    <div className={style.container}>
      <div className={style.gray_box}>
        <div className={style.info}>
          <h1 className={style.title}>ROOMS</h1>
          <div className={style.border_line} />
          <h4 className={style.description}>내려놓는 시간 내려 놓는 마음</h4>
          <div className={style.buttons}>
            <div className={style.button}>
              <IoCaretBackCircle size="60" onClick={prev} />
            </div>
            <div className={style.button}>
              <IoCaretForwardCircle size="60" onClick={next} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.white_box}>
        <div className={style.hiddenCard} ref={slideRef}>
          {slide.map((el, idx) => {
            return (
              <RoomImg
                className={style.cards}
                url={el.imageUrl}
                id={el.id}
                key={el.id}
                currentRoom={currentRoom}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
