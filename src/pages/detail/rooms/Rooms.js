import React, { useState } from 'react';
import RoomImg from './roomImg/RoomImg';
import style from './Rooms.module.css';
import { IoCaretBackCircle, IoCaretForwardCircle } from 'react-icons/io5';

const Rooms = () => {
  const slide = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    },
  ];

  const [currentRoom, setCurrentRoom] = useState(0);

  const next = () => {
    setCurrentRoom(() =>
      currentRoom === slide.length - 1 ? slide.length - 1 : currentRoom + 1
    );
  };

  const prev = () => {
    setCurrentRoom(() => (currentRoom === 0 ? 0 : currentRoom - 1));
  };

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
      <div className={style.whiteCard} />
      <div className={style.hiddenCard}>
        {slide.map((el, idx) => {
          return (
            <RoomImg
              className={style.cards}
              url={el.url}
              id={el.id}
              key={el.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
