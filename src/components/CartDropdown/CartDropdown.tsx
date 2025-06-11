import React, { useRef, useEffect } from 'react';
import styles from './CartDropdown.module.css';

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartDropdownProps {
  items: CartItem[];
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ items, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  return (
    <div className={styles.cartDropdown} ref={ref}>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <div className={styles.cartTitle}>Cart</div>
      {items.length === 0 ? (
        <div className={styles.empty}>Your cart is empty.</div>
      ) : (
        <ul className={styles.cartList}>
          {items.map(item => (
            <li key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.title} className={styles.cartItemImage} />
              <div className={styles.cartItemInfo}>
                <div className={styles.cartItemTitle}>{item.title}</div>
                <div className={styles.cartItemDetails}>
                  <span>Qty: {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartDropdown;
