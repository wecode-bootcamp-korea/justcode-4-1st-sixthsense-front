# 스테이 포레스트

## 1. Introduce

- 스테이폴리오 클론코딩 프로젝트

> 클론코딩: 개발에만 집중할 수 있도록 기존 웹의 기획과 디자인을 참고하여 하나의 사이트를 완성해보는 프로젝트

- [프론트 깃헙](https://github.com/wecode-bootcamp-korea/justcode-4-1st-sixthsense-front)
- [백 깃헙](https://github.com/wecode-bootcamp-korea/justcode-4-1st-sixthsense-back)

<br>

## 2. 개발 기간 및 인원

- 개발 기간: 2022/03/28 ~ 2022/04/08 (2주)
- 개발 인원: Fullstack 5명( [김수빈](https://velog.io/@shorrysorry), [유다송](https://velog.io/@sonaki0811), [이정민](https://velog.io/@jml22), [임근홍](https://velog.io/@xcc629), [전하은](https://velog.io/@hani2525))

<br>

## 3. DEMO

<br>

- 프론트

---

<br>

[![스테이포레스트 데모](https://img.youtube.com/vi/WkTQ5fGVEXw/0.jpg)](https://www.youtube.com/watch?v=WkTQ5fGVEXw&feature=youtu.be)

- 이미지 클릭시 스테이포레스트 시연 영상을 보실 수 있습니다.

<br>

- 백엔드

---

[식스센스 백엔드 API 문서](https://documenter.getpostman.com/view/20004181/Uyr4Lfof)

<br>

## 4. TECH

- Front-End: React, React hook, React-Router-Dom, Sass,
- Back-End: Express, Prisma, Mysql
- 라이브러리: React-icons, moment.js

<br>

## 5. 구현 기능

<br>

### [프론트엔드]

<br>

#### 메인 페이지

---

- Modal - 뒷페이지 스크롤 방지 기능 구현.
- 언제떠날까요 Modal - moment.js를 활용한 커스텀 캘린더 제작.
- 슬라이드 Big / Medium / Small - 페이지가 무한정 넘어갈 수 있게 기능 구현.

<br>

#### 리스트 페이지

---

- react.js로 공통 컴포넌트(검은 버튼) 만들어 재사용, prop으로 onClick event 부여.
- 인원, 가격범위, 스테이 유형 버튼 공통된 요소를 포함한 컴포넌트 작성, prop으로 부모와 자식 간 데이터 주고 받게 함.
- 인원, 가격범위, 스테이유형 클릭시 뜨는 작은 하위 창의 유무와 동시에 2개 이상 뜨지 못하도록 로직 작성하여 state로 관리.
- useState로 인원, 가격범위, 스테이유형 버튼의 input 값, 버튼 text 관리.
- fetch, then으로 숙소 리스트 API 연결 및 비동기로 받은 response 데이터를 useState 사용해 상태 관리.
- 스테이유형 체크박스 클릭후 적용하기 버튼 누를 시 스테이 유형이 query parameter에 추가, useNavigate로 query가 포함된 url로 변경.
- useLocation().search로 현재 URL에서 query parameter를 가져와서 체크된 유형 숙소리스트 GET 메소드 URI 작성해 request.
- map 메소드를 활용하여 API에서 받은 json 데이터 렌더링.
- 리셋버튼 클릭시 useNavigate로 원래의 list 페이지로 이동.
- useEffect와 dependency로 렌더링 타이밍 관리.

<br>

### 상세 페이지

---

- 숙소 사진 슬라이드
- 객실 사진 슬라이드
- 좋아요 UI
- 숙소 정보 API로 받아와 화면에 출력
  → 숙소 설명 | 숙소의 특징 | 숙소 근처 명소
- 지도 API
- FAQ

<br>

### 회원가입 및 로그인

---

- 회원가입 - 정규식 표현을 통한 회원정보 유효성 검사 기능 및 체크박스 all 체크 기능 구현
- 로그인 - 정규식 표현을 이용한 유효성 검사

<br>
<br>

### [백엔드]

<br>

### API 공통 & 패턴 및 테이블 설계

---

- [dbdiagram.io](http://dbdiagram.Id) 사이트 이용하여 관계형으로 테이블 설계.
- prisma를 사용하여 schema.prisma의 테이블 작성 후 migration.
- layered patten 적용해 controller, service, model로 구분.
- DB의 자원을 기준으로 users, dormitories, rooms로 URI 구분.

<br>

### GET dormitories , GET dormitories/images, GET dormitories/cities, GET rooms/images

---

- GET method로 숙소 전체 리스트, 이미지 전체, city 전체, 방 이미지 전체 가져오는 API 작성.
- statusCode: 서버문제(500) / Ok(200).
- model단에서 쿼리문 작성하여 service, controller로 차례대로 넘김.

<br>

### POST users/login , POST users/signup, Authorization Middleware

---

- Layerd Pattern으로 기능 분리
- Post method를 통해 필요한 값을 전달받아 회원가입 혹은 로그인을 하는 API 작성.
- login의 경우 해당 id에 대한 token이 발행되고, 로그인이 필요한 작업 실행 시, Authorization 미들웨어를 통해 유효한 토큰인지 인증인가를 거쳐서 실행됨.
- statusCode: 서버문제(500) / Ok(200) / Created(201)

<br>
<br>

---

---

<br>

- _이 프로젝트는 스테이폴리오 사이트를 참조하여 학습목적으로 만들었습니다._
- _실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다._
- _이 프로젝트에서 사용하고 있는 모든 이미지들은 무료 이미지 및 자가제작 이미지들입니다._
