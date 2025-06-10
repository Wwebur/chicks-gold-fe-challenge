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

  return (
    <div className="app-container">
      <Header />

      <div className="main-content">
        <img
          src="./assets/background.jpg"
          className="main-background"
        />
        <div className="card-grid-container">
          <div className="card-grid-content">
            <div className="card-grid-title">
              Condimentum consectetur
            </div>
            <Filters
              selectedGameType={selectedGameType}
              setSelectedGameType={setSelectedGameType}
              selectedItemType={selectedItemType}
              setSelectedItemType={setSelectedItemType}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
            />
            <CardGrid
              selectedGameType={selectedGameType}
              selectedItemType={selectedItemType}
              searchQuery={searchQuery}
              selectedPriceRange={selectedPriceRange}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div >
  );
}

export default App;
