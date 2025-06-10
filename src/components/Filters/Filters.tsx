import React from 'react';
import { Dropdown } from "../Dropdown/Dropdown";
import { FiSearch } from "react-icons/fi";
import { GiSwapBag, GiFeather, GiBroadsword } from "react-icons/gi";
import styles from "./Filters.module.css";

interface FiltersProps {
    selectedGameType: string | null;
    setSelectedGameType: (value: string | null) => void;
    selectedItemType: string | null;
    setSelectedItemType: (value: string | null) => void;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    selectedPriceRange: string;
    setSelectedPriceRange: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
    selectedGameType,
    setSelectedGameType,
    selectedItemType,
    setSelectedItemType,
    searchQuery,
    setSearchQuery,
    selectedPriceRange,
    setSelectedPriceRange
}) => {
    const gameTypes = ["Diablo 2 Resurrected", "OSRS", "RS3"];
    const priceRanges = ["All", "0-10", "10-100", "100-500", "500-1500", "1500+"];

    const itemTypesMap: { [key: string]: string[] } = {
        "Diablo 2 Resurrected": ["Runes", "Others"],
        "OSRS": ["Armour", "Weapons", "Crafting Materials", "Shields", "Others"],
        "RS3": ["Christmas Event", "Party Hat", "Santa Hat", "Halloween Event", "Easter Event", "Others"]
    };

    const itemTypes = selectedGameType ? itemTypesMap[selectedGameType] : [];

    return (
        <div className={styles["filters-container"]}>
            <div className={styles["filters-side"]}>
                <Dropdown
                    Icon={GiBroadsword}
                    className={styles["filter-select"]}
                    head="Game"
                    text={selectedGameType ?? 'Select a game'}
                    options={gameTypes}
                    selected={selectedGameType}
                    onSelect={(value) => { setSelectedGameType(value); setSelectedItemType(null); }}
                />
            </div>
            <div className={styles["filters-main"]}>
                <div className={styles["filter-search"]}>
                    <FiSearch className={styles["filter-search-icon"]} />
                    <input
                        placeholder="Search"
                        className={styles["search-input"]}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className={styles["drop-down-container"]}>
                    <Dropdown
                        Icon={GiSwapBag}
                        className={styles["drop-down-left"]}
                        head="Price"
                        text={selectedPriceRange}
                        options={priceRanges}
                        selected={selectedPriceRange}
                        onSelect={setSelectedPriceRange}
                    />
                    <Dropdown
                        Icon={GiFeather}
                        className={styles["drop-down-right"]}
                        head="Item Type"
                        text={selectedItemType ?? 'All'}
                        options={itemTypes}
                        selected={selectedItemType}
                        onSelect={setSelectedItemType}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
