import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SmallModal from '../SmallModal/SmallModal';
import CheckBox from './Child/CheckBox';
import BlackButton from '../../../../../components/BlackButton/BlackButton';

function LayOutThird({ setCheckBoxTitle, onHidden }) {
  const navigate = useNavigate();
  const [totalCheck, setTotalCheck] = useState(false);
  const [checkedCategoriesArr, setcheckedCategoriesArr] = useState([]);
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

  const checkedCatogories = () => {
    const temptArr = [];
    !totalCheck &&
      checks.forEach((data, index) => {
        data && temptArr.push(mokDataCategorie[index].name);
      });
    setcheckedCategoriesArr(temptArr);
  };

  function historyHandler() {
    let query = `category=`;
    checkedCategoriesArr.forEach(name => {
      if (name === '펜션') {
        query += 'pension,';
      }
      if (name === '게스트하우스') {
        query += 'guest,';
      }
      if (name === '호텔') {
        query += 'hotel,';
      }
      if (name === '렌탈 하우스') {
        query += 'rental,';
      }
    });
    navigate(`/list?${query}`);
  }

  function changetitle() {
    if (checkedCategoriesArr.length === 0) {
      setCheckBoxTitle('스테이 유형');
    }
    if (checkedCategoriesArr.length > 1) {
      setCheckBoxTitle(
        `${checkedCategoriesArr[0]}외 ${checkedCategoriesArr.length - 1}`
      );
    }
    if (checkedCategoriesArr.length === 1) {
      setCheckBoxTitle(`${checkedCategoriesArr[0]}`);
    }
  }

  function resetcheckedCategoriesArr() {
    setcheckedCategoriesArr([]);
  }
  useEffect(() => {
    checkedCatogories();
  }, [checks]);

  return (
    <section>
      <SmallModal title="스테이 유형" />
      <BlackButton
        content="적용하기"
        onClick={e => {
          checkedCatogories();
          changetitle();
          onHidden('hidden');
          historyHandler();
          resetcheckedCategoriesArr();
        }}
      />
      <section style={{ marginTop: 20 }}>
        <CheckBox content="전체" checked={totalCheck} onChecked={allCheck} />
        {mokDataCategorie.map((data, index) => (
          <CheckBox
            key={data.id}
            setcheckedCategoriesArr={setcheckedCategoriesArr}
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
