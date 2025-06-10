import React, { useState } from 'react';
import { IoMenu, IoClose, IoPersonSharp } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";

import MenuItem from './MenuItem';

import styles from './Header.module.css';

const navItems = [
    "Currency",
    "Items",
    "Accounts",
    "Services",
    "SWAP",
    "Sell",
]

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prevState) => !prevState)
    }
    return (
        <nav className={styles["nav-container"]}>
            <div className={styles["nav-main-content"]}>
                <button className={`${styles["nav-menu-btn"]} ${open ? styles["btn-active"] : ""}`} onClick={toggleOpen}>
                    {open ?
                        <IoClose className={styles["nav-menu-icon"]} />
                        : <IoMenu className={styles["nav-menu-icon"]} />}
                </button>
                <div className={styles["nav-logo-container"]}>
                    <img
                        src="./assets/chicks-logo-large.svg"
                        width={125}
                        height={30}
                        alt="chicks-logo"
                        className={styles["nav-logo"]}
                    />
                </div>
                <div className={`${styles["nav-menu-items"]} ${open ? styles["active"] : ''}`}>
                    {navItems.map(item => (
                        <MenuItem
                            key={item}
                            text={item}
                        />
                    ))}
                </div>
            </div>
            <div className={styles["nav-cart-container"]}>
                <MenuItem text="USD" className={styles["display-web"]} />
                <MenuItem
                    text="Cart (5)"
                    className={styles["display-web"]}
                    dropdown={false}
                    Icon={HiShoppingCart}
                />
                <button className={styles["sing-in-btn"]}>
                    <span>
                        SIGN IN
                    </span>
                    <IoPersonSharp />
                </button>
            </div>
        </nav>
    )
}

export default Header;