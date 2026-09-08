import { Link, NavLink, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { cartTotal } = useCart();
  const { user, logout } = useAuth();

  return (
    <div className="layout">
      <header className="navbar">
        <Link to="/" className="brand">
           Addis Eats
        </Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/checkout">Checkout ({cartTotal.toFixed(2)} ETB)</NavLink>
        </nav>
        <div className="auth-status">
          {user ? (
            <>
              <span> {user.name}</span>
              <button onClick={logout}>Sign Out</button>
            </>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </div>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}