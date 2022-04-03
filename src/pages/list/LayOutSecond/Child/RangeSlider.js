import { useState } from 'react';
import { BsRecordCircleFill } from 'react-icons/bs';

import style from './RangeSlider.module.css';

function RangeSlider() {
  const [inputLeft, setInputLeft] = useState(0);
  const [inputRight, setInputRight] = useState(0);
  const [left, setLeft] = useState('0%');
  const [right, setRight] = useState('50%');

  const leftStyle = {
    padding: 3,
    marginRight: 0,
    position: 'absolute',
    left: left,
  };

  const rightStyle = {
    padding: 3,
    marginRight: 0,
    position: 'absolute',
    right: right,
  };

  const rangeStyle = {
    padding: 3,
    marginRight: 0,
    position: 'absolute',
    right: right,
    left: left,
  };

  function setLeftValue(e) {
    const target = e.target;
    const { value, min, max } = target;
    setInputLeft(value);

    if (inputRight - value < 10) {
      setInputLeft(inputRight - 10);
      return;
    }

    const percent = ((+value - +min) / (+max - +min)) * 100;
    setLeft(`${percent}%`);
  }

  function setRightValue(e) {
    const target = e.target;
    const { value, min, max } = target;
    setInputRight(value);

    if (+value - inputLeft < 10) {
      setInputRight(+inputLeft + 10);
      return;
    }

    const percent = ((+value - +min) / (+max - +min)) * 100;

    setRight(`${100 - percent}%`);
  }

  return (
    <section className={style.box}>
      <div className={style.slider} style={{ marginRight: 0 }}>
        <input
          type="range"
          className={style.inputLeft}
          min="1"
          max="100"
          value={inputLeft}
          onInput={e => {
            setLeftValue(e);
          }}
        />
        <input
          type="range"
          className={style.inputRight}
          min="1"
          max="100"
          vlaue={inputRight}
          onInput={e => {
            setRightValue(e);
          }}
        />
        <div className={style.track} style={{ padding: 3, marginRight: 0 }}>
          <div className={style.range} style={rangeStyle} />
          <BsRecordCircleFill className={style.thumbLeft} style={leftStyle} />
          <BsRecordCircleFill className={style.thumbRight} style={rightStyle} />
        </div>
      </div>
    </section>
  );
}

export default RangeSlider;
