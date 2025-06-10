import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

import styles from './MenuItem.module.css';

interface MenuItemProps {
    text: string;
    className?: string;
    Icon?: React.ComponentType<any>;
    dropdown?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
    text,
    className = "",
    Icon,
    dropdown = true
}) => (
    <div className={`${styles["menu-item"]} ${className}`}>
        {Icon ?
            <Icon />
            : null}
        <p>
            {text}
        </p>
        {dropdown ?
            <IoIosArrowDown />
            : null}
    </div>
);

export default MenuItem;