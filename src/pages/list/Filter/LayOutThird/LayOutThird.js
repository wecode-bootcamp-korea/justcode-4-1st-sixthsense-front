import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SmallModal from '../SmallModal/SmallModal';
import CheckBox from './Child/CheckBox';

function LayOutThird({ checkBoxTitle, setCheckBoxTitle }) {
  const navigate = useNavigate();
  const [totalCheck, setTotalCheck] = useState(false);
  const [eachCheck, setEachCheck] = useState(false);
  const [names, setNames] = useState([]);

  function historyHandler() {
    const temptArr = [];
    let query = `category=`;
    names.forEach(name => {
      if (name === '펜션') {
        temptArr.push('pension');
      }
      if (name === '게스트하우스') {
        temptArr.push('guest');
      }
      if (name === '호텔') {
        temptArr.push('hotel');
      }
      if (name === '렌탈 하우스') {
        temptArr.push('rental');
      }
    });
    let subquery = '';
    temptArr.forEach(data => {
      subquery += `${data},`;
    });
    query += subquery;
    navigate(`/list?${query}`);
  }

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
          resetNames();
          changetitle();
          closeModal(e);
          historyHandler();
        }}
      >
        적용하기
      </button>
      <section style={{ marginTop: 20 }}>
        <CheckBox content="전체" checked={setTotalCheck} total={totalCheck} />
        {mokDataCategorie.map(data => (
          <CheckBox
            key={data.id}
            setNames={setNames}
            content={data.name}
            checked={setEachCheck}
            total={totalCheck}
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
