import React from "react";
import PageButton from "../PageButton/PageButton";
import { pages } from "../../const/pages";
import styles from "./Pagination.module.css";

const Pagination: React.FC = () => {
	return(
		<div className={styles["pagination-container"]}>
 			<div className={styles["pagination"]}>
 				{pages.map((page: string | number) => (
 					<PageButton
 						key={page}
 						page={page}
 						current={'1'}
 					/>
 				))}
 			</div>
 		</div>
 	)
}

export default Pagination;