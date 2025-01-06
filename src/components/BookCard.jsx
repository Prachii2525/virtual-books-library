import React from "react";

const BookCard = ({ title, authors, thumbnail }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={thumbnail || "https://via.placeholder.com/150"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className=" flex justify-between p-4">
        <div>
          <h3 className="text-lg font-bold">{title || "Unknown Title"}</h3>
          <p className="text-gray-600">{authors?.join(", ") || "Unknown Author(s)"}</p>
        </div>
        <button>< img src="/assets/heart-icon.png" width={20} className="h-5 mt-2" /></button>
      </div>
    </div>
  );
};

export default BookCard;
