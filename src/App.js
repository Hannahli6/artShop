import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollectionPage from "./Pages/CollectionPage";
import HomePage from "./Pages/HomePage.js/index.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="collection" element={<CollectionPage/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
