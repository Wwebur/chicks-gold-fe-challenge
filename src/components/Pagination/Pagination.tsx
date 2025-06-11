import React from 'react';
import PageButton from '../PageButton/PageButton';
import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>
        {/* Prev Button */}
        <button
          className={`${styles.paginationNavBtn} ${
            currentPage === 1 ? styles.paginationNavBtnDisabled : ''
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {pages.map(page => (
          <PageButton
            key={page}
            page={page}
            current={currentPage}
            onClick={() => onPageChange(page)}
          />
        ))}

        {/* Next Button */}
        <button
          className={`${styles.paginationNavBtn} ${
            currentPage === totalPages ? styles.paginationNavBtnDisabled : ''
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
