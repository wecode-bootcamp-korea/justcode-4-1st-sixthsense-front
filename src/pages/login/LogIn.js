import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../../config';
import style from './LogIn.module.css';

function LogIn() {
  const [email, setEmail] = useState(null);
  const [pw, setPw] = useState(null);

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePw = e => {
    setPw(e.target.value);
  };

  const onLogin = () => {
    fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          sessionStorage.setItem('login-token', res.token);
        }
      });
  };

  const checkAuthorization = () => {
    let token = sessionStorage.getItem('login-token') || '';
    fetch(`${BASE_URL}/users/test`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  return (
    <div className={style.loginbox}>
      <div className={style.logintitlebox}>
        <h1 className={style.logintitle}>L O G I N</h1>
        <h2 className={style.loginsubtitle}>로그인</h2>
      </div>

      <div className={style.logininputbox}>
        <input
          className={style.logininput}
          type="text"
          name="ID"
          id="id"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일 아이디"
        />
        <input
          className={style.logininput}
          type="password"
          name="Password"
          id="pw"
          value={pw}
          onChange={onChangePw}
          placeholder="비밀번호"
        />
      </div>

      <div className={style.loginbuttonbox}>
        <button
          className={style.loginbuttonstyle}
          onClick={onLogin}
          id="login-button"
        >
          L O G I N
        </button>
        <button
          className={style.loginbutton}
          id="non-member-reservation-button"
          onClick={checkAuthorization}
        >
          비회원 예약 조회
        </button>
      </div>

      <div className={style.linkbox}>
        <Link to="/signup" className={style.loginfindlink}>
          회원가입
        </Link>
        <span className={style.loginfindlink}>비밀번호 찾기</span>
      </div>

      <div className={style.snsloginbox}>
        <span className={style.snsloginlink}>SNS 계정으로 로그인하기</span>
        <div className={style.snsemoticonbox}>
          <span className={style.emoticonbox}>
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
