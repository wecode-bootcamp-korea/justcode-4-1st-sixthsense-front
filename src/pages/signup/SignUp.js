import React from 'react';
import style from './SignUp.module.css';

function SignUp() {
  return (
    <div className={style.signupbox}>
      <div className={style.signuptitlebox}>
        <h1 className={style.signuptitle}>J O I N</h1>
        <h2 className={style.signupsubtitle}>회원가입</h2>
      </div>

      <div className={style.signupinputbox}>
        <div className={style.signupsmallinput}>
          <span>이메일</span>
          <input
            className={style.signupinput}
            type="text"
            name="ID"
            id="id"
            placeholder="이메일 아이디"
          />
        </div>
        <div className={style.signupsmallinput}>
          <span>이메일</span>
          <input
            className={style.signupinput}
            type="password"
            name="Password"
            id="pw"
            placeholder="비밀번호"
          />
        </div>
        <div className={style.signupsmallinput}>
          <span>이메일</span>
          <input
            className={style.signupinput}
            type="password"
            name="Password"
            id="pw"
            placeholder="비밀번호"
          />
        </div>
      </div>

      <div className={style.signupbuttonbox}>
        <button className={style.signupbutton} id="signup-button">
          L O G I N
        </button>
        <button
          className={style.signupbutton}
          id="non-member-reservation-button"
        >
          비회원 예약 조회
        </button>
      </div>

      <div className={style.linkbox}>
        <span className={style.signupfindlink}>회원가입</span>
        <span className={style.signupfindlink}>비밀번호 찾기</span>
      </div>

      <div className={style.snssignupbox}>
        <span className={style.snssignuplink}>SNS 계정으로 로그인하기</span>
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
