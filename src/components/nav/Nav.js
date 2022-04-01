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

  const openModal1 = () => setModalActive(1);
  const openModal2 = () => setModalActive(2);
  const closeModal = () => setModalActive(0);

  useEffect(() => {
    if (modalActive === 1) {
      modalWhereRef.current.style.display = 'flex';
    } else if (modalActive === 2) {
      modalWhenRef.current.style.display = 'flex';
    } else {
      modalWhenRef.current.style.display = 'none';
      modalWhereRef.current.style.display = 'none';
    }
  }, [modalActive]);

  return (
    <>
      <div className={style.navWrapper}>
        <nav className={style.nav}>
          <Link to="/main" className={style.logo}>
            <img src="#" alt="logo" />
          </Link>
          <div className={style.centerMenu}>
            <div className={style.modalBtn} onClick={openModal1}>
              <div>
                <MdOutlineLocationOn className={style.modalIcon} size="26" />
              </div>
              <p id="modalOpen1" className={style.modalText}>
                어디로떠날까요?
              </p>
            </div>
            <div className={style.modalBtn} onClick={openModal2}>
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
            <Link to="/" className={style.menuList}>
              PROMOTION
            </Link>
            <Link to="/" className={style.menuList}>
              JOURNAL
            </Link>
            <Link to="/" className={style.menuList}>
              PRE-ORDER
            </Link>
            <Link to="/login" className={style.menuList}>
              LOGIN
            </Link>
            <Link to="/" className={style.menuList}>
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
