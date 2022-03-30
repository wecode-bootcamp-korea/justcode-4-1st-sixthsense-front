import React from 'react';
import footer from './Footer.module.scss';

function Footer() {
  return (
    <div className={footer.footer}>
      <div className={footer.logo}>
        s t a y <br />
        forest
      </div>
      <div className={footer.test}>
        상호 : ㈜스테이포레스트대표자 : 이상묵 서울특별시 종로구 자하문로9길 24,
        2층(통인동)TEL: 1670-4123help@stayfolio.com 사업자등록번호:
        676-87-00055통신판매업신고 : 제2015-서울종로-0499호[사업자정보확인]
        관광사업자등록 : 일반여행업 2018-000049호(종로구청)
      </div>
      <div>asdf</div>
    </div>
  );
}

export default Footer;
