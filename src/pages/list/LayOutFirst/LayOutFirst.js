import { useState } from 'react';
import { useEffect } from 'react';
import SmallModal from '../SmallModal/SmallModal';
import SmallModalFirstLayout from './Child/SubLayoutFirst';

const peopleObj = {};

function LayOutFirst({ setHeadCount }) {
  const [people, setPeople] = useState({});

  useEffect(() => {
    Object.assign(peopleObj, people);
  }, [people]);

  function putObj(e) {
    e.preventDefault();
    const peopleArr = Object.entries(peopleObj);
    setHeadCount(peopleArr);
  }

  return (
    <>
      <SmallModal title="인원" />
      <section
        className={{
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
          }}
        >
          적용하기
        </button>
      </section>
    </>
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
