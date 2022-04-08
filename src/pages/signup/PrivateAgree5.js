import React from 'react';
import style from './PrivateAgree.module.css';

function PrivateAgree5({ isOpen5 }) {
  return (
    <span className={isOpen5 ? style.showmenu : style.hidemenu}>
      스테이폴리오에서 제공하는 이벤트 및 혜택 등 다양한 정보를 문자메시지,
      이메일 등으로 볼 수 있습니다.
      <br />
      마케팅 정보 수신 및 활용 동의 여부와 관계없이 회원가입 및 서비스를
      이용하실 수 있습니다.
      <br />
      또한 서비스의 중요 안내사항 및 예약에 대한 정보는 마케팅 정보 수신 동의
      여부와 관계없이 발송됩니다.
      <br />
      <br />
      1. 수집·이용목적
      <br />- 마케팅 및 분석
      <br />- 프로모션
      <br />
      <br />
      2. 수집·이용항목
      <br />- 회원 정보(스테이폴리오 아이디, 이름, 휴대폰 번호, 이메일,
      가입일시)
      <br />- 예약 서비스 정보(이용 숙소, 인원 정보, 이용 횟수)
      <br />- 수집∙이용항목은 마케팅 및 분석, 프로모션의 목적에 따라 달라질 수
      있음
      <br />
      <br />
      3. 보유 및 이용기간
      <br />- 정보 삭제 또는 이용 정지 요청 및 회원탈퇴 시 즉시 삭제
      <br />
      <br />
      4. 마케팅 활용 정보 수집 방법
      <br />- 희망자에 한해 직접 입력
    </span>
  );
}

export default PrivateAgree5;
