import React, { useState } from 'react';
import style from './WhenModal.module.css';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import TwoCalendars from '../calendar/TwoCalendars';
import moment from 'moment';

function WhenModal({ modalRef, closeModal }) {
  const [stateMoment, setStateMoment] = useState(moment());
  const prev = () => {
    setStateMoment(stateMoment.clone().subtract(1, 'month'));
  };
  const next = () => {
    setStateMoment(stateMoment.clone().add(1, 'month'));
  };

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [tempoCheckOut, setTempoCheckOut] = useState(null);

  const checked = checkedDay => {
    if (!checkIn) {
      setCheckIn(checkedDay);
    } else if (checkIn && !checkOut) {
      if (moment(checkIn).isAfter(checkedDay)) {
        setCheckIn(checkedDay);
      } else {
        setCheckOut(checkedDay);
      }
    } else {
      if (moment(checkIn).isAfter(checkedDay)) {
        setCheckIn(checkedDay);
      } else if (
        !moment(checkIn).isAfter(checkedDay) &&
        moment(checkOut).isAfter(checkedDay)
      ) {
        setCheckOut(checkedDay);
      } else {
        setCheckOut(checkedDay);
      }
    }
  };

  const reset = () => {
    setCheckIn(null);
    setCheckOut(null);
  };

  const onHover = day => {
    if (checkIn && !checkOut && !moment(checkIn).isAfter(day)) {
      setTempoCheckOut(day);
    }
  };

  const onHoverReset = () => {
    setTempoCheckOut(null);
  };

  return (
    <div className={style.modalWrapper} ref={modalRef}>
      <div className={style.modal}>
        <div className={style.titleWrapper}>
          <div className={style.modalTitle}>
            <p className={style.whenText}>언제떠날까요?</p>
            <AiOutlineClose
              className={style.closeModal}
              size="50"
              id="modalClose1"
              onClick={() => {
                closeModal();
                reset();
              }}
            />
          </div>
        </div>

        <div className={style.calendarWrapper}>
          <TwoCalendars
            stateMoment={stateMoment}
            checkIn={checkIn}
            checkOut={checkOut}
            onCheck={checked}
            tempoCheckOut={tempoCheckOut}
            onHover={onHover}
            onHoverReset={onHoverReset}
          />
          <AiOutlineLeft size="22" className={style.prevBtn} onClick={prev} />
          <AiOutlineRight size="22" className={style.nextBtn} onClick={next} />
        </div>
        <div className={style.btnWrapper}>
          <button className={style.searchBtn}>search &nbsp; &nbsp; →</button>
        </div>
      </div>
    </div>
  );
}

export default WhenModal;
