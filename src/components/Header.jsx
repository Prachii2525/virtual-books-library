import React, { useState } from "react";
import PropTypes from "prop-types";
const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  
  return (
    <header className="bg-blue-500 text-white py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Virtual Book Library</h1>
     
    </header>
  );
};

export default Header;
  