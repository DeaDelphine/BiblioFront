import { useEffect, useState } from "react";
import getAllBooks from "../api.js";
import BookListItem from "./BookListItem";


const BookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books", error);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = (deleteBookId) => {
    setBooks((prevBooks) =>
      prevBooks.filter((book) => book._id !== deleteBookId)
    );
  };
  return (
    <div>
      <h2>Tout les livres</h2>
      <ul>
        {books.map((book) => (
          <BookListItem key={book.id} book={book} onDelete={handleDelete} />
        ))}
          </ul>
          
    </div>
  );
};

export default BookList;
