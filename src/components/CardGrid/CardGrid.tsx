import React from 'react';
import { Dropdown } from "../Dropdown/Dropdown";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import items from "../../data/items.json";
import styles from "./CardGrid.module.css";

interface CardGridProps {
    selectedGameType: string | null;
    selectedItemType: string | null;
    searchQuery: string;
}

const CardGrid: React.FC<CardGridProps> = ({
    selectedGameType,
    selectedItemType,
    searchQuery
}) => {
    const filteredItems = items.filter((item) => {
        const matchGame = selectedGameType ? item.gameType === selectedGameType : true;
        const matchItemType = selectedItemType ? item.itemType === selectedItemType : true;
        const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchGame && matchItemType && matchSearch;
    });

    return (
        <div className={styles["card-grid"]}>
            <div className={styles["card-sort-container"]}>
                <p className={styles["card-pagination"]}>
                    Showing {filteredItems.length} - from {items.length}
                </p>
                <Dropdown
                    Icon={HiOutlineAdjustmentsHorizontal}
                    className={styles["card-sort"]}
                    head="Sort By"
                    text="Featured"
                />
            </div>
            <div className={styles["card-grid-content"]}>
                {filteredItems.map((item) => (
                    <Card
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        originalPrice={item.originalPrice}
                        status={item.status}
                        stockStatus={item.stockStatus}
                        stockTooltip={item.stockTooltip}
                        description={item.description}
                        available={item.available}
                    />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default CardGrid;
