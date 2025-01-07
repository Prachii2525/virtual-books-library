import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <header className="bg-[#4535C1] text-white py-4 px-6 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Virtual Books Library</h1>
      <div className="flex items-center space-x-4">
       
        {/* My Favourites Button */}
        <button
          onClick={() => navigate("/favourites")}
          className="flex gap-2 text-[#F5F4B3] hover:underline"
        >
          <img className="mt-3" src="/assets/heart.png" alt="Heart" height={20} width={20} />
          <h2 className="mt-2 text-xl ">My Favourites</h2>
        </button>
      </div>
    </header>
  );
};

export default Header;
