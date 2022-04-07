import { useEffect } from 'react';
import style from './CheckBox.module.css';

const arr = [];

function CheckBox({ setNames, content, checked, total }) {
  function check(e) {
    checked(e.target.checked);
    if (!arr.includes(content) && content !== '전체' && e.target.checked) {
      arr.push(content);
      setNames(arr);
    }

    if (content !== '전체' && !e.target.checked) {
      arr.splice(arr.indexOf(content), 1);
      setNames(arr);
    }
  }

  useEffect(() => {
    if (!total && arr.length !== 0) {
      arr.length = 0;
    }
  }, [total]);

  return total ? (
    <section className={style.checkBoxWap}>
      <input
        type="checkbox"
        id="check"
        checked={true}
        onChange={e => check(e)}
      />
      <label htmlFor="check">
        <div className={style.content}>{content}</div>
        <span>{}</span>
      </label>
    </section>
  ) : (
    <section className={style.checkBoxWap}>
      <input
        type="checkbox"
        id={`checkbox${content}`}
        onChange={e => {
          check(e);
        }}
      />
      <label htmlFor={`checkbox${content}`}>
        <div className={style.content}>{content}</div>
        <span>{}</span>
      </label>
    </section>
  );
}

export default CheckBox;
