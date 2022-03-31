import React from 'react';
import style from './WhereModal.module.css';

function WhereModal({ modalRef, closeModal }) {
  return (
    <div className={style.modalWrapper} ref={modalRef}>
      <div>
        <div className={style.modal}>
          <div className={style.titleWrapper}>
            <div className={style.modalTitle}>
              <p>어디로떠날까요?</p>
              <button id="modalClose1" onClick={closeModal}>
                닫기
              </button>
            </div>
          </div>
          <input />
        </div>
      </div>
    </div>
  );
}

export default WhereModal;
