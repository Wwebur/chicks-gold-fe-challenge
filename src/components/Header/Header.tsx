import React, { useState } from 'react';
import { IoMenu, IoClose, IoPersonSharp } from 'react-icons/io5';
import { HiShoppingCart } from 'react-icons/hi';

import MenuItem from '../MenuItem/MenuItem';

import styles from './Header.module.css';

interface HeaderProps {
  cartCount: number;
}

const navItems = ['Currency', 'Items', 'Accounts', 'Services', 'SWAP', 'Sell'];

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(prevState => !prevState);
  };
  return (
    <nav className={styles.headerContainer}>
      <div className={styles.headerMainContent}>
        <button
          className={`${styles.headerMenuBtn} ${open ? styles.headerMenuBtnActive : ''}`}
          onClick={toggleOpen}
        >
          {open ? (
            <IoClose className={styles.headerMenuIcon} />
          ) : (
            <IoMenu className={styles.headerMenuIcon} />
          )}
        </button>
        <div className={styles.headerLogoContainer}>
          <img
            src="./assets/chicks-logo-large.svg"
            width={125}
            height={30}
            alt="chicks-logo"
            className={styles.headerLogo}
          />
        </div>
        <div className={`${styles.headerMenuItems} ${open ? styles.headerMenuItemsActive : ''}`}>
          {navItems.map(item => (
            <MenuItem key={item} text={item} />
          ))}
        </div>
      </div>
      <div className={styles.headerCartContainer}>
        <MenuItem text="USD" className={styles.headerDisplayWeb} />
        <MenuItem
          text={`Cart (${cartCount})`}
          className={styles.headerDisplayWeb}
          dropdown={false}
          Icon={HiShoppingCart}
        />
        <button className={styles.headerSignInBtn}>
          <span>SIGN IN</span>
          <IoPersonSharp />
        </button>
      </div>
    </nav>
  );
};

export default Header;
