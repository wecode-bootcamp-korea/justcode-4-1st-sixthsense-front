import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './SignUp.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { GoCheck } from 'react-icons/go';
import CountryCode from './CountryCodes';
import PrivateAgree from './PrivateAgree';
import PrivateAgree2 from './PrivateAgree2';

function SignUp() {
  const onSignup = () => {
    fetch('http://localhost:8000/users/signup', {
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

  // const [engPasswordState, setEngPasswordState] = useState();
  // const [engPasswordError, setEngPasswordError] = useState(false);
  // const [specialPasswordState, setSpecialPasswordState] = useState();
  // const [specialPasswordError, setSpecialPasswordError] = useState(false);
  // const [numPasswordState, setNumPasswordState] = useState();
  // const [numPasswordError, setNumPasswordError] = useState(false);

  const [checkPasswordState, setCheckPasswordState] = useState();
  const [checkPasswordError, setCheckPasswordError] = useState(false);

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
  // /^\d{3}-\d{3,4}-\d{4}$/;

  // const onChangeEngPassword = e => {
  //   const engPasswordRegex = /(?=.*[a-zA-Z]{2,20}).{8,20}$/;
  //   if (!e.target.value || engPasswordRegex.test(e.target.value))
  //     setEngPasswordError(false);
  //   else setEngPasswordError(true);
  //   setEngPasswordState(e.target.value);
  // };

  // const onChangeSpecialPassword = e => {
  //   const specialPasswordRegex = /(?=.*[~`!@#$%\^&*()-+=]{1,20}).{8,20}$/;
  //   if (!e.target.value || specialPasswordRegex.test(e.target.value))
  //     setSpecialPasswordError(false);
  //   else setSpecialPasswordError(true);
  //   setSpecialPasswordState(e.target.value);
  // };

  // const onChangenumPassword = e => {
  //   const numPasswordRegex = /(?=.*\d{1,20}).{8,20}$/;
  //   if (!e.target.value || numPasswordRegex.test(e.target.value))
  //     setNumPasswordError(false);
  //   else setNumPasswordError(true);
  //   setNumPasswordState(e.target.value);
  // };

  const onChangeCheckPassword = e => {
    if (!e.target.value || onChangePassword.test(e.target.value))
      setCheckPasswordError(false);
    else setCheckPasswordError(true);
    setCheckPasswordState(e.target.value);
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
                <div class={style.bluecheckvalid}>
                  <GoCheck /> 영문
                </div>
              )}
            </span>
            <span>
              {passwordError && (
                <div class={style.bluecheckvalid}>
                  <GoCheck /> 숫자
                </div>
              )}
            </span>
            <span>
              {passwordError && (
                <div class={style.bluecheckvalid}>
                  <GoCheck /> 특수문자
                </div>
              )}
            </span>
            <span>
              {passwordError && (
                <div class={style.bluecheckvalid}>
                  <GoCheck /> 8자 이상 20자 이하
                </div>
              )}
            </span>
          </div>
        </div>
        <div className={style.signupsmallinput}>
          <input
            className={style.signupinput}
            type="password"
            name="Password"
            id="checkpw"
            value={checkPasswordState}
            placeholder="비밀번호를 확인해 주세요."
          />
          {checkPasswordError && (
            <div class={style.checkvalid}>
              1자 이상 10자 이하로 입력해 주세요.
            </div>
          )}
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

          <span className={isOpen1 ? style.showmenu : style.hidemenu}>
            <PrivateAgree />
          </span>
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

          <span className={isOpen3 ? style.showmenu : style.hidemenu}>
            정보통신망 이용촉진 및 정보보호 등에 관한 법률에 따라 만 14세 미만
            아동의 개인정보 수집 시 법정대리인의 동의를 받도록 규정하고
            있습니다.
            <br />만 14세 미만 아동이 법정대리인 동의 없이 회원가입을 할 경우
            회원탈퇴 또는 서비스 이용에 제한이 있을 수 있습니다.
          </span>
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

          <span className={isOpen4 ? style.showmenu : style.hidemenu}>
            평생회원제에 동의할 경우 1년 이상 서비스를 이용하지 않아도
            <br />
            휴면 처리되지 않습니다.
          </span>
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

          <span className={isOpen5 ? style.showmenu : style.hidemenu}>
            스테이폴리오에서 제공하는 이벤트 및 혜택 등 다양한 정보를
            문자메시지, 이메일 등으로 볼 수 있습니다.
            <br />
            마케팅 정보 수신 및 활용 동의 여부와 관계없이 회원가입 및 서비스를
            이용하실 수 있습니다.
            <br />
            또한 서비스의 중요 안내사항 및 예약에 대한 정보는 마케팅 정보 수신
            동의 여부와 관계없이 발송됩니다.
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
            <br />- 수집∙이용항목은 마케팅 및 분석, 프로모션의 목적에 따라
            달라질 수 있음
            <br />
            <br />
            3. 보유 및 이용기간
            <br />- 정보 삭제 또는 이용 정지 요청 및 회원탈퇴 시 즉시 삭제
            <br />
            <br />
            4. 마케팅 활용 정보 수집 방법
            <br />- 희망자에 한해 직접 입력
          </span>
        </div>
      </div>
      <div className={style.signupbtn}>
        <button
          className={style.signupbtnbox}
          id="signup-button"
          onClick={onSignup}
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
          <span className={style.emoticonbox}>
            <img src="a" />
          </span>
          <span>
            <img src="a" />
          </span>
          <span>
            <img src="a" />
          </span>
          <span>
            <img src="a" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
