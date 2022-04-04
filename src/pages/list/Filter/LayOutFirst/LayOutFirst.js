import { useState } from 'react';
import { useEffect } from 'react';
import SmallModal from '../SmallModal/SmallModal';
import SmallModalFirstLayout from './Child/SubLayoutFirst';

const peopleObj = {};

function LayOutFirst({ setHeadCountArr }) {
  const [people, setPeople] = useState({});

  useEffect(() => {
    Object.assign(peopleObj, people);
  }, [people]);

  function putObj(e) {
    e.preventDefault();
    const peopleArr = Object.entries(peopleObj);
    setHeadCountArr(peopleArr);
  }

  function closeModal(e) {
    const parentStyleVisible =
      e.target.parentElement.parentElement.parentElement.style.visibility;
    let judge = false;
    if (parentStyleVisible === 'visible') {
      judge = true;
    }
    e.target.parentElement.parentElement.parentElement.style.visibility =
      judge && 'hidden';
  }

  return (
    <section>
      <SmallModal title="인원" />
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 10,
        }}
      >
        {firstLayoutArray.map(data => (
          <SmallModalFirstLayout
            key={firstLayoutArray.indexOf(data)}
            content={data[0]}
            smallContent={data[1]}
            setPeople={setPeople}
          />
        ))}
        <button
          style={styles}
          onClick={e => {
            putObj(e);
            closeModal(e);
          }}
        >
          적용하기
        </button>
      </section>
    </section>
  );
}

export default LayOutFirst;

const firstLayoutArray = [
  ['성인', '청소년 포함'],
  ['아동', '24개월~12세'],
  ['영아', '24개월 미만'],
];

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
