import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

function BookTable() {
  const [books, setBooks] = useState([]);

  const [page, setPage ] = useState(0)

  const hanldeIncrement = () => {
    if(page <= books.length){
      setPage(page + 1)
    }
  }

  const handleDecrement = () => {
    if(page > 0){
      setPage(page - 1)
    }
  }


  function showData() {
    axios.get(`http://localhost:7000/read/book?page=${page}`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error loading books:", err));
  }

  const searchData  = (id) => {
    const key = id.target.value
    if(key){
      axios.get(`http://localhost:7000/search/book/${key}`).then((res) => {
        setBooks(res.data)
      })
    }
    else{
      showData()
    }
  }



  useEffect(() => {
    showData()
  }, [page]);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-10">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Book List</h2>
        <input onChange={searchData} className="w-80 pl-4 rounded-lg text-2xl" type="search" placeholder="search book..." />
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
          {books.length > 0 ? books.map((book, index) => (
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
          ))
          :
            <tr>
              <td colSpan="6" className="p-4 text-center text-gray-500">
                No books found.
              </td>
            </tr>
        }
          
            
        </tbody>
      </table>

      <div className="absolute bottom-3 right-2 ">
        <button onClick={handleDecrement} className="bg-orange-600 px-12 py-3 text-2xl rounded-lg text-white ml-5">prev</button>
        <button onClick={hanldeIncrement} className="bg-orange-600 px-12 py-3 text-2xl rounded-lg text-white ml-5">Next</button>
      </div>
    </div>
  );
}

export default BookTable;
