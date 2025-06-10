import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters/Filters';
import CardGrid from './components/CardGrid/CardGrid';
import Footer from './components/Footer';

function App() {
  const [selectedGameType, setSelectedGameType] = useState<string | null>(null);
  const [selectedItemType, setSelectedItemType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Featured');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSetSelectedGameType = (value: string | null) => {
    setSelectedGameType(value);
    setCurrentPage(1);
  };

  const handleSetSelectedItemType = (value: string | null) => {
    setSelectedItemType(value);
    setCurrentPage(1);
  };

  const handleSetSearchQuery = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleSetSelectedPriceRange = (value: string) => {
    setSelectedPriceRange(value);
    setCurrentPage(1);
  };

  const handleSetSortBy = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };


  return (
    <div className="app-container">
      <Header />

      <div className="main-content">
        <img
          src="./assets/background.jpg"
          className="main-background"
          alt="main-background"
        />
        <div className="card-grid-container">
          <div className="card-grid-content">
            <div className="card-grid-title">
              Condimentum consectetur
            </div>
            <Filters
              selectedGameType={selectedGameType}
              setSelectedGameType={handleSetSelectedGameType}
              selectedItemType={selectedItemType}
              setSelectedItemType={handleSetSelectedItemType}
              searchQuery={searchQuery}
              setSearchQuery={handleSetSearchQuery}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={handleSetSelectedPriceRange}
            />

            <CardGrid
              selectedGameType={selectedGameType}
              selectedItemType={selectedItemType}
              searchQuery={searchQuery}
              selectedPriceRange={selectedPriceRange}
              sortBy={sortBy}
              setSortBy={handleSetSortBy}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
