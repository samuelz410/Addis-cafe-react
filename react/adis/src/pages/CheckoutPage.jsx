import { useCart } from "../context/CartContext";

export function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  return (
    <div>
      <h2>Checkout Screen</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.qty} - {(item.price * item.qty).toFixed(2)} ETB
          </li>
        ))}
      </ul>
      <h3>Total Amount: {cartTotal.toFixed(2)} ETB</h3>
    </div>
  );
}