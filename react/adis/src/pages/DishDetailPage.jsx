import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadDishes } from "../api";
import { useCart } from "../context/CartContext";

export default function DishDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    loadDishes("All").then((data) => {
      const found = data.find((item) => item.id === Number(id));
      setDish(found);
    });
  }, [id]);

  if (!dish) return <p>Loading dish details...</p>;

  return (
    <div className="dish-detail">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>
        {dish.name} {dish.spicy && "🌶️"}
      </h2>
      <p>Category: {dish.category}</p>
      <p>Price: {dish.price} ETB</p>
      <button onClick={() => addToCart(dish)}>Add to Cart</button>
    </div>
  );
}