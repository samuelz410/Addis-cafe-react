import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

import { Home } from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import DishDetailPage from "./pages/DishDetailPage";
import LoginPage from "./pages/LoginPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="menu/:id" element={<DishDetailPage />} />
              <Route
                path="checkout"
                element={
                  <RequireAuth>
                    <CheckoutPage />
                  </RequireAuth>
                }
              />
              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}