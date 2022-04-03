import { useState } from 'react';
import { useEffect } from 'react';
import style from './SubLayoutFirst.module.css';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function SubLayoutFirst({ content, smallContent, setPeople }) {
  const [count, setCount] = useState(0);

  const persen = {};

  const minusHandler = () => {
    count > 0 && setCount(count - 1);
  };

  const plusHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    persen[`${content}`] = count;
    setPeople(persen);
  }, [count]);

  return (
    <div
      className={style.wap}
      style={{ paddingTop: 0, paddingBottom: 0, marginRight: 0 }}
    >
      <div className={style.title}>
        <div>{content}</div>
        <div>{smallContent}</div>
      </div>
      <div className={style.buttonWap} style={{ padding: 0, marginRight: 0 }}>
        <button className={style.plus} onClick={minusHandler}>
          <AiOutlineMinus />
        </button>
        <input type="number" min="0" value={count} readOnly />
        <span>명</span>
        <button className={style.minus} onClick={plusHandler}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default SubLayoutFirst;
