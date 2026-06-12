import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Landing />} />
         <Route path="/checkout" element={<CheckoutPage />} />
<Route path="/success" element={<SuccessPage />} />

        {/* Products */}
        <Route path="/products" element={<ProductListing />} />

        {/* Product Detail */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Login / Auth */}
        <Route path="/auth" element={<Auth />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;