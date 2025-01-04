import React, { useEffect, useState } from "react";
import { fetchPopularBooks } from "../utils/api";
import BookCard from "./BookCard";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const fetchedBooks = await fetchPopularBooks();
        setBooks(fetchedBooks); // Store fetched books in the state
      } catch (err) {
        setError("Failed to fetch popular books. Please try again later.");
        console.error(err);
      }
    };

    loadBooks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-4 flex justify-center">Popular Books</h2>
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
