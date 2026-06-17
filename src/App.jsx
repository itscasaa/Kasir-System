import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import OrderQueue from './components/OrderQueue';
import SearchFilter from './components/SearchFilter';
import CategoryList from './components/CategoryList';
import MenuSection from './components/MenuSection';
import OrderDetails from './components/OrderDetails';
import DashboardPage from './pages/DashboardPage';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import { mostOrdered, popularDishes } from './data/menuData';
import { orderHistory as initialOrderHistory } from './data/historyData';

export default function App() {
  const [activePage, setActivePage] = useState('products');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [orders, setOrders] = useState(initialOrderHistory);

  // --- Cart Functions ---
  const addToCart = (dish) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  // --- Filter Logic ---
  const filterDishes = (dishes) => {
    return dishes.filter((dish) => {
      const matchesSearch = dish.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === 'All' || dish.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const filteredMostOrdered = useMemo(
    () => filterDishes(mostOrdered),
    [searchQuery, activeCategory]
  );

  const filteredPopularDishes = useMemo(
    () => filterDishes(popularDishes),
    [searchQuery, activeCategory]
  );

  return (
    <div className="flex flex-col h-screen overflow-hidden font-inter">
      {/* Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={setActivePage}
        searchPlaceholder={activePage === 'dashboard' ? 'Search insights...' : activePage === 'history' ? 'Search orders...' : activePage === 'settings' ? 'Quick search...' : 'Search...'}
      />

      {/* Page Content */}
      {activePage === 'dashboard' ? (
        <DashboardPage orders={orders} />
      ) : activePage === 'history' ? (
        <HistoryPage orders={orders} />
      ) : activePage === 'settings' ? (
        <SettingsPage />
      ) : (
        <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
          {/* Left Panel */}
          <main className="flex-1 lg:w-[68%] overflow-y-auto bg-background p-6 lg:p-8 space-y-6">
            <OrderQueue />
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <CategoryList
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <MenuSection
              title="Most Ordered"
              dishes={filteredMostOrdered}
              cart={cart}
              onAdd={addToCart}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
              variant="horizontal"
            />
            <MenuSection
              title="Popular Dishes"
              dishes={filteredPopularDishes}
              cart={cart}
              onAdd={addToCart}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
            />
          </main>

          {/* Right Panel */}
          <OrderDetails
            cart={cart}
            onRemove={removeFromCart}
            onClear={clearCart}
            onCheckout={(newOrder) => setOrders((prev) => [newOrder, ...prev])}
          />
        </div>
      )}
    </div>
  );
}
