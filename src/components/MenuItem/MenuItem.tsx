import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import styles from './MenuItem.module.css';

interface MenuItemProps {
  text: string;
  className?: string;
  Icon?: React.ComponentType<any>;
  dropdown?: boolean;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  className = '',
  Icon,
  dropdown = true,
  onClick,
}) => (
  <button className={`${styles.menuItemContainer} ${className}`} onClick={onClick}>
    {Icon ? <Icon /> : null}
    <p>{text}</p>
    {dropdown ? <IoIosArrowDown /> : null}
  </button>
);

export default MenuItem;
