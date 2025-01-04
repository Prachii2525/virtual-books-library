const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

/**
 * Fetches popular books from the Google Books API.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of popular books data.
 */
export const fetchPopularBooks = async () => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Access API key from .env file
  const url = `${API_BASE_URL}?q=bestsellers&maxResults=20&key=${apiKey}`; // Fetch 20 results for "bestsellers"

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.json();
    return data.items || []; // Return the books array or an empty array
  } catch (error) {
    console.error("Error fetching popular books:", error);
    throw error;
  }
};
