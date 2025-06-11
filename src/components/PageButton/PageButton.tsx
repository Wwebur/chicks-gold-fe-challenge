import React from 'react';

import styles from './PageButton.module.css';

interface PageButtonProps {
  page: string | number;
  current: string | number;
  onClick?: () => void;
}

const PageButton: React.FC<PageButtonProps> = ({ page, current, onClick }) => {
  return (
    <button
      className={`${styles.pageButton} ${current === page ? styles.pageButtonActive : ''}`}
      onClick={onClick}
    >
      {page}
    </button>
  );
};

export default PageButton;
