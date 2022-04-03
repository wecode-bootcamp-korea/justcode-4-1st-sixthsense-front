import { IoMdClose } from 'react-icons/io';
import style from '../SmallModal/SmallModal.module.css';

function SmallModal({ title }) {
  return (
    <div className={style.SmallModal} style={{ marginRight: 0 }}>
      <div className={style.modalTop}>
        <span>{title}</span>
        <button
          className={style.xButton}
          onClick={e => {
            const parentStyleVisible =
              e.target.parentElement.parentElement.parentElement.parentElement
                .style.visibility;
            let judge = false;

            if (parentStyleVisible === 'visible') {
              judge = true;
            }
            e.target.parentElement.parentElement.parentElement.parentElement.style.visibility =
              judge && 'hidden';
          }}
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
}

export default SmallModal;
