import { useState, useEffect, useRef } from 'react';

import ListWhereModal from './ListWhereModal/ListWhereModal';

import style from './ListWhereButton.module.css';

function ListWhereButton() {
  const [title, setTitle] = useState('국내 전체');
  const [modalActive, setModalActive] = useState(0);
  const modalWhereRef = useRef();

  const openModal = e => {
    e.currentTarget.id === 'modal1' ? setModalActive(1) : setModalActive(2);
  };
  const closeModal = () => setModalActive(0);

  // 모달 ON/OFF 상태 관리
  useEffect(() => {
    if (modalActive === 1) {
      modalWhereRef.current.style.display = 'block';
    } else {
      modalWhereRef.current.style.display = 'none';
    }
  }, [modalActive]);

  // 모달 ON 되었을 때, 외부 스크롤 방지 관리
  useEffect(() => {
    if (modalActive) {
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        width: 100%;`;
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [modalActive]);

  return (
    <section className={style.searchBar}>
      <button id="modal1" onClick={openModal}>
        {title}
      </button>
      <ListWhereModal
        setTitle={setTitle}
        modalRef={modalWhereRef}
        closeModal={closeModal}
      />
    </section>
  );
}

export default ListWhereButton;
