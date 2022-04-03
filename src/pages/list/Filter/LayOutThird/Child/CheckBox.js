import style from './CheckBox.module.css';

const arr = [];

function CheckBox({ setNames, content, checked, total }) {
  function check(e) {
    checked(e.target.checked);

    if (content !== '전체' && e.target.checked) {
      arr.push(content);
      setNames(arr);
    }

    if (content !== '전체' && !e.target.checked) {
      arr.splice(arr.indexOf(content), 1);
      setNames(arr);
    }
  }
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
