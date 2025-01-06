const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

/**
 * Fetches books from the Google Books API based on a query or category.
 * @param {string} query - The search query or category name.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of books.
 */
export const fetchBooks = async (query) => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Access API key from .env file
  const url = `${API_BASE_URL}?q=${encodeURIComponent(query)}&maxResults=20&key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.json();
    return data.items || []; // Return the books array or an empty array
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
