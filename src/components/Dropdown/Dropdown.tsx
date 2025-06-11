import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import styles from './Dropdown.module.css';

export interface DropdownProps {
  Icon: React.ComponentType<any>;
  className?: string;
  head?: string;
  text?: string;
  options?: string[];
  selected?: string | null;
  onSelect?: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
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
      className={`${styles.dropdown} ${className}`}
      ref={ref}
      onClick={toggleDropdown}
      style={{ position: 'relative' }}
    >
      <Icon className={styles['dropdown-icon']} />
      <span className={styles['dropdown-content']}>
        <span className={styles['dropdown-head']}>{head}</span>
        <span className={styles['dropdown-text']}>{text}</span>
      </span>
      <IoMdArrowDropdown className={styles['arrow-icon']} />

      {isOpen && options.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#4a526b',
            borderRadius: '4px',
            marginTop: '5px',
            zIndex: 1000,
            maxHeight: '200px',
            overflowY: 'auto',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          {options.map(option => (
            <div
              key={option}
              onClick={e => {
                e.stopPropagation();
                handleSelect(option);
              }}
              style={{
                padding: '10px 15px',
                color: 'white',
                cursor: 'pointer',
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
