import React from 'react';
import Link from 'react-router-dom';
import style from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerLeft}>
        <div className={style.logo}>
          S T A Y <br />
          FOREST
        </div>
        <div className={style.footerDetail}>
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
        <div className={style.copyRight}>© STAYFOREST</div>
      </div>
      <div className={style.footerRight}>
        <div className={style.icon}>
          <FaFacebookF />
          &nbsp;
          <FaInstagram />
          &nbsp;
          <FaYoutube />
        </div>
        <div className={style.list}>
          <Link to="/https://velog.io/@shorrysorry">김수빈</Link>
          <a href="https://velog.io/@shorrysorry">김수빈</a> <br />
          <a href="https://velog.io/@sonaki0811">유다송</a> <br />
          <a href="https://velog.io/@xcc629">임근홍</a> <br />
          <a href="https://velog.io/@hani2525">전하은</a> <br />
          <a href="https://velog.io/@jml22">이정민</a> <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;
