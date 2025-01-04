import react, { useState } from 'react';
import BookCard from './components/BookCard';
import Hero from './components/Hero';
import Header from './components/Header';
import BookList from './components/BookList';




function App() {
  const [books, setBooks] = useState([]);
  return (
    <div>
      <Header />
      <Hero />
      <BookList />
      
    </div>
  );
};

export default App
