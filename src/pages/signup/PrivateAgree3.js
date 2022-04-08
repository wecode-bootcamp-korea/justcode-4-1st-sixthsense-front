import React from 'react';
import style from './PrivateAgree.module.css';

function PrivateAgree3({ isOpen3 }) {
  return (
    <span className={isOpen3 ? style.showmenu : style.hidemenu}>
      정보통신망 이용촉진 및 정보보호 등에 관한 법률에 따라 만 14세 미만 아동의
      개인정보 수집 시 법정대리인의 동의를 받도록 규정하고 있습니다.
      <br />만 14세 미만 아동이 법정대리인 동의 없이 회원가입을 할 경우 회원탈퇴
      또는 서비스 이용에 제한이 있을 수 있습니다.
    </span>
  );
}

export default PrivateAgree3;
