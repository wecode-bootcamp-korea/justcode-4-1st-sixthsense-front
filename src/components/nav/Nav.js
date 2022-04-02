import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BsCalendar4 } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import style from './Nav.module.css';
import WhereModal from '../whereModal/WhereModal';
import WhenModal from '../whenModal/WhenModal';

function Nav() {
  const [modalActive, setModalActive] = useState(0);
  const modalWhereRef = useRef();
  const modalWhenRef = useRef();

  const openModal = e => {
    e.currentTarget.id === 'modal1' ? setModalActive(1) : setModalActive(2);
  };
  const closeModal = () => setModalActive(0);

  // 모달 ON/OFF 상태 관리
  useEffect(() => {
    if (modalActive === 1) {
      modalWhereRef.current.style.display = 'block';
    } else if (modalActive === 2) {
      modalWhenRef.current.style.display = 'block';
    } else {
      modalWhenRef.current.style.display = 'none';
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
    <>
      <div className={style.navWrapper}>
        <nav className={style.nav}>
          <Link to="/main" className={style.logo}>
            S T A Y <br />
            FOREST
          </Link>
          <div className={style.centerMenu}>
            <div id="modal1" className={style.modalBtn} onClick={openModal}>
              <div>
                <MdOutlineLocationOn className={style.modalIcon} size="26" />
              </div>
              <p id="modalOpen1" className={style.modalText}>
                어디로떠날까요?
              </p>
            </div>
            <div id="modal2" className={style.modalBtn} onClick={openModal}>
              <BsCalendar4 className={style.modalIcon} size="23" />
              <p id="modalOpen2" className={style.modalText}>
                언제떠날까요?
              </p>
            </div>
          </div>
          <div className={style.rightMenu}>
            <Link to="/list" className={style.menuList}>
              FIND STAY
            </Link>
            <Link to="/main" className={style.menuList}>
              PROMOTION
            </Link>
            <Link to="/main" className={style.menuList}>
              JOURNAL
            </Link>
            <Link to="/main" className={style.menuList}>
              PRE-ORDER
            </Link>
            <Link to="/login" className={style.menuList}>
              LOGIN
            </Link>
            <Link to="/main" className={style.menuList}>
              <IoLanguageOutline size="24" />
            </Link>
          </div>
        </nav>
      </div>
      <WhereModal modalRef={modalWhereRef} closeModal={closeModal} />
      <WhenModal modalRef={modalWhenRef} closeModal={closeModal} />
    </>
  );
}

export default Nav;
