import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SmallModal from '../SmallModal/SmallModal';
import CheckBox from './Child/CheckBox';
import BlackButton from '../../../../../components/BlackButton/BlackButton';

function LayOutThird({ checkBoxTitle, setCheckBoxTitle }) {
  const navigate = useNavigate();
  const [totalCheck, setTotalCheck] = useState(false);
  const [names, setNames] = useState(
    Array(mokDataCategorie.length).fill(
      mokDataCategori)
    )
  );
  const [checks, setChecks] = useState(
    Array(mokDataCategorie.length).fill(false)
  );

  const allCheck = () => {
    setChecks(Array(checks.length).fill(!totalCheck));
    setTotalCheck(!totalCheck);
  };

  const individualCheck = index => {
    setChecks(prev => {
      const newArr = [...prev];
      newArr[index] = !newArr[index];
      return newArr;
    });
  };

  console.log(names);
  // const showChecks = () => {
  //   checks.forEach((data, index) => {
  //     console.log(index, data);
  //     data && setNames(prev => {[mokDataCategorie[index].name]);
  //   });
  // };

  function historyHandler() {
    let query = `category=`;
    names.forEach(name => {
      if (name === '펜션') {
        query += 'pension,';
      }
      if (name === '게스트하우스') {
        query += 'guest,';
      }
      if (name === '호텔') {
        query += 'hotel, ';
      }
      if (name === '렌탈 하우스') {
        query += 'rental, ';
      }
    });

    console.log(query);
    navigate(`/list?${query}`);
  }

  // function changetitle() {
  //   if (names.length === 0) {
  //     setCheckBoxTitle('스테이 유형');
  //   }
  //   if (names.length > 1) {
  //     setCheckBoxTitle(`${names[0]}외 ${names.length - 1}`);
  //   }
  //   if (names.length === 1) {
  //     setCheckBoxTitle(`${names[0]}`);
  //   }
  // }

  // function resetTitle() {
  //   if (totalCheck) {
  //     setCheckBoxTitle('전체');
  //     return;
  //   }

  //   if (!totalCheck) {
  //     setCheckBoxTitle('-');
  //   }
  // }

  // function resetNames() {
  //   setNames([]);
  // }
  // useEffect(() => {
  //   resetNames();
  // }, [totalCheck]);

  // useEffect(() => {
  //   setCheckBoxTitle('스테이 유형');
  // }, []);

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
      <BlackButton
        content="적용하기"
        onClick={e => {
          // showChecks();
          // resetNames();
          // changetitle();
          closeModal(e);
          historyHandler();
        }}
      />
      <section style={{ marginTop: 20 }}>
        <CheckBox content="전체" checked={totalCheck} onChecked={allCheck} />
        {mokDataCategorie.map((data, index) => (
          <CheckBox
            key={data.id}
            setNames={setNames}
            content={data.name}
            checked={checks[index]}
            onChecked={() => individualCheck(index)}
            total={totalCheck}
          />
        ))}
      </section>
    </section>
  );
}

export default LayOutThird;

const mokDataCategorie = [
  { id: 4, name: '펜션' },
  { id: 1, name: '게스트하우스' },
  { id: 2, name: '호텔' },
  { id: 3, name: '렌탈 하우스' },
];
