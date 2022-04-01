import React from 'react';
import style from './WhereModal.module.css';

function WhereModal({ modalRef, closeModal }) {
  return (
    <div className={style.modalWrapper} ref={modalRef}>
      <div className={style.modal}>
        <div className={style.titleWrapper}>
          <div className={style.modalTitle}>
            <p>어디로떠날까요?</p>
            <button id="modalClose1" onClick={closeModal}>
              닫기
            </button>
          </div>
        </div>
        <input className={style.inputLocation} />
        <div className={style.location}>
          <div className={style.locationWrapper}>
            <p className={style.domestic}>국내</p>
            <ul className={style.cities}>
              <li className={style.city}>국내전체</li>
              <li className={style.city}>제주</li>
              <li className={style.city}>서울</li>
              <li className={style.city}>강원</li>
              <li className={style.city}>부산</li>
              <li className={style.city}>경기</li>
              <li className={style.city}>충청</li>
              <li className={style.city}>경상</li>
              <li className={style.city}>전라</li>
              <li className={style.city}>인천</li>
              <li className={style.city}>광주</li>
              <li className={style.city}>대전</li>
              <li className={style.city}>대구</li>
              <li className={style.city}>울산</li>
            </ul>
          </div>
          <div className={style.locationWrapper}>
            <p className={style.domestic}>국내</p>
            <ul className={style.cities}>
              <li className={style.city}>국내전체</li>
              <li className={style.city}>제주</li>
              <li className={style.city}>서울</li>
              <li className={style.city}>강원</li>
              <li className={style.city}>부산</li>
              <li className={style.city}>경기</li>
              <li className={style.city}>충청</li>
              <li className={style.city}>경상</li>
              <li className={style.city}>전라</li>
              <li className={style.city}>인천</li>
              <li className={style.city}>광주</li>
              <li className={style.city}>대전</li>
              <li className={style.city}>대구</li>
              <li className={style.city}>울산</li>
            </ul>
          </div>
          <div className={style.space} />
        </div>
      </div>
    </div>
  );
}

export default WhereModal;
