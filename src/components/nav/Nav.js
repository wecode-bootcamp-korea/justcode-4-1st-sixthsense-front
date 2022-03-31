import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BsCalendar4 } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import css from './Nav.module.css';
import WhereModal from './modal/WhereModal';
import WhenModal from './modal/WhenModal';

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
      <div className={css.navWrapper}>
        <nav className={css.nav}>
          <div className={css.logo}>logo</div>
          <div className={css.centerMenu}>
            <div className={css.modalBtn} onClick={openModal1}>
              <div>
                <MdOutlineLocationOn className={css.modalIcon} size="26" />
              </div>
              <p id="modalOpen1" className={css.modalText}>
                어디로떠날까요?
              </p>
            </div>
            <div className={css.modalBtn} onClick={openModal2}>
              <BsCalendar4 className={css.modalIcon} size="23" />
              <p id="modalOpen2" className={css.modalText}>
                언제떠날까요?
              </p>
            </div>
          </div>
          <div className={css.rightMenu}>
            <Link to="/" className={css.menuList}>
              FIND STAY
            </Link>
            <Link to="/" className={css.menuList}>
              PROMOTION
            </Link>
            <Link to="/" className={css.menuList}>
              JOURNAL
            </Link>
            <Link to="/" className={css.menuList}>
              PRE-ORDER
            </Link>
            <Link to="/" className={css.menuList}>
              LOGIN
            </Link>
            <Link to="/" className={css.menuList}>
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
