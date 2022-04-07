import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SmallModal from '../SmallModal/SmallModal';
import CheckBox from './Child/CheckBox';

function LayOutThird({ checkBoxTitle, setCheckBoxTitle }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [totalCheck, setTotalCheck] = useState(false);
  const [eachCheck, setEachCheck] = useState(false);
  const [names, setNames] = useState([]);
  const [requestBody, setRequestBody] = useState({
    모두: false,
    펜션: false,
    게스트하우스: false,
    호텔: false,
    '렌탈 하우스': false,
  });

  function historyHandler() {
    const query = `${names}`;
    navigate(`?keyword=${names}`);
  }

  function clickSendRequset() {
    if (totalCheck) {
      setRequestBody({
        모두: totalCheck,
        펜션: totalCheck,
        게스트하우스: totalCheck,
        호텔: totalCheck,
        '렌탈 하우스': totalCheck,
      });
      return;
    }
    setRequestBody({
      모두: totalCheck,
      펜션: names.includes('펜션'),
      게스트하우스: names.includes('게스트하우스'),
      호텔: names.includes('호텔'),
      '렌탈 하우스': names.includes('렌탈 하우스'),
    });
  }

  // function search() {
  //   fetch('', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  function changetitle() {
    if (names.length === 0) {
      setCheckBoxTitle('스테이 유형');
    }
    if (names.length > 1) {
      setCheckBoxTitle(`${names[0]}외 ${names.length - 1}`);
    }
    if (names.length === 1) {
      setCheckBoxTitle(`${names[0]}`);
    }
    if (checkBoxTitle === '전체') {
      setCheckBoxTitle('전체');
    }
  }

  function resetTitle() {
    if (totalCheck) {
      setCheckBoxTitle('전체');
      return;
    }

    if (!totalCheck) {
      setCheckBoxTitle('-');
    }
  }

  function resetNames() {
    if (!totalCheck && checkBoxTitle === '-') {
      setNames([]);
    }
  }

  useEffect(() => {
    clickSendRequset();
  }, [count]);

  useEffect(() => {
    resetNames();
    resetTitle();
  }, [totalCheck]);

  useEffect(() => {
    setCheckBoxTitle('스테이 유형');
  }, []);

  function closeModal(e) {
    const parentStyleVisible =
      e.target.parentElement.parentElement.style.visibility;
    let judge = false;
    if (parentStyleVisible === 'visible') {
      judge = true;
    }
    e.target.parentElement.parentElement.style.visibility = judge && 'hidden';
  }

  return (
    <section>
      <SmallModal title="스테이 유형" />
      <button
        style={styles}
        onClick={e => {
          clickSendRequset();
          // search();
          resetNames();
          changetitle();
          closeModal(e);
          historyHandler();
        }}
      >
        적용하기
      </button>
      <section style={{ marginTop: 20 }}>
        <CheckBox
          content="전체"
          checked={setTotalCheck}
          total={totalCheck}
          setCount={setCount}
        />
        {mokDataCategorie.map(data => (
          <CheckBox
            key={data.id}
            setNames={setNames}
            content={data.name}
            checked={setEachCheck}
            total={totalCheck}
            setCount={setCount}
          />
        ))}
      </section>
    </section>
  );
}

export default LayOutThird;

const styles = {
  margin: 'auto',
  border: 'none',
  borderRadius: 50,
  paddingTop: 10,
  paddingRight: 53,
  paddingBottom: 10,
  paddingLeft: 53,
  width: 'max-content',
  backgroundColor: 'black',
  color: 'whitesmoke',
};

const mokDataCategorie = [
  { id: 4, name: '펜션' },
  { id: 1, name: '게스트하우스' },
  { id: 2, name: '호텔' },
  { id: 3, name: '렌탈 하우스' },
];
