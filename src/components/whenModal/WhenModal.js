import React from 'react';
import style from './WhenModal.module.css';

function WhenModal({ modalRef, closeModal }) {
  return (
    <div className={style.modalWrapper} ref={modalRef}>
      <div className={style.modal}>
        <div>
          <p>언제떠날까요?</p>
          <button id="modalClose2" onClick={closeModal}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhenModal;
