import Dish from "./Dish";

export default function DishList({ dishes, onAddToCart }) {
  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}