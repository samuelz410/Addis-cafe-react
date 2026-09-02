import { useState } from "react";
import { menuData, categories } from "./data";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import OrderForm from "./OrderForm";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [orderTotal, setOrderTotal] = useState(0);
  const filteredDishes =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((dish) => dish.category === selectedCategory);

  const handleAddToCart = (price) => {
    setOrderTotal((prevTotal) => prevTotal + price);
  };

  return (
    <main className="menu-container">
      <header className="menu-header">
        <h1>Addis Eats Menu</h1>
        <div className="cart-total">
          <span>Running Total:</span>
          <strong>{orderTotal.toFixed(2)} ETB</strong>
        </div>
      </header>

      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <DishList dishes={filteredDishes} onAddToCart={handleAddToCart} />

      <OrderForm orderTotal={orderTotal} />
    </main>
  );
}