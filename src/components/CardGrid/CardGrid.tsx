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
    selectedPriceRange: string;
    sortBy: string;
    setSortBy: (value: string) => void;
    currentPage: number;
    setCurrentPage: (value: number) => void;
}

const CardGrid: React.FC<CardGridProps> = ({
    selectedGameType,
    selectedItemType,
    searchQuery,
    selectedPriceRange,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage
}) => {
    const priceMatch = (price: number) => {
        if (selectedPriceRange === 'All') return true;
        if (selectedPriceRange === '0-10') return price >= 0 && price <= 10;
        if (selectedPriceRange === '10-100') return price > 10 && price <= 100;
        if (selectedPriceRange === '100-500') return price > 100 && price <= 500;
        if (selectedPriceRange === '500-1500') return price > 500 && price <= 1500;
        if (selectedPriceRange === '1500+') return price > 1500;
        return true;
    };

    const filteredItems = items.filter((item) => {
        const matchGame = selectedGameType ? item.gameType === selectedGameType : true;
        const matchItemType = selectedItemType ? item.itemType === selectedItemType : true;
        const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchPrice = priceMatch(item.price);
        return matchGame && matchItemType && matchSearch && matchPrice;
    });

    const sortedItems = [...filteredItems].sort((a, b) => {
        if (sortBy === 'Featured') {
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        } else if (sortBy === 'Price: Low to High') {
            return a.price - b.price;
        } else if (sortBy === 'Price: High to Low') {
            return b.price - a.price;
        }
        return 0;
    });

    const itemsPerPage = 15;
    const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = sortedItems.slice(startIndex, startIndex + itemsPerPage);

    const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low"];

    return (
        <div className={styles["card-grid"]}>
            <div className={styles["card-sort-container"]}>
                <p className={styles["card-pagination"]}>
                    Showing {paginatedItems.length} of {sortedItems.length}
                </p>
                <Dropdown
                    Icon={HiOutlineAdjustmentsHorizontal}
                    className={styles["card-sort"]}
                    head="Sort By"
                    text={sortBy}
                    options={sortOptions}
                    selected={sortBy}
                    onSelect={setSortBy}
                />
            </div>
            <div className={styles["card-grid-content"]}>
                {paginatedItems.map((item) => (
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
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default CardGrid;
