import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './SignUp.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { GoCheck } from 'react-icons/go';

function SignUp() {
  useEffect(() => {
    fetch('회원가입 api url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailState,
        username: nameState,
        password: passwordState,
        phoneNumber: phoneNumberState,
      }),
    })
      .then()
      .then();
  }, []);

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
            <select name="countryCode" id="">
              <option data-countryCode="KR" value="82">
                South Korea (+82)
              </option>
              <optgroup label="Other countries">
                <option data-countryCode="DZ" value="213">
                  Algeria (+213)
                </option>
                <option data-countryCode="AD" value="376">
                  Andorra (+376)
                </option>
                <option data-countryCode="AO" value="244">
                  Angola (+244)
                </option>
                <option data-countryCode="AI" value="1264">
                  Anguilla (+1264)
                </option>
                <option data-countryCode="AG" value="1268">
                  Antigua &amp; Barbuda (+1268)
                </option>
                <option data-countryCode="AR" value="54">
                  Argentina (+54)
                </option>
                <option data-countryCode="AM" value="374">
                  Armenia (+374)
                </option>
                <option data-countryCode="AW" value="297">
                  Aruba (+297)
                </option>
                <option data-countryCode="AU" value="61">
                  Australia (+61)
                </option>
                <option data-countryCode="AT" value="43">
                  Austria (+43)
                </option>
                <option data-countryCode="AZ" value="994">
                  Azerbaijan (+994)
                </option>
                <option data-countryCode="BS" value="1242">
                  Bahamas (+1242)
                </option>
                <option data-countryCode="BH" value="973">
                  Bahrain (+973)
                </option>
                <option data-countryCode="BD" value="880">
                  Bangladesh (+880)
                </option>
                <option data-countryCode="BB" value="1246">
                  Barbados (+1246)
                </option>
                <option data-countryCode="BY" value="375">
                  Belarus (+375)
                </option>
                <option data-countryCode="BE" value="32">
                  Belgium (+32)
                </option>
                <option data-countryCode="BZ" value="501">
                  Belize (+501)
                </option>
                <option data-countryCode="BJ" value="229">
                  Benin (+229)
                </option>
                <option data-countryCode="BM" value="1441">
                  Bermuda (+1441)
                </option>
                <option data-countryCode="BT" value="975">
                  Bhutan (+975)
                </option>
                <option data-countryCode="BO" value="591">
                  Bolivia (+591)
                </option>
                <option data-countryCode="BA" value="387">
                  Bosnia Herzegovina (+387)
                </option>
                <option data-countryCode="BW" value="267">
                  Botswana (+267)
                </option>
                <option data-countryCode="BR" value="55">
                  Brazil (+55)
                </option>
                <option data-countryCode="BN" value="673">
                  Brunei (+673)
                </option>
                <option data-countryCode="BG" value="359">
                  Bulgaria (+359)
                </option>
                <option data-countryCode="BF" value="226">
                  Burkina Faso (+226)
                </option>
                <option data-countryCode="BI" value="257">
                  Burundi (+257)
                </option>
                <option data-countryCode="KH" value="855">
                  Cambodia (+855)
                </option>
                <option data-countryCode="CM" value="237">
                  Cameroon (+237)
                </option>
                <option data-countryCode="CA" value="1">
                  Canada (+1)
                </option>
                <option data-countryCode="CV" value="238">
                  Cape Verde Islands (+238)
                </option>
                <option data-countryCode="KY" value="1345">
                  Cayman Islands (+1345)
                </option>
                <option data-countryCode="CF" value="236">
                  Central African Republic (+236)
                </option>
                <option data-countryCode="CL" value="56">
                  Chile (+56)
                </option>
                <option data-countryCode="CN" value="86">
                  China (+86)
                </option>
                <option data-countryCode="CO" value="57">
                  Colombia (+57)
                </option>
                <option data-countryCode="KM" value="269">
                  Comoros (+269)
                </option>
                <option data-countryCode="CG" value="242">
                  Congo (+242)
                </option>
                <option data-countryCode="CK" value="682">
                  Cook Islands (+682)
                </option>
                <option data-countryCode="CR" value="506">
                  Costa Rica (+506)
                </option>
                <option data-countryCode="HR" value="385">
                  Croatia (+385)
                </option>
                <option data-countryCode="CU" value="53">
                  Cuba (+53)
                </option>
                <option data-countryCode="CY" value="90392">
                  Cyprus North (+90392)
                </option>
                <option data-countryCode="CY" value="357">
                  Cyprus South (+357)
                </option>
                <option data-countryCode="CZ" value="42">
                  Czech Republic (+42)
                </option>
                <option data-countryCode="DK" value="45">
                  Denmark (+45)
                </option>
                <option data-countryCode="DJ" value="253">
                  Djibouti (+253)
                </option>
                <option data-countryCode="DM" value="1809">
                  Dominica (+1809)
                </option>
                <option data-countryCode="DO" value="1809">
                  Dominican Republic (+1809)
                </option>
                <option data-countryCode="EC" value="593">
                  Ecuador (+593)
                </option>
                <option data-countryCode="EG" value="20">
                  Egypt (+20)
                </option>
                <option data-countryCode="SV" value="503">
                  El Salvador (+503)
                </option>
                <option data-countryCode="GQ" value="240">
                  Equatorial Guinea (+240)
                </option>
                <option data-countryCode="ER" value="291">
                  Eritrea (+291)
                </option>
                <option data-countryCode="EE" value="372">
                  Estonia (+372)
                </option>
                <option data-countryCode="ET" value="251">
                  Ethiopia (+251)
                </option>
                <option data-countryCode="FK" value="500">
                  Falkland Islands (+500)
                </option>
                <option data-countryCode="FO" value="298">
                  Faroe Islands (+298)
                </option>
                <option data-countryCode="FJ" value="679">
                  Fiji (+679)
                </option>
                <option data-countryCode="FI" value="358">
                  Finland (+358)
                </option>
                <option data-countryCode="FR" value="33">
                  France (+33)
                </option>
                <option data-countryCode="GF" value="594">
                  French Guiana (+594)
                </option>
                <option data-countryCode="PF" value="689">
                  French Polynesia (+689)
                </option>
                <option data-countryCode="GA" value="241">
                  Gabon (+241)
                </option>
                <option data-countryCode="GM" value="220">
                  Gambia (+220)
                </option>
                <option data-countryCode="GE" value="7880">
                  Georgia (+7880)
                </option>
                <option data-countryCode="DE" value="49">
                  Germany (+49)
                </option>
                <option data-countryCode="GH" value="233">
                  Ghana (+233)
                </option>
                <option data-countryCode="GI" value="350">
                  Gibraltar (+350)
                </option>
                <option data-countryCode="GR" value="30">
                  Greece (+30)
                </option>
                <option data-countryCode="GL" value="299">
                  Greenland (+299)
                </option>
                <option data-countryCode="GD" value="1473">
                  Grenada (+1473)
                </option>
                <option data-countryCode="GP" value="590">
                  Guadeloupe (+590)
                </option>
                <option data-countryCode="GU" value="671">
                  Guam (+671)
                </option>
                <option data-countryCode="GT" value="502">
                  Guatemala (+502)
                </option>
                <option data-countryCode="GN" value="224">
                  Guinea (+224)
                </option>
                <option data-countryCode="GW" value="245">
                  Guinea - Bissau (+245)
                </option>
                <option data-countryCode="GY" value="592">
                  Guyana (+592)
                </option>
                <option data-countryCode="HT" value="509">
                  Haiti (+509)
                </option>
                <option data-countryCode="HN" value="504">
                  Honduras (+504)
                </option>
                <option data-countryCode="HK" value="852">
                  Hong Kong (+852)
                </option>
                <option data-countryCode="HU" value="36">
                  Hungary (+36)
                </option>
                <option data-countryCode="IS" value="354">
                  Iceland (+354)
                </option>
                <option data-countryCode="IN" value="91">
                  India (+91)
                </option>
                <option data-countryCode="ID" value="62">
                  Indonesia (+62)
                </option>
                <option data-countryCode="IR" value="98">
                  Iran (+98)
                </option>
                <option data-countryCode="IQ" value="964">
                  Iraq (+964)
                </option>
                <option data-countryCode="IE" value="353">
                  Ireland (+353)
                </option>
                <option data-countryCode="IL" value="972">
                  Israel (+972)
                </option>
                <option data-countryCode="IT" value="39">
                  Italy (+39)
                </option>
                <option data-countryCode="JM" value="1876">
                  Jamaica (+1876)
                </option>
                <option data-countryCode="JP" value="81">
                  Japan (+81)
                </option>
                <option data-countryCode="JO" value="962">
                  Jordan (+962)
                </option>
                <option data-countryCode="KZ" value="7">
                  Kazakhstan (+7)
                </option>
                <option data-countryCode="KE" value="254">
                  Kenya (+254)
                </option>
                <option data-countryCode="KI" value="686">
                  Kiribati (+686)
                </option>
                <option data-countryCode="KP" value="850">
                  Korea North (+850)
                </option>
                <option data-countryCode="KR" value="82">
                  Korea South (+82)
                </option>
                <option data-countryCode="KW" value="965">
                  Kuwait (+965)
                </option>
                <option data-countryCode="KG" value="996">
                  Kyrgyzstan (+996)
                </option>
                <option data-countryCode="LA" value="856">
                  Laos (+856)
                </option>
                <option data-countryCode="LV" value="371">
                  Latvia (+371)
                </option>
                <option data-countryCode="LB" value="961">
                  Lebanon (+961)
                </option>
                <option data-countryCode="LS" value="266">
                  Lesotho (+266)
                </option>
                <option data-countryCode="LR" value="231">
                  Liberia (+231)
                </option>
                <option data-countryCode="LY" value="218">
                  Libya (+218)
                </option>
                <option data-countryCode="LI" value="417">
                  Liechtenstein (+417)
                </option>
                <option data-countryCode="LT" value="370">
                  Lithuania (+370)
                </option>
                <option data-countryCode="LU" value="352">
                  Luxembourg (+352)
                </option>
                <option data-countryCode="MO" value="853">
                  Macao (+853)
                </option>
                <option data-countryCode="MK" value="389">
                  Macedonia (+389)
                </option>
                <option data-countryCode="MG" value="261">
                  Madagascar (+261)
                </option>
                <option data-countryCode="MW" value="265">
                  Malawi (+265)
                </option>
                <option data-countryCode="MY" value="60">
                  Malaysia (+60)
                </option>
                <option data-countryCode="MV" value="960">
                  Maldives (+960)
                </option>
                <option data-countryCode="ML" value="223">
                  Mali (+223)
                </option>
                <option data-countryCode="MT" value="356">
                  Malta (+356)
                </option>
                <option data-countryCode="MH" value="692">
                  Marshall Islands (+692)
                </option>
                <option data-countryCode="MQ" value="596">
                  Martinique (+596)
                </option>
                <option data-countryCode="MR" value="222">
                  Mauritania (+222)
                </option>
                <option data-countryCode="YT" value="269">
                  Mayotte (+269)
                </option>
                <option data-countryCode="MX" value="52">
                  Mexico (+52)
                </option>
                <option data-countryCode="FM" value="691">
                  Micronesia (+691)
                </option>
                <option data-countryCode="MD" value="373">
                  Moldova (+373)
                </option>
                <option data-countryCode="MC" value="377">
                  Monaco (+377)
                </option>
                <option data-countryCode="MN" value="976">
                  Mongolia (+976)
                </option>
                <option data-countryCode="MS" value="1664">
                  Montserrat (+1664)
                </option>
                <option data-countryCode="MA" value="212">
                  Morocco (+212)
                </option>
                <option data-countryCode="MZ" value="258">
                  Mozambique (+258)
                </option>
                <option data-countryCode="MN" value="95">
                  Myanmar (+95)
                </option>
                <option data-countryCode="NA" value="264">
                  Namibia (+264)
                </option>
                <option data-countryCode="NR" value="674">
                  Nauru (+674)
                </option>
                <option data-countryCode="NP" value="977">
                  Nepal (+977)
                </option>
                <option data-countryCode="NL" value="31">
                  Netherlands (+31)
                </option>
                <option data-countryCode="NC" value="687">
                  New Caledonia (+687)
                </option>
                <option data-countryCode="NZ" value="64">
                  New Zealand (+64)
                </option>
                <option data-countryCode="NI" value="505">
                  Nicaragua (+505)
                </option>
                <option data-countryCode="NE" value="227">
                  Niger (+227)
                </option>
                <option data-countryCode="NG" value="234">
                  Nigeria (+234)
                </option>
                <option data-countryCode="NU" value="683">
                  Niue (+683)
                </option>
                <option data-countryCode="NF" value="672">
                  Norfolk Islands (+672)
                </option>
                <option data-countryCode="NP" value="670">
                  Northern Marianas (+670)
                </option>
                <option data-countryCode="NO" value="47">
                  Norway (+47)
                </option>
                <option data-countryCode="OM" value="968">
                  Oman (+968)
                </option>
                <option data-countryCode="PW" value="680">
                  Palau (+680)
                </option>
                <option data-countryCode="PA" value="507">
                  Panama (+507)
                </option>
                <option data-countryCode="PG" value="675">
                  Papua New Guinea (+675)
                </option>
                <option data-countryCode="PY" value="595">
                  Paraguay (+595)
                </option>
                <option data-countryCode="PE" value="51">
                  Peru (+51)
                </option>
                <option data-countryCode="PH" value="63">
                  Philippines (+63)
                </option>
                <option data-countryCode="PL" value="48">
                  Poland (+48)
                </option>
                <option data-countryCode="PT" value="351">
                  Portugal (+351)
                </option>
                <option data-countryCode="PR" value="1787">
                  Puerto Rico (+1787)
                </option>
                <option data-countryCode="QA" value="974">
                  Qatar (+974)
                </option>
                <option data-countryCode="RE" value="262">
                  Reunion (+262)
                </option>
                <option data-countryCode="RO" value="40">
                  Romania (+40)
                </option>
                <option data-countryCode="RU" value="7">
                  Russia (+7)
                </option>
                <option data-countryCode="RW" value="250">
                  Rwanda (+250)
                </option>
                <option data-countryCode="SM" value="378">
                  San Marino (+378)
                </option>
                <option data-countryCode="ST" value="239">
                  Sao Tome &amp; Principe (+239)
                </option>
                <option data-countryCode="SA" value="966">
                  Saudi Arabia (+966)
                </option>
                <option data-countryCode="SN" value="221">
                  Senegal (+221)
                </option>
                <option data-countryCode="CS" value="381">
                  Serbia (+381)
                </option>
                <option data-countryCode="SC" value="248">
                  Seychelles (+248)
                </option>
                <option data-countryCode="SL" value="232">
                  Sierra Leone (+232)
                </option>
                <option data-countryCode="SG" value="65">
                  Singapore (+65)
                </option>
                <option data-countryCode="SK" value="421">
                  Slovak Republic (+421)
                </option>
                <option data-countryCode="SI" value="386">
                  Slovenia (+386)
                </option>
                <option data-countryCode="SB" value="677">
                  Solomon Islands (+677)
                </option>
                <option data-countryCode="SO" value="252">
                  Somalia (+252)
                </option>
                <option data-countryCode="ZA" value="27">
                  South Africa (+27)
                </option>
                <option data-countryCode="ES" value="34">
                  Spain (+34)
                </option>
                <option data-countryCode="LK" value="94">
                  Sri Lanka (+94)
                </option>
                <option data-countryCode="SH" value="290">
                  St. Helena (+290)
                </option>
                <option data-countryCode="KN" value="1869">
                  St. Kitts (+1869)
                </option>
                <option data-countryCode="SC" value="1758">
                  St. Lucia (+1758)
                </option>
                <option data-countryCode="SD" value="249">
                  Sudan (+249)
                </option>
                <option data-countryCode="SR" value="597">
                  Suriname (+597)
                </option>
                <option data-countryCode="SZ" value="268">
                  Swaziland (+268)
                </option>
                <option data-countryCode="SE" value="46">
                  Sweden (+46)
                </option>
                <option data-countryCode="CH" value="41">
                  Switzerland (+41)
                </option>
                <option data-countryCode="SI" value="963">
                  Syria (+963)
                </option>
                <option data-countryCode="TW" value="886">
                  Taiwan (+886)
                </option>
                <option data-countryCode="TJ" value="7">
                  Tajikstan (+7)
                </option>
                <option data-countryCode="TH" value="66">
                  Thailand (+66)
                </option>
                <option data-countryCode="TG" value="228">
                  Togo (+228)
                </option>
                <option data-countryCode="TO" value="676">
                  Tonga (+676)
                </option>
                <option data-countryCode="TT" value="1868">
                  Trinidad &amp; Tobago (+1868)
                </option>
                <option data-countryCode="TN" value="216">
                  Tunisia (+216)
                </option>
                <option data-countryCode="TR" value="90">
                  Turkey (+90)
                </option>
                <option data-countryCode="TM" value="7">
                  Turkmenistan (+7)
                </option>
                <option data-countryCode="TM" value="993">
                  Turkmenistan (+993)
                </option>
                <option data-countryCode="TC" value="1649">
                  Turks &amp; Caicos Islands (+1649)
                </option>
                <option data-countryCode="TV" value="688">
                  Tuvalu (+688)
                </option>
                <option data-countryCode="UG" value="256">
                  Uganda (+256)
                </option>
                <option data-countryCode="GB" value="44">
                  UK (+44)
                </option>
                <option data-countryCode="UA" value="380">
                  Ukraine (+380)
                </option>
                <option data-countryCode="AE" value="971">
                  United Arab Emirates (+971)
                </option>
                <option data-countryCode="UY" value="598">
                  Uruguay (+598)
                </option>
                <option data-countryCode="US" value="1">
                  USA (+1)
                </option>
                <option data-countryCode="UZ" value="7">
                  Uzbekistan (+7)
                </option>
                <option data-countryCode="VU" value="678">
                  Vanuatu (+678)
                </option>
                <option data-countryCode="VA" value="379">
                  Vatican City (+379)
                </option>
                <option data-countryCode="VE" value="58">
                  Venezuela (+58)
                </option>
                <option data-countryCode="VN" value="84">
                  Vietnam (+84)
                </option>
                <option data-countryCode="VG" value="84">
                  Virgin Islands - British (+1284)
                </option>
                <option data-countryCode="VI" value="84">
                  Virgin Islands - US (+1340)
                </option>
                <option data-countryCode="WF" value="681">
                  Wallis &amp; Futuna (+681)
                </option>
                <option data-countryCode="YE" value="969">
                  Yemen (North)(+969)
                </option>
                <option data-countryCode="YE" value="967">
                  Yemen (South)(+967)
                </option>
                <option data-countryCode="ZM" value="260">
                  Zambia (+260)
                </option>
                <option data-countryCode="ZW" value="263">
                  Zimbabwe (+263)
                </option>
              </optgroup>
            </select>
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
            <p>
              <br />
              개인정보 수집 및 이용 동의
              <br />
              1. 수집항목: [필수] 이름, 연락처, 이메일주소, 인원정보
              <br />
              2. 수집 및 이용목적: 사업자회원과 예약이용자의 원활한 거래 진행,
              고객상담, 불만처리 등 민원 처리, 분쟁조정 해결을 위한 기록보존
              <br />
              3. 보관기간: 회원탈퇴 등 개인정보 이용목적 달성 시까지 보관. 단,
              상법 및 ‘전자상거래 등에서의 소비자 보호에 관한 법률’ 등 관련
              법령에 의하여 일정 기간 보관이 필요한 경우에는 해당 기간 동안
              보관함
              <br />
              4. 동의 거부권 등에 대한 고지: 정보주체는 개인정보의 수집 및 이용
              동의를 거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될
              수 있습니다.
              <br />
              <br />
              개인정보 제3자 제공 동의
              <br />
              1. 개인정보를 제공받는 자: 예약상품판매 제휴업체
              <br />
              2. 제공하는 개인정보 항목: [필수] 스테이포레스트 아이디, 이름,
              연락처, 이메일주소, 인원정보
              <br />
              3. 개인정보를 제공받는 자의 이용목적: 사업자회원과 예약이용자의
              원활한 거래 진행, 고객상담, 불만처리 등 민원 처리, 분쟁조정 해결을
              위한 기록보존
              <br />
              4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간: 개인정보
              이용목적 달성 시 까지 보존합니다. <br />
              5. 동의 거부권 등에 대한 고지: 정보주체는 개인정보 제공 동의를
              거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수
              있습니다.
              <br />
            </p>
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

          <span className={isOpen2 ? style.showmenu : style.hidemenu}>
            제 1조 (총칙)
            <br />
            1. 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어
            있는 성명, 주민등록번호 등의 사항에 의하여 당해 개인을 식별할 수
            있는 정보 (당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른
            정보와 용이하게 결합하여 식별할 수 있는 것을 포함합니다.) 를
            말합니다.
            <br />
            2. 스테이포레스트는 귀하의 개인정보 보호를 매우 중요시하며,
            ‘정보통신망 이용촉진 및 정보보호에 관한 법률’ 상의 개인정보 보호규정
            및 정보통신부가 제정한 ‘개인정보 보호지침’을 준수하고 있습니다.
            <br />
            3. 스테이포레스트는 개인정보처리방침을 정하고 이를 귀하께서 언제나
            쉽게 확인할 수 있게 공개하도록 하고 있습니다.
            <br />
            4. 스테이포레스트는 개인정보 처리방침의 지속적인 개선을 위하여
            개정하는데 필요한 절차를 정하고 있으며, 개인정보 처리방침을 회사의
            필요한 사회적 변화에 맞게 변경할 수 있습니다. 그리고
            개인정보처리방침을 개정하는 경우 버전번호 등을 부여하여 개정된
            사항을 귀하께서 쉽게 알아볼 수 있도록 하고 있습니다.
            <br />
            <br />제 2조 (수집하는 개인정보 항목 및 수집방법)
            <br />
            1. 스테이포레스트는 별도의 회원가입 절차 없이 대부분의 컨텐츠에
            자유롭게 접근할 수 있습니다. 스테이포레스트에서 예약 및 프로모션.
            이벤트 서비스를 이용하시고자 할 경우 다음의 정보를 입력해주셔야
            합니다.- 입력항목 : 희망ID, 비밀번호, 성명, 이메일주소
            <br />
            2. 또한 서비스 이용과정이나 사업 처리 과정에서 아래와 같은 정보들이
            생성되어 수집될 수 있습니다.- 최근접속일, 접속 IP 정보, 쿠키,
            구매로그, 이벤트로그
            <br />- 회원가입 시 회원이 원하시는 경우에 한하여 추가 정보를 선택,
            제공하실 수 있도록 되어있으며, 일부 재화 또는 용역 상품에 대한 주문
            및 예약 시 회원이 원하는 정확한 주문 내용 파악을 통한 원활한 고객
            응대 및 예약 처리를 위하여 추가적인 정보를 요구하고 있습니다.
            <br />
            3. 스테이포레스트는 다음과 같은 방법으로 개인정보를 수집합니다.-
            홈페이지, 서면양식, 팩스, 전화, 상담 게시판, 이메일, 이벤트 응모,
            예약신청
            <br />- 로그 분석 프로그램을 통한 생성정보 수집
            <br />
            4. 개인정보 수집에 대한 동의
            <br />
            - 스테이포레스트는 귀하께서 스테이포레스트의 개인정보처리방침 및
            이용약관의 내용에 대해 「동의한다」버튼 또는 「동의하지
            않는다」버튼을 클릭할 수 있는 절차를 마련하여, 「동의한다」버튼을
            클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다.
            <br />
            5. 14세 미만 아동의 개인정보보호
            <br />
            - 스테이포레스트는 법정 대리인의 동의가 필요한 만14세 미만 아동의
            회원가입은 받고 있지 않습니다.
            <br />
            6. 비회원의 개인정보보호
            <br />
            - 스테이포레스트는 비회원 주문의 경우에도 예약정보, 대금결제,
            예약내역 조회 및 예약확인, 실명여부 확인을 위하여 필요한
            개인정보만을 요청하고 있으며, 이 경우 그 정보는 대금결제 및 객실예약
            관련된 용도 이외에는 다른 어떠한 용도로도 사용되지 않습니다.
            <br />
            - 스테이포레스트는 비회원의 개인정보도 회원과 동등한 수준으로
            보호합니다.
            <br />
            <br />제 3조 (개인정보의 수집목적 및 이용 목적)
            <br />- 스테이포레스트는 다음과 같은 목적을 위하여 개인정보를
            수집하고 있습니다.
            <br />
            1. 성명, 아이디, 비밀번호 : 회원제 서비스 이용에 따른 본인 식별
            절차에 이용
            <br />
            2. 이메일주소(뉴스레터 수신여부) : 고지사항 전달, 본인 의사 확인,
            불만 처리 등 원활한 의사소통 경로의 확보, 새로운 서비스, 신상품이나
            이벤트 정보 등 최신 정보의 안내
            <br />
            3. 주소, 전화번호 : 예약 및 구매 물품 배송에 대한 정확한 배송지의
            확보
            <br />
            4. 그 외 선택항목 : 개인맞춤 서비스를 제공하기 위한 자료
            <br />
            <br />제 4조 (개인정보의 공유 및 제공)
            <br />- 스테이포레스트는 회원에 대하여 보다 더 질 높은 서비스 제공
            등을 위해 아래와 같이 귀하의 개인정보를 제공하고 있습니다.
            <br />
            1. 제공정보의 이용 목적 : 제휴 마케팅, 예약 고객의 응대 및 서비스
            제공 제공 정보의 <br />
            2. 보유 및 이용 기간 : 스테이포레스트 회원 탈퇴 시까지
            <br />
            3. 제공 대상 : 숙박 제휴 업체 및 프로모션, 이벤트 제휴 업체
            <br />
            4. 제공 정보 : 이름, 이메일, 핸드폰 번호, 주소, 예약정보(예약일,
            숙소명)
            <br />
            5. 제공 정보의 보유 및 이용 기간 : 스테이포레스트 회원 탈퇴 시까지
            <br />- 단, 다음은 예외로 합니다.
            <br />
            1. 관계법령에 의하여 수사상의 목적으로 관계기관으로부터의 요구가
            있을 경우
            <br />
            2. 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우
            <br />
            3. 이용자들이 사전에 동의한 경우
            <br />
            4. 그러나 예외사항에서도 관계법령에 의하거나 수사기관의 요청에 의해
            정보를 제공한 경우에는 이를 당사자에게 고지하는 것을 원칙으로
            운영하고 있습니다. 법률상의 근거에 의해 부득이하게 고지를 하지 못할
            수도 있습니다. 본래의 수집목적 및 이용목적에 반하여 무분별하게
            정보가 제공되지 않도록 최대한 노력하겠습니다.
            <br />
            <br />제 5조 (수집한 개인정보 취급 위탁)
            <br />
            1. (주)비바퍼블리카, 네이버 파이낸셜 : 상품 구매에 필요한 신용카드,
            현금결제 등의 결제정보 전송
            <br />
            2. 케이티하이텔주식회사 : SMS, MMS등 문자메세지 전송
            <br />
            3. 다이렉트샌드: 알림톡 발송 <br />
            4. 스티비: 이메일 전송
            <br />
            5. Amazon Web Service Inc: 인프라 제공
            <br />
            6. [예약상품판매
            제휴업체](https://www.notion.so/9b9cf71e569445c0b79a7841ea411158) :
            예약확인 및 고객응대 업무
            <br />
            7. 채널코퍼레이션: C/S 상담 업무 <br />
            <br />제 6조 (개인정보의 보유, 이용기간)
            <br />
            1. 귀하의 개인정보는 회사가 신청인에게 서비스를 제공하는 기간 동안에
            한하여 보유하고 이를 활용합니다. 다만 다른 법률에 특별한 규정이 있는
            경우에는 관계법령에 따라 보관합니다.- 회원가입정보 : 회원가입을
            탈퇴하거나 회원에 제명된 때<br />
            - 대금지급정보 : 대금의 완제일 또는 채권소명시효기간이 만료된 때
            <br />
            - 배송정보 : 물품 또는 서비스가 인도되거나 제공된 때<br />
            - 설문조사, 이벤트 등 일시적 목적을 위하여 수집한 경우 : 당해
            설문조사, 이벤트 등이 종료한 때<br />
            2. 위 개인정보 수집목적 달성시 즉시파기 원칙에도 불구하고 다음과
            같이 거래 관련 권리 의무 관계의 확인 등을 이유로 일정기간 보유하여야
            할 필요가 있을 경우에는 전자상거래 등에서의 소비자보호에 관한 법률
            등에 근거하여 일정기간 보유합니다.- 계약 또는 청약철회 등에 관한
            기록 : 3년
            <br />
            - 대금결제 및 재화 등의 공급에 관한 기록 : 3년
            <br />
            - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
            <br />
            - 설문조사, 이벤트 등 일시적 목적을 위하여 수집한 경우 : 당해
            설문조사, 이벤트 등의 종료 시<br />
            3. 귀하의 동의를 받아 보유하고 있는 거래정보 등을 귀하께서 열람을
            요구하는 경우 스테이포레스트는 지체없이 그 열람, 확인 할 수 있도록
            조치합니다.
            <br />
            <br />제 7조 (개인정보의 파기 절차)
            <br />
            스테이포레스트는 원칙적으로 개인정보 수집 및 이용목적이 달성된
            후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과
            같습니다.
            <br />
            <br />
            1. 파기절차: 귀하가 회원가입 등을 위해 입력하신 정보는 목적이 달성된
            후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(제6조
            개인정보의 보유, 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.
            동 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른
            목적으로 이용되지 않습니다.
            <br />
            2. 파기방법 : 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을
            통하여 파기하고, 전자적 파일형태로 저장된 개인정보는 기록을 재생할
            수 없는 기술적 방법을 사용하여 삭제합니다.
            <br />
            <br />제 8조 (개인정보 처리를 위한 기술적, 관리적 대책)
            <br />
            <br />
            -기술적 대책
            <br />
            스테이포레스트는 귀하의 개인정보를 처리함에 있어 개인정보가 분실,
            도난, 누출, 변조 또는 훼손되지 않도록 안정성 확보를 위하여 다음과
            같은 기술적 대책을 강구하고 있습니다.
            <br />
            1. 스테이포레스트는 방화벽(Fire Wall)과 Nescape사의 채널보안방식인
            SSL(Secure Socket Layer)방식 암호화 체계 시스템 등을 갖추어 개인정보
            보호에 만전을 기하고 있습니다.
            <br />
            2. 세계적인 보안 인증 회사로부터 인증서를 발급 받아 스테이포레스트를
            사칭하는 것을 방지하여 고객께 피해가 가지 않도록 하고 있습니다.
            <br />
            3. 귀하의 개인정보는 비밀번호에 의해 보호되며, 파일 및 전송 데이터를
            암호화하거나 파일 잠금기능(Lock)을 사용하여 중요한 데이터는 별도의
            보안기능을 통해 보호되고 있습니다.
            <br />
            4. 스테이포레스트는 암호알고리즘을 이용하여 네트워크 상의 개인정보를
            안전하게 전송할 수 있는 보안장치(SSL 또는 SET)를 채택하고 있습니다.
            <br />
            <br />
            -관리적 대책
            <br />
            스테이포레스트는 귀하의 개인정보에 대한 접근 권한을 최소한의
            인원으로 제한하고 있습니다. 그 최소한의 인원에 해당하는 자는 다음과
            같습니다.
            <br />
            1. 이용자를 직접 상대로 하여 마케팅 업무를 수행하는 자<br />
            2. 개인정보보호책임자 및 담당자 등 개인정보보호업무를 수행하는 자
            <br />
            3. 기타 업무상 개인정보의 처리가 불가피한 자<br />
            - 개인정보를 처리하는 직원을 대상으로 새로운 보안 기술 습득 및
            개인정보 보호 의무 등에 관해 정기적인 사내교육 및 외부 위탁교육을
            실시하고 있습니다.
            <br />
            - 입사 시 전 직원의 보안서약서를 통하여 사람에 의한 정보유출을
            사전에 방지하고 개인정보처리방침에 대한 이행사항 및 직원의
            준수여부를 감사하기 위한 내부절차를 마련하고 있습니다.
            <br />
            - 개인정보 관련 처리자의 업무 인수인계는 보안이 유지된 상태에서
            철저하게 이뤄지고 있으며 입사 및 퇴사 후 개인정보 사고에 대한 책임을
            명확화하고 있습니다.
            <br />
            - 전산실 및 자료 보관실 등을 특별 보호구역으로 설정하여 출입을
            통제하고 있습니다.
            <br />
            - 스테이포레스트는 이용자 개인의 실수나 기본적인 인터넷의 위험성
            때문에 일어나는 일들에 대해 책임을 지지 않습니다. 회원 개개인이
            본인의 개인정보를 보호하기 위해서 자신의 ID 와 비밀번호를 적절하게
            관리하고 여기에 대한 책임을 져야 합니다.
            <br />
            - 그 외 내부 관리자의 실수나 기술관리 상의 사고로 인해 개인정보의
            상실, 유출, 변조, 훼손이 유발될 경우 스테이포레스트는 즉각 귀하께
            사실을 알리고 적절한 대책과 보상을 강구할 것입니다.
            <br />
            <br />제 9조 (링크사이트)
            <br />
            스테이포레스트는 귀하께 다른 회사의 웹사이트 또는 자료에 대한 링크를
            제공할 수 있습니다. 이 경우 스테이포레스트 외부사이트 및 자료에 대한
            아무런 통제권이 없으므로 그로부터 제공받는 서비스나 자료의 유용성에
            대해 책임질 수 없으며 보증할 수 없습니다. 스테이포레스트가 포함하고
            있는 링크를 클릭(Click)하여 타 사이트(Site)의 페이지로 옮겨갈 경우
            해당 사이트의 개인정보처리방침은 스테이포레스트와 무관하므로 새로
            방문한 사이트의 정책을 검토해 보시기 바랍니다.
            <br />
            <br />제 10조 (게시물)
            <br />
            1. 스테이포레스트는 귀하의 게시물을 소중하게 생각하여 변조, 훼손,
            삭제되지 않도록 최선을 다하여 보호합니다.그러나 다음의 경우는 그렇지
            아니합니다.
            <br />
            - 스팸(spam)성 게시물 및 상업성 게시물 (예: 행운의 편지, 특정사이트
            광고 등)
            <br />
            - 타인을 비방할 목적으로 허위 사실을 유포하여 타인의 명예를 훼손하는
            글<br />
            - 동의 없는 타인의 신상공개, 제3자의 저작권 등 권리를 침해하는 내용,
            기타 게시판 주제와 다른 내용의 게시물
            <br />
            2. 스테이포레스트는 바람직한 게시판 문화를 활성화하기 위하여 동의
            없는 타인의 신상 공개 시 특정부분 이동 경로를 밝혀 오해가 없도록
            하고 있습니다. 그 외의 경우 명시적 또는 개별적인 경고 후 삭제 조치할
            수 있습니다.
            <br />
            3. 근본적으로 게시물에 관련된 제반 관리와 책임은 작성자 개인에게
            있습니다. 또 게시물을 통해 자발적으로 공개된 정보는 보호받기
            어려우므로 정보 공개 전에 심사 숙고하시기 바랍니다.
            <br />
            <br />제 11조 (이용자의 권리와 의무)
            <br />
            1. 귀하의 개인정보를 최신의 상태로 정확하게 입력하여 불의의 사고를
            예방해 주시기 바랍니다. 귀하가 입력한 부정확 한 정보로 인해 발생하는
            사고의 책임은 이용자 자신에게 있으며 타인 정보의 도용 등 허위정보를
            입력할 경우 회원 자격이 상실될 수 있습니다.
            <br />
            2. 귀하는 개인정보를 보호받을 권리와 함께 스스로를 보호하고 타인의
            정보를 침해하지 않을 의무도 가지고 있습니다. 비밀번호를 포함한
            귀하의 개인정보가 유출되지 않도록 조심 하시고 게시물을 포함한 타인의
            개인정보를 훼손하지 않도록 유의해 주십시오. 만약 이 같은 책임을
            다하지 못하고 타인의 정보 및 존엄성을 훼손할 시에는 ‘정보통신망이용
            촉진및정보보호등에관한법률’ 등에 의해 처벌받을 수 있습니다.
            <br />
            3. 온라인상에서(게시판, E-mail, 또는 채팅 등) 귀하가 자발적으로
            제공하는 개인정보는 다른 사람들이 수집하여 사용할 수 있음을 항상
            유념하시기 바랍니다. 즉, 공개적으로 접속할 수 있는 온라인상에서
            개인정보를 게재하는 경우, 다른 사람들로부터 원치 않는 메시지를
            답장으로 받게 될 수도 있음을 의미합니다.
            <br />
            4. 공공장소에서 이용할 때에는 자신의 비밀번호가 노출되지 않도록 하고
            서비스 이용을 마친 후에는 반드시 로그아웃을 해주시기 바랍니다.
            <br />
            <br />제 12조 (이용자 및 법정 대리인의 권리와 그 행사방법)
            <br />
            1. 귀하는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할
            수 있으며 가입해지를 요청할 수도 있습니다.
            <br />
            2. 귀하의 개인정보 조회, 수정 또는 가입해지를 위해서는
            스테이포레스트에 서면, 전화 또는 이메일로 연락하시면 지체 없이
            조치하겠습니다.
            <br />
            - 스테이포레스트 대표번호 : 1670-4123
            <br />
            - 스테이포레스트 메일 : help@stayfolio.com
            <br />
            - 스테이포레스트 팩스 : 02-738-1599
            <br />
            3. 스테이포레스트는 귀하의 요청에 의해 해지 또는 삭제된 개인정보는
            “제 6조 개인정보의 보유, 이용기간’에 명시된 바에 따라 처리하고 그
            외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
            <br />
            <br />제 13조 (개인정보 자동 수집 장치의 설치, 운영 및 그 거부에
            관한 사항)
            <br />
            1. 쿠키(cookie)란?
            <br />
            스테이포레스트는 귀하에 대한 정보를 저장하고 수시로 찾아내는
            쿠키(cookie)를 사용합니다. 쿠키는 웹사이트가 귀하의 컴퓨터
            브라우저(넷스케이프, 인터넷익스플로러 등)로 전송하는 소량의
            정보입니다. 귀하께서 웹사이트에 접속을 하면 스테이포레스트의 서버는
            귀하의 브라우저에 추가정보를 임시로 저장하여 접속에 따른 성명 등의
            추가 입력 없이 스테이포레스트의 서비스를 제공할 수 있습니다. 쿠키는
            귀하의 컴퓨터는 식별하지만 귀하를 개인적으로 식별하지는 않습니다.
            또한 귀하는 쿠키에 대한 선택권이 있습니다.
            <br />
            2. 스테이포레스트의 쿠키 운용
            <br />
            스테이포레스트는 이용자의 편의를 위하여 쿠키를 운영합니다.
            스테이포레스트가 쿠키를 통해 수집하는 정보는 회원ID에 한하며, 그
            외의 다른 정보는 수집하지 않습니다. 스테이포레스트가 쿠키를 통해
            수집한 회원 ID는 다음의 목적을 위해 사용됩니다.
            <br />
            - 개인의 관심 분야에 따란 차별화된 정보를 제공
            <br />
            - 쇼핑한 품목들에 대한 정보와 장바구니 서비스를 제공
            <br />
            - 회원과 비회원의 접속빈도 또는 머문 시간 등을 분석하여 서비스 개편
            및 마케팅에 활용
            <br />
            3. 쿠키는 브라우저의 종료시나 로그아웃 시 만료됩니다.
            <br />
            4. 쿠키의 설치 및 거부
            <br />
            - 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 귀하는
            웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가
            저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도
            있습니다.
            <br />
            - 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 스테이포레스트
            일부 서비스는 이용에 어려움이 있을 수 있습니다.
            <br />
            - 쿠키 설치 허용 여부를 지정하는 방법
            <br />
            - Internet Explorer의 경우 : [도구] 메뉴에서 [인터넷 옵션]을 선택 →
            [개인정보]를 클릭 → [고급]을 클릭 → 쿠키 허용여부를 선택
            <br />
            - Safari의 경우 :MacOS 상단 좌측 메뉴바에서 [Safari]에서
            [환경설정]을 선택 → [환경설정] 창에서 [보안]으로 이동하여 쿠키
            허용여부 선택
            <br />
            <br />제 14조 (개인정보 보호문의처)
            <br />
            1. 당사는 귀하의 의견을 소중하게 생각하며, 귀하는 의문사항으로부터
            언제나 성실한 답변을 받을 권리가 있습니다.
            <br />
            2. 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기
            위하여 아 래와 같이 관련 부서를 지정하고 있습니다.
            <br />
            3. 고객 센터의 연락처는 다음과 같습니다.
            <br />
            스테이포레스트 고객센터
            <br />
            - 이메일 : help@stayfolio.com
            <br />
            - 전화번호 : 1670-4123
            <br />
            - 팩스번호 : 02-738-1599
            <br />
            - 주소 : 서울시 종로구 통인동 74번지 2F 스테이포레스트
            <br />
            4. 전화상담은 월~금요일 오전 10:00 ~ 오후 06:30에만 가능합니다.
            (주말, 공휴일 휴무)
            <br />
            5. 전자우편이나 팩스 및 우편을 이용한 상담은 접수 후 24시간 내에
            성실하게 답변 드리겠습니다. 다만 근무시간 이후 또는 주말 및
            공휴일에는 익일 처리하는 것을 원칙으로 합니다.
            <br />
            6. 기타 개인정보에 관한 상담이 필요한 경우에는 개인정보침해신고센터,
            대검찰청 인터넷범죄수사센터, 경찰청 사이버테러대응센터 등으로
            문의하실 수 있습니다.
            <br />
            <br />
            개인정보침해신고센터
            <br />
            118 / http://www.118.or.kr/
            <br />
            118@kisa.or.kr / 02-3480-3600
            <br />
            <br />
            대검찰청 인터넷범죄수사센터
            <br />
            http://icic.sppo.go.kr/ 02-392-0330
            <br />
            <br />
            경찰청 사이버테러대응센터
            <br />
            http://ctrc.go.kr/
            <br />
            <br />제 15조 (개인정보보호책임자 및 담당부서)
            <br />
            스테이포레스트는 귀하가 좋은 정보를 안전하게 이용할 수 있도록 최선을
            다하고 있습니다. 개인정보를 보호하는데 있어 귀하께 고지한 사항들에
            반하는 사고가 발생할 시에 개인정보보호책임자가 모든 책임을 집니다.
            그러나 기술적인 보완조치를 했음에도 불구하고, 해킹 등 기본적인
            네트워크상의 위험성에 의해 발생하는 예기치 못한 사고로 인한 정보의
            훼손 및 방문자가 작성한 게시물에 의한 각종 분쟁에 관해서는 책임이
            없습니다. 귀하의 개인정보를 취급하는 책임자 및 담당자는 다음과
            같으며 개인정보 관련 문의사항에 신속하고 성실하게 답변해드리고
            있습니다.
            <br />
            <br />
            -개인정보 보호책임자
            <br />
            성명: 백경훈
            <br />
            소속: 플랫폼파트 <br />
            이메일: hello@stayfolio.com
            <br />
            전화: 070-5158-9012
            <br />
            팩스: 02-738-1599
            <br />
            -문의처
            <br />
            부서명: 고객센터
            <br />
            이메일: help@stayfolio.com
            <br />
            전화: 1670-4123
            <br />
            팩스: 02-738-1599
            <br />
            <br />제 16조 (고지의 의무)
            <br />
            개인정보처리방침은 2015년 04월 20일부터 적용됩니다. 내용의 추가,
            삭제 및 수정이 있을 시에는 개정 최소 7일전부터 홈페이지의 공지사항을
            통하여 고지할 것입니다. 또한 개인정보처리방침에 버전번호 및 개정일자
            등을 부여하여 개정여부를 쉽게 알 수 있도록 하고 있습니다.
            <br />- 개인정보처리방침 버전번호 : Ver.2.01
            <br />- 개인정보처리방침 변경공고일자 : 2021년 11월 16일
            <br />- 개인정보처리 시행일자 : 2021년 11월 16일
            <br />
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
            스테이포레스트에서 제공하는 이벤트 및 혜택 등 다양한 정보를
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
            <br />- 회원 정보(스테이포레스트 아이디, 이름, 휴대폰 번호, 이메일,
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
          onClick={() => navigate('/login')}
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
