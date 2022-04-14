import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CountryCode from './CountryCodes';
import PrivateAgree1 from './PrivateAgree1';
import PrivateAgree2 from './PrivateAgree2';
import PrivateAgree3 from './PrivateAgree3';
import PrivateAgree4 from './PrivateAgree4';
import PrivateAgree5 from './PrivateAgree5';
import { IoIosArrowDown } from 'react-icons/io';
import BASE_URL from '../../config';
import style from './SignUp.module.css';

function SignUp() {
  const onSignup = () => {
    fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailState,
        password: passwordState,
        username: nameState,
        phoneNumber: phoneNumberState,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  const navigate = useNavigate();

  const [emailState, setEmailState] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [nameState, setNameState] = useState('');
  const [nameError, setNameError] = useState(false);

  const [passwordState, setPasswordState] = useState();
  const [passwordError, setPasswordError] = useState(false);

  const [phoneNumberState, setPhoneNumberState] = useState();
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [allCheck, setAllCheck] = useState(false);
  const [serviceCheck, setServiceCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [lifetimeCheck, setLifetimeCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const onChangeEmail = e => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!e.target.value || emailRegex.test(e.target.value))
      setEmailError(false);
    else setEmailError(true);
    setEmailState(e.target.value);
  };

  const onChangeName = e => {
    const nameRegex = /^[가-힣]{1,10}|[a-zA-Z]{1,10}\s[a-zA-Z]{1,10}$/;
    if (!e.target.value || nameRegex.test(e.target.value)) setNameError(false);
    else setNameError(true);
    setNameState(e.target.value);
  };

  const onChangePassword = e => {
    const passwordRegex = /(?=.*[a-zA-Z]{2,20}).{8,20}$/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setPasswordError(false);
    else setPasswordError(true);
    setPasswordState(e.target.value);
  };

  const onChangePhoneNumber = e => {
    const phoneNumberRegex = /^(\d{2,3})(\d{3,4})(\d{4})$/;
    if (!e.target.value || phoneNumberRegex.test(e.target.value))
      setPhoneNumberError(false);
    else setPhoneNumberError(true);
    setPhoneNumberState(e.target.value);
  };

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setServiceCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setLifetimeCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setServiceCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setLifetimeCheck(false);
      setMarketingCheck(false);
    }
  };

  const serviceCheckBtnEvent = () => {
    if (serviceCheck === false) {
      setServiceCheck(true);
    } else {
      setServiceCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const lifetimeBtnEvent = () => {
    if (lifetimeCheck === false) {
      setLifetimeCheck(true);
    } else {
      setLifetimeCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  const toggleMenu1 = () => {
    setIsOpen1(isOpen1 => !isOpen1);
  };

  const toggleMenu2 = () => {
    setIsOpen2(isOpen2 => !isOpen2);
  };

  const toggleMenu3 = () => {
    setIsOpen3(isOpen3 => !isOpen3);
  };

  const toggleMenu4 = () => {
    setIsOpen4(isOpen4 => !isOpen4);
  };

  const toggleMenu5 = () => {
    setIsOpen5(isOpen5 => !isOpen5);
  };

  useEffect(() => {
    if (
      ageCheck === true &&
      serviceCheck === true &&
      useCheck === true &&
      lifetimeCheck === true &&
      marketingCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, serviceCheck, lifetimeCheck, marketingCheck]);

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
            name="email"
            id="email"
            value={emailState}
            placeholder="이메일을 입력해주세요."
            onChange={onChangeEmail}
          />
          {emailError && <div class={style.checkvalid}>잘못된 양식입니다.</div>}
        </div>
        <div className={style.signupsmallinput}>
          <span>이름</span>
          <input
            className={style.signupinput}
            type="text"
            name="name"
            id="name"
            value={nameState}
            placeholder="이름을 입력해주세요."
            onChange={onChangeName}
          />
          {nameError && (
            <div class={style.checkvalid}>
              1자 이상 10자 이하로 입력해 주세요.
            </div>
          )}
        </div>
        <div className={style.signupsmallinput}>
          <span>비밀번호</span>
          <input
            className={style.signupinput}
            type="password"
            name="Password"
            id="pw"
            value={passwordState}
            placeholder="비밀번호를 입력하세요."
            onChange={onChangePassword}
          />
          <div className={style.checkbox}>
            <span>
              {passwordError && (
                <div class={style.checkvalid}>
                  1자 이상 10자 이하로 입력해 주세요.
                </div>
              )}
            </span>
          </div>
        </div>
        <div className={style.signupsmallinput}>
          <span>휴대전화</span>
          <div className={style.selectcountry}>
            <CountryCode />
          </div>
          <input
            className={style.signupinput}
            type="tel"
            name="phone"
            id="phonenumber"
            maxlength="13"
            value={phoneNumberState}
            placeholder="휴대전화번호를 입력해 주세요."
            onChange={onChangePhoneNumber}
          />
          {phoneNumberError && (
            <div class={style.checkvalid}>잘못된 양식입니다.</div>
          )}
        </div>
      </div>
      <div className={style.signupbuttonbox}>
        <button className={style.signupbutton} id="signup-button">
          인증번호 발송
        </button>
      </div>
      <div className={style.checkbtnbox}>
        <div className={style.headcheckbtn}>
          <input
            type="checkbox"
            id="check"
            name="xxx"
            value="yyy"
            checked={allCheck}
            onChange={allBtnEvent}
          />
          <label for="check" />
          사용자 약관 전체동의
        </div>
        <div className={style.checkbtn}>
          <span className={style.smallcheckbtn}>
            <div>
              <input
                type="checkbox"
                id="check"
                name="xxx"
                value="yyy"
                checked={serviceCheck}
                onChange={serviceCheckBtnEvent}
              />
              <label for="check" />
              서비스 이용 약관 동의 (필수)
            </div>
            <span>
              <IoIosArrowDown onClick={() => toggleMenu1()} />
            </span>
          </span>
          <PrivateAgree1 isOpen1={isOpen1} />
        </div>
        <div className={style.checkbtn}>
          <span className={style.smallcheckbtn}>
            <div>
              <input
                type="checkbox"
                id="check"
                name="xxx"
                value="yyy"
                checked={useCheck}
                onChange={useBtnEvent}
              />
              <label for="check" />
              개인정보 처리방침 동의 (필수)
            </div>
            <span>
              <summary>
                <IoIosArrowDown onClick={() => toggleMenu2()} />
              </summary>
            </span>
          </span>
          <PrivateAgree2 isOpen2={isOpen2} />
        </div>
        <div className={style.checkbtn}>
          <span className={style.smallcheckbtn}>
            <div>
              <input
                type="checkbox"
                id="check"
                name="xxx"
                value="yyy"
                checked={ageCheck}
                onChange={ageBtnEvent}
              />
              <label for="check" />만 14세 이상 확인 (필수)
            </div>
            <span>
              <IoIosArrowDown onClick={() => toggleMenu3()} />
            </span>
          </span>
          <PrivateAgree3 isOpen3={isOpen3} />
        </div>
        <div className={style.checkbtn}>
          <span className={style.smallcheckbtn}>
            <div>
              <input
                type="checkbox"
                id="check"
                name="xxx"
                value="yyy"
                checked={lifetimeCheck}
                onChange={lifetimeBtnEvent}
              />
              <label for="check" />
              평생회원제 동의 (선택)
            </div>
            <span>
              <IoIosArrowDown onClick={() => toggleMenu4()} />
            </span>
          </span>
          <PrivateAgree4 isOpen4={isOpen4} />
        </div>
        <div className={style.checkbtn}>
          <span className={style.smallcheckbtn}>
            <div>
              <input
                type="checkbox"
                id="check"
                name="xxx"
                value="yyy"
                checked={marketingCheck}
                onChange={marketingBtnEvent}
              />
              <label for="check" />
              마케팅 정보 수신 동의 (선택)
            </div>
            <span>
              <IoIosArrowDown onClick={() => toggleMenu5()} />
            </span>
          </span>

          <PrivateAgree5 isOpen5={isOpen5} />
        </div>
      </div>
      <div className={style.signupbtn}>
        <button
          className={style.signupbtnbox}
          id="signup-button"
          onClick={() => {
            onSignup();
            navigate('/login');
          }}
        >
          회원가입
        </button>
      </div>
      <div className={style.signupbtn}>
        <button
          className={style.signupbtnbox}
          id="signup-button"
          onClick={() => navigate('/login')}
        >
          인증 건너뛰고 가입
        </button>
      </div>
      <div className={style.snssignupbox}>
        <span className={style.snssignuplink}>SNS 계정으로 로그인하기</span>
        <div className={style.snsemoticonbox}>
          <span className={style.emoticonbox}>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
