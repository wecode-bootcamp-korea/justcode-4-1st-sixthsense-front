import React from 'react';
import style from './PrivateAgree.module.css';

function PrivateAgree4({ isOpen4 }) {
  return (
    <span className={isOpen4 ? style.showmenu : style.hidemenu}>
      평생회원제에 동의할 경우 1년 이상 서비스를 이용하지 않아도
      <br />
      휴면 처리되지 않습니다.
    </span>
  );
}

export default PrivateAgree4;
