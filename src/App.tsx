import { useState, useRef } from 'react';

import { CardGrid, Filters, Header, Footer } from './components';
import CartDropdown from './components/CartDropdown/CartDropdown';

import './App.css';

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
  const [cartOpen, setCartOpen] = useState(false);

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

  // Handler to toggle cart dropdown
  const handleCartClick = () => setCartOpen(open => !open);
  const handleCartClose = () => setCartOpen(false);

  return (
    <div className="appContainer">
      <Header cartCount={cartItems.length} onCartClick={handleCartClick} />

      <div className="mainContent">
        <img src="./assets/background.png" className="mainBackground" alt="main-background" />
        <div className="cardGridContainer">
          <div className="cardGridContent">
            <div className="cardGridTitle">Condimentum consectetur</div>
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
        {/* Cart Dropdown Modal */}
        {cartOpen && (
          <div className="cartDropdownContainer">
            <CartDropdown items={cartItems} onClose={handleCartClose} />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
