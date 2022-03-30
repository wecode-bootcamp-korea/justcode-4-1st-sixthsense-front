import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import css from './Nav.module.css';

function Nav() {
  const [modalActive, setmodalActive] = useState(0);
  const modalRef = useRef();

  const openModal = () => setmodalActive(1);
  const closeModal = () => setmodalActive(0);

  useEffect(() => {
    if (modalActive) {
      modalRef.current.style.display = 'flex';
    } else {
      modalRef.current.style.display = 'none';
    }
  }, [modalActive]);

  return (
    <>
      <div className={css.navWrapper}>
        <nav className={css.nav}>
          <div className={css.logo}>logo</div>
          <div className={css.centerMenu}>
            <p id="modal1" className={css.modalButton} onClick={openModal}>
              icon1 어디로떠날까요?
            </p>
            <p id="modal2" className={css.modalButton} onClick={openModal}>
              icon2 언제떠날까요?
            </p>
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
              icon
            </Link>
          </div>
        </nav>
      </div>
      <Modal closeModal={closeModal} modalRef={modalRef} />
    </>
  );
}

export default Nav;
