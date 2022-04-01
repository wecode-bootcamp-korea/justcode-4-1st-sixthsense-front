import style from './SmallModalFirstLayout.module.css';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function SmallModalFirstLayout({ content, smallContent }) {
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
        <button className={style.plus}>
          <AiOutlineMinus />
        </button>
        <input type="number" />
        <span>명</span>
        <button className={style.minus}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default SmallModalFirstLayout;
