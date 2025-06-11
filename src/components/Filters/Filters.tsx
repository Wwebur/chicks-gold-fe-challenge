import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { GiSwapBag, GiFeather, GiBroadsword } from 'react-icons/gi';

import Dropdown from '../Dropdown';

import styles from './Filters.module.css';

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
  setSelectedPriceRange,
}) => {
  const gameTypes = ['Diablo 2 Resurrected', 'OSRS', 'RS3'];
  const priceRanges = ['All', '0-10', '10-100', '100-500', '500-1500', '1500+'];

  const itemTypesMap: { [key: string]: string[] } = {
    'Diablo 2 Resurrected': ['Runes', 'Others'],
    OSRS: ['Armour', 'Weapons', 'Crafting Materials', 'Shields', 'Others'],
    RS3: ['Christmas Event', 'Party Hat', 'Santa Hat', 'Halloween Event', 'Easter Event', 'Others'],
  };

  const itemTypes = selectedGameType ? itemTypesMap[selectedGameType] : [];

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersSidebar}>
        <Dropdown
          Icon={GiBroadsword}
          className={styles.selectDropdown}
          head="Game"
          text={selectedGameType ?? 'Select a game'}
          options={gameTypes}
          selected={selectedGameType}
          onSelect={value => {
            setSelectedGameType(value);
            setSelectedItemType(null);
          }}
        />
      </div>
      <div className={styles.filtersMain}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            placeholder="Search"
            className={styles.searchInput}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.dropdownContainer}>
          <Dropdown
            Icon={GiSwapBag}
            className={styles.dropdownLeft}
            head="Price"
            text={selectedPriceRange}
            options={priceRanges}
            selected={selectedPriceRange}
            onSelect={setSelectedPriceRange}
          />
          <Dropdown
            Icon={GiFeather}
            className={styles.dropdownRight}
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
