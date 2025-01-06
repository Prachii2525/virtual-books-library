import React, { useEffect, useState } from "react";
import { fetchBooks } from "../utils/api";
import BookCard from "./BookCard";

const categories = ["All", "Fiction", "Science", "Technology", "Art", "History"];

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const query = category === "All" ? "bestsellers" : category;
        const fetchedBooks = await fetchBooks(query);
        setBooks(fetchedBooks);
      } catch (err) {
        setError("Failed to fetch books. Please try again later.");
        console.error(err);
      }
    };

    loadBooks();
  }, [category]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const fetchedBooks = await fetchBooks(searchQuery);
      setBooks(fetchedBooks);
    } catch (err) {
      setError("Failed to fetch books. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Explore Books</h2>

      <div className="flex justify-between items-center mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-md"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <form className="flex" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r-md"
          >
            Search
          </button>
        </form>
      </div>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              thumbnail={book.volumeInfo.imageLinks?.thumbnail}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
