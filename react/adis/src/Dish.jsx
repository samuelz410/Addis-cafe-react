import { useState } from "react";

export default function Dish({ dish, onAddToCart }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
    onAddToCart(dish.price);
  };

  return (
    <div className="dish-card">
      <div className="dish-info">
        <h3>
          {dish.name} {dish.spicy && <span className="spicy-badge">🌶️</span>}
        </h3>
        <p className="price">{dish.price.toFixed(2)} ETB</p>
        {count > 0 && <span className="count-badge">Qty: {count}</span>}
      </div>
      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}