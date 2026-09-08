import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { loadDishes, categories } from "../api";
import { useCart } from "../context/CartContext";

export default function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    loadDishes(activeCategory).then((data) => {
      setDishes(data);
      setLoading(false);
    });
  }, [activeCategory]);

  const handleCategorySelect = (category) => {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div>
      <h2>Menu</h2>

      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => handleCategorySelect(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading dishes...</p>
      ) : (
        <div className="dish-grid">
          {dishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <h3>{dish.name}</h3>
              <p>{dish.price} ETB</p>
              <Link to={`/menu/${dish.id}`}>View Details</Link>
              <button onClick={() => addToCart(dish)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}