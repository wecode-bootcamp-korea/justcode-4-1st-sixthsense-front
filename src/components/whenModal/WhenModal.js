import React, { useState } from 'react';
import style from './WhenModal.module.css';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Calendar from '../calendar/Calendar';
import BlackButton from '../BlackButton/BlackButton';
import moment from 'moment';

function WhenModal({ modalRef, closeModal }) {
  const [stateMoment, setStateMoment] = useState(moment());
  const prev = () => {
    setStateMoment(stateMoment.clone().subtract(1, 'month'));
  };
  const next = () => {
    setStateMoment(stateMoment.clone().add(1, 'month'));
  };

  return (
    <div className={style.modalWrapper} ref={modalRef}>
      <div className={style.modal}>
        <div className={style.titleWrapper}>
          <div className={style.modalTitle}>
            <p className={style.whereText}>언제떠날까요?</p>
            <AiOutlineClose
              className={style.closeModal}
              size="50"
              id="modalClose1"
              onClick={closeModal}
            />
          </div>
        </div>
        <div className={style.calendarWrapper}>
          <Calendar stateMoment={stateMoment} />
          <AiOutlineLeft size="22" className={style.prevBtn} onClick={prev} />
          <AiOutlineRight size="22" className={style.nextBtn} onClick={next} />
        </div>
      </div>
    </div>
  );
}

export default WhenModal;
