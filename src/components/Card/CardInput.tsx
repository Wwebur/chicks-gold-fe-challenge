import React from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import styles from './Card.module.css';

interface CardInputProps {
  quantity: number;
  setQuantity: (value: number) => void;
}

const CardInput: React.FC<CardInputProps> = ({ quantity, setQuantity }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.quantityContainer}>
      <input
        className={styles.quantityInput}
        type="number"
        name="number"
        value={quantity}
        onChange={onChange}
      />
      <IoMdArrowDropup className={styles.quantityUp} onClick={handleIncrease} />
      <IoMdArrowDropdown className={styles.quantityDown} onClick={handleDecrease} />
    </div>
  );
};

export default CardInput;
