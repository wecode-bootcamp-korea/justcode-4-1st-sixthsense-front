import style from './CheckBox.module.css';

function CheckBox({ content, checked, onChecked }) {
  return (
    <section className={style.checkBoxWap}>
      <input
        type="checkbox"
        id={`checkbox${content}`}
        checked={checked}
        onChange={e => {
          onChecked();
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
