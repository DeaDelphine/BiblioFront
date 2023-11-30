/* eslint-disable react/prop-types */
import { deleteBook } from "../api";

const BookListItem = ({book, onDelete}) => {
  const handleDelete = async ()=> {
    try {
      await deleteBook(book._id);
      onDelete(book._id)
    } catch (error) {
      console.error('Error deleting book', error);
    }
  }
    return (
       
  <li>
            <strong>{book.title}</strong> par {book.authorName} (Catégories: {book.categoryName})
            Couverture : <img src= {book.image} alt="" /> <br />
    <button onClick={handleDelete}>Suprimmer</button>
            </li>
       
            );
          
};

export default BookListItem;
