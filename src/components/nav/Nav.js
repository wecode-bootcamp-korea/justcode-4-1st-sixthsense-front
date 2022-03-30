import React from 'react';
import css from './Nav.module.css';

function Nav() {
  return (
    <div className={css.navWrapper}>
      <nav className={css.nav}>
        <div className={css.logo}>logo</div>
        <div className={css.modals}>
          <div className={css.modalWrapper}>
            <p>icon1 어디로떠날까요?</p>
          </div>
          <div className={css.modalWrapper}>
            <p>icon2 언제떠날까요?</p>
          </div>
        </div>
        <ul className={css.menu}>
          <li className={css.menuList}>FIND STAY</li>
          <li className={css.menuList}>PROMOTION</li>
          <li className={css.menuList}>JOURNAL</li>
          <li className={css.menuList}>PRE-ORDER</li>
          <li className={css.menuList}>LOGIN</li>
          <li className={css.menuList}>icon</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
