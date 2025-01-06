import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context
const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Load favourites from localStorage on initial render
  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  // Save favourites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Function to add a book to favourites
  const addFavourite = (book) => {
    // Prevent duplicate entries
    if (!favourites.some((fav) => fav.id === book.id)) {
      setFavourites((prev) => [...prev, book]);
    }
  };

  // Function to remove a book from favourites
  const removeFavourite = (bookId) => {
    setFavourites((prev) => prev.filter((book) => book.id !== bookId));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
