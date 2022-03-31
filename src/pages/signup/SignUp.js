import React from 'react';
import style from './SignUp.module.css';

function SignUp() {
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
          placeholder="이메일 아이디"
        />
        <input
          className={style.logininput}
          type="password"
          name="Password"
          id="pw"
          placeholder="비밀번호"
        />
      </div>

      <div className={style.loginbuttonbox}>
        <button className={style.loginbutton} id="login-button">
          L O G I N
        </button>
        <button
          className={style.loginbutton}
          id="non-member-reservation-button"
        >
          비회원 예약 조회
        </button>
      </div>

      <div className={style.linkbox}>
        <span className={style.loginfindlink}>회원가입</span>
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

export default SignUp;
