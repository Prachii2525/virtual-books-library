import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavouritesProvider } from "./contexts/FavouritesContext";
import Header from "./components/Header";
import FavouritesPage from "./Pages/FavouritesPage.jsx";
import Home from "./Pages/Home.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <FavouritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
         {/* Toast container for showing notifications */}
         <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />
      </Router>
    </FavouritesProvider>
  );
};

export default App;
