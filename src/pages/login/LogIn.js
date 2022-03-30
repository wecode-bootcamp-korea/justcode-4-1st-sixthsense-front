import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './LogIn.scss';

function LogIn() {
  return (
    <div className="login-box">
      <div className="login-title-box">
        <h1 className="login-title">L O G I N</h1>
        <h2 className="login-sub-title">로그인</h2>
      </div>

      <div className="login-input-box">
        <input
          className="login-input"
          type="text"
          name="ID"
          id="id"
          placeholder="이메일 아이디"
        />
        <input
          className="login-input"
          type="password"
          name="Password"
          id="pw"
          placeholder="비밀번호"
        />
      </div>

      <div className="login-button-box">
        <button className="login-button" id="login-button">
          L O G I N
        </button>
        <button className="login-button" id="non-member-reservation-button">
          비회원 예약 조회
        </button>
      </div>

      <div className="link-box">
        <span className="login-find-link">회원가입</span>
        <span className="login-find-link">비밀번호 찾기</span>
      </div>

      <div className="sns-login-box">
        <span className="sns-login-link">SNS 계정으로 로그인하기</span>
        <div className="sns-emoticon-box">
          <span className="emoticon-box">
            a<i />
          </span>
          <span>
            a<i />
          </span>
          <span>
            a<i />
          </span>
          <span>
            a<i />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
