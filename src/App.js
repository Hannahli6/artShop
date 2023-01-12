import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollectionPage from "./Pages/CollectionPage";
import HomePage from "./Pages/HomePage.js/index.js";
import PrintsPage from "./Pages/PrintsPage.js/index.js";
import ProductPage from "./Pages/ProductPage.js";
import AboutMePage from "./Pages/AboutMePage.js";
import StationaryPage from "./Pages/StationaryPage.js";
import AccessoriesPage from "./Pages/AccessoriesPage.js";
import AllProductPage from "./Pages/AllProductPage.js";
import ScrollToTop from "./ScrollToTop";
import CartPage from "./Pages/CartPage.js/CartPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="prints" element={<PrintsPage />} />
        <Route path="stationary" element={<StationaryPage />} />
        <Route path="accessories" element={<AccessoriesPage />} />
        <Route path="all-item" element={<AllProductPage />} />
        <Route path="collection" element={<CollectionPage />} />
        <Route path="collection/:productId" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="about-me" element={<AboutMePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
