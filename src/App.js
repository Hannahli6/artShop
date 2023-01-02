import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollectionPage from "./Pages/CollectionPage";
import HomePage from "./Pages/HomePage.js/index.js";
import PrintsPage from "./Pages/PrintsPage.js/index.js";
import ProductPage from "./Pages/ProductPage.js";
import AboutMePage from "./Pages/AboutMePage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='prints' element={<PrintsPage/>}/>
        <Route path="collection" element={<CollectionPage/>}/>
        <Route path="collection/:productId" element={<ProductPage/>}/>
        {/* <Route path="product" element={<ProductPage/>}/> */}
        <Route path="about-me" element={<AboutMePage/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
