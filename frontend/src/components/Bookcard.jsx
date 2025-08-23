import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';

function BookCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/read/book")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ml-40 mt-10">
      {data.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-3 w-56"
        >
          {/* Book Cover */}
          <div className="h-60 w-full overflow-hidden rounded mb-3">
            <img
              src={`http://localhost:7000/allDocs/${item.image}`}
              alt={item.title}
              className="w-full h-full object-fit"
            />
          </div>


          {/* Book Title */}
          <h2 className="font-semibold text-[14px] text-gray-800 leading-snug line-clamp-2">
            {item.title}
          </h2>

          {/* Price */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-green-600 font-bold text-sm">${item.price}</span>
            <button className="bg-yellow-500 text-white px-3 py-[6px] text-xs rounded flex items-center gap-1 hover:bg-yellow-600 transition">
              <FaShoppingCart className="text-xs" />
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookCard;
