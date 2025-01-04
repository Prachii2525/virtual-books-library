import React from "react";

const BookCard = ({ title, authors, thumbnail }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={thumbnail || "https://via.placeholder.com/150"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title || "Unknown Title"}</h3>
        <p className="text-gray-600">{authors?.join(", ") || "Unknown Author(s)"}</p>
      </div>
    </div>
  );
};

export default BookCard;
