import React, { useState } from "react";
import PropTypes from "prop-types";
const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  return (
    <header className="bg-blue-500 text-white py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Virtual Book Library</h1>
      <form className="flex items-center" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for books..."
          className="p-2 rounded-l-md border-none focus:outline-none text-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-700 px-4 py-2 rounded-r-md hover:bg-blue-800 transition"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
  