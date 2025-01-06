import React from "react";
import { useFavourites } from "../contexts/FavouritesContext";

const FavouritesPage = () => {
  const { favourites, removeFavourite } = useFavourites();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Favourites</h1>
      {favourites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favourites.map((book) => (
            <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={book.thumbnail || "https://via.placeholder.com/150"}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-gray-600">{book.authors?.join(", ")}</p>
                <button
                  className="mt-2 text-red-500 hover:underline"
                  onClick={() => removeFavourite(book.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No favourites added yet.</p>
      )}
    </div>
  );
};

export default FavouritesPage;
