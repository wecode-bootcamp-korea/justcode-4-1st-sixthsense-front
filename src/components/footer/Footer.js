import React from 'react';
import footer from './Footer.module.scss';

function Footer() {
  return (
    <div className={footer.footer}>
      <div className={footer.footerLeft}>
        <div className={footer.logo}>
          S T A Y <br />
          FOREST
        </div>
        <div className={footer.footerDetail}>
          상호 : ㈜스테이포레스트 &nbsp;&nbsp; 대표자 : 홍길동
          <br />
          서울특별시 서울구 서울역로1길 12, 1층(서울동) &nbsp;&nbsp; TEL:
          1234-5678 &nbsp;&nbsp; help@stayforest.com
          <br />
          사업자등록번호: 123-45-67890&nbsp;&nbsp;통신판매업신고 :
          제1234-서울종로-1234호[사업자정보확인]
          <br />
          관광사업자등록 : 일반여행업 1234-123456호(종로구청)
        </div>
        <div className={footer.copyRight}>© STAYFOREST</div>
      </div>
      <div className={footer.footerRight}>
        <div className={footer.icon}>
          <i class="fa-brands fa-facebook-f" />
          <i class="fa-brands fa-instagram" />
          <i class="fa-solid fa-n" />
          <i class="fab fa-youtube" />
        </div>
        <div className={footer.list}>
          ABOUT <br />
          4POINT OF VIEW
          <br />
          NEWSLETTER
          <br />
          CAREERS
          <br />
          CONTACT US
          <br />
          이용약관 <br />
          <p>개인정보 처리방침</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
