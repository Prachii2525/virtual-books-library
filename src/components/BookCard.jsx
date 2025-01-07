import React, { useState } from "react";
import { toast } from "react-toastify";
import { useFavourites } from "../contexts/FavouritesContext";

const BookCard = ({ id, title, authors, thumbnail }) => {
  const { addFavourite } = useFavourites();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToFavourites = () => {
    // Trigger the animation
    setIsAnimating(true);

    // Add the book to favourites
    addFavourite({ id, title, authors, thumbnail });

    // Show success toast
    toast.success(`${title} added to favourites!`);

    // Remove the animation class after it completes
    setTimeout(() => setIsAnimating(false), 300); // Match the animation duration
  };

  return (
    <div
      className="bg-[#F8E1B7] hover:scale-105 transition-transform duration-300 border-4 shadow-2xl border-[#FFE5E5] rounded-lg overflow-hidden"
    >
      <img
        src={thumbnail || "https://via.placeholder.com/150"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="flex justify-between p-4">
        <div>
          <h3 className="text-lg font-bold">{title || "Unknown Title"}</h3>
          <p className="text-gray-600">
            {authors?.join(", ") || "Unknown Author(s)"}
          </p>
        </div>
        <button
          onClick={handleAddToFavourites}
          className={`transition-transform ${
            isAnimating ? "animate-pulse text-red-500" : "text-gray-700"
          }`}
        >
          <img
            src="/assets/heart-icon.png"
            width={20}
            className={`h-5 mt-2 ${isAnimating ? "scale-125" : "scale-100"}`}
            alt="Add to favourites"
          />
        </button>
      </div>
    </div>
  );
};

export default BookCard;
