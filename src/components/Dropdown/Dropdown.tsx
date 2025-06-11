import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

import styles from './Dropdown.module.css';

interface DropdownProps {
  Icon: React.ComponentType<any>;
  className?: string;
  head?: string;
  text?: string;
  options?: string[];
  selected?: string | null;
  onSelect?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  Icon,
  className = '',
  head,
  text,
  options = [],
  selected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (options.length > 0) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (value: string) => {
    if (onSelect) {
      onSelect(value);
    }
    setIsOpen(false);
  };

  // Close on outside click:
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styles.dropdownContainer} ${className}`}
      ref={ref}
      onClick={toggleDropdown}
      style={{ position: 'relative' }}
    >
      <Icon className={styles.icon} />
      <span className={styles.content}>
        <span className={styles.label}>{head}</span>
        <span className={styles.value}>{text}</span>
      </span>
      <IoMdArrowDropdown className={styles.arrow} />

      {isOpen && options.length > 0 && (
        <div className={styles.dropdownMenu}>
          {options.map(option => (
            <div
              className={styles.dropdownItem}
              key={option}
              onClick={e => {
                e.stopPropagation();
                handleSelect(option);
              }}
              style={{
                backgroundColor: option === selected ? '#5a6280' : 'transparent',
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
