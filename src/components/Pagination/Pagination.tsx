import React from "react";
import PageButton from "../PageButton/PageButton";
import styles from "./Pagination.module.css";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className={styles["pagination-container"]}>
			<div className={styles["pagination"]}>
				{pages.map((page) => (
					<PageButton
						key={page}
						page={page}
						current={currentPage}
						onClick={() => onPageChange(page)}
					/>
				))}
			</div>
		</div>
	);
};

export default Pagination;
