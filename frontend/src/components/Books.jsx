import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

function BookTable() {
  const [books, setBooks] = useState([]);


  function showData() {
    axios.get("http://localhost:7000/read/book")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error loading books:", err));
  }



  useEffect(() => {
    showData()
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-10">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Book List</h2>
        <input className="w-80 pl-4 rounded-lg text-2xl" type="search" placeholder="search book..." />
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-orange-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Book Name</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">
                <img className="w-20" src={`http://localhost:7000/allDocs/${book.image}`} alt="" />
              </td>
              <td className="border p-2">{book.title}</td>
              <td className="border p-2">{book.author}</td>
              <td className="border p-2">{book.description}</td>
              <td className="border p-2">${book.price}</td>
              <td className="border p-2 space-x-4">
                <Link to={`/update/book/${book._id}`}><i className="fa-solid fa-pen-to-square text-blue-600 cursor-pointer"></i></Link>
                <i className="fa-solid fa-trash text-red-600 cursor-pointer"></i>
              </td>
            </tr>
          ))}
          {books.length === 0 && (
            <tr>
              <td colSpan="6" className="p-4 text-center text-gray-500">
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
