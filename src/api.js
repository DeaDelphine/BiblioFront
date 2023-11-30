

export default async function getAllBooks() {
    try {
        const response = await fetch(`api/book/all`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching books', error);
        throw error;
    }
}

export const deleteBook = async (bookId) => {
    try {
      const response = await fetch(`api/book/${bookId}/delete`,{method: 'DELETE'})
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error deleting book',error)
      throw error
    }
  }