import { useState, useEffect, useRef } from "react";
import { loadDishes, categories } from "./api";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import OrderForm from "./OrderForm";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [orderTotal, setOrderTotal] = useState(0);

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setError(null);

    loadDishes(selectedCategory, signal)
      .then((data) => {
        setDishes(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch request aborted.");
          return;
        }
        setError(err.message);
        setLoading(false);
      });


    return () => {
      controller.abort();
    };
  }, [selectedCategory]);

  const handleAddToCart = (price) => {
    setOrderTotal((prev) => prev + price);
  };

  const displayedDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="menu-container">
      <header className="menu-header">
        <h1>Addis Eats Menu</h1>
        <div className="cart-total">
          <span>Running Total:</span>
          <strong>{orderTotal.toFixed(2)} ETB</strong>
        </div>
      </header>

      <div className="search-box">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search menu items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      {loading && <div className="loading-state">Loading dishes...</div>}
      
      {error && <div className="error-state"> Error: {error}</div>}

      {!loading && !error && (
        <DishList dishes={displayedDishes} onAddToCart={handleAddToCart} />
      )}

      <OrderForm orderTotal={orderTotal} />
    </main>
  );
}