import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import CardGrid from './components/CardGrid/CardGrid';
import { Footer } from './components/Footer/Footer';

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice: number | null;
  status: string;
  stockStatus: string;
  stockTooltip: string;
  description: string;
  available: boolean;
  quantity: number;
}

function App() {
  const [selectedGameType, setSelectedGameType] = useState<string | null>(null);
  const [selectedItemType, setSelectedItemType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Featured');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: Omit<CartItem, 'quantity'>, quantity: number) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
        // Item exists in cart - update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        return updatedItems;
      } else {
        // Item not in cart - add new item
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

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
      <Header cartCount={cartItems.length} />

      <div className="main-content">
        <img src="./assets/background.png" className="main-background" alt="main-background" />
        <div className="card-grid-container">
          <div className="card-grid-content">
            <div className="card-grid-title">Condimentum consectetur</div>
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
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
