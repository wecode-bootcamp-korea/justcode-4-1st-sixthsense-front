import React from 'react';
import css from './Modal.module.css';

function Modal({ modalRef, closeModal }) {
  return (
    <div className={css.modalWrapper} ref={modalRef}>
      <div className={css.modal}>
        <p>모달내용</p>
        <button onClick={closeModal}>닫기</button>
      </div>
    </div>
  );
}

export default Modal;
