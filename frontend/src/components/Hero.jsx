import React from 'react';
import books from '../assets/images/woman.png'; // Replace with your book image
import { FaBook, FaShoppingCart, FaBookmark, FaStar, FaTruck, FaTags } from 'react-icons/fa';

function HeroBookStore() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full py-10 px-6 md:px-48 shadow-md z-40
        bg-[radial-gradient(circle_at_top_left,_#fef9c3_0%,_transparent_40%),
             radial-gradient(circle_at_bottom_right,_#fef9c3_0%,_transparent_40%),
             white]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-left space-y-4 max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-600 leading-snug">
              <span className="text-black">Discover Your</span> <span>Next</span><br />
              <span className="text-black">Favorite</span> <span>Book</span>
            </h1>
            <p className="text-gray-600 text-sm">
              Explore thousands of titles across genres. <br />
              Dive into stories, knowledge, and inspiration.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="bg-yellow-500 text-white font-semibold px-4 py-2 text-sm rounded shadow hover:bg-yellow-600 transition">
                Shop Now
              </button>
              <button className="bg-yellow-200 text-yellow-800 font-semibold px-4 py-2 text-sm rounded shadow hover:bg-yellow-300 transition">
                Browse Categories
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="flex gap-2 flex-wrap pt-3">
              <div className="bg-white w-28 rounded shadow text-center h-14 py-2">
                <FaBook className="text-yellow-500 text-lg mx-auto" />
                <h3 className="font-medium text-[11px] text-gray-700">New Releases</h3>
              </div>
              <div className="bg-white w-28 rounded shadow text-center h-14 py-2">
                <FaStar className="text-yellow-500 text-lg mx-auto" />
                <h3 className="font-medium text-[11px] text-gray-700">Top Rated</h3>
              </div>
              <div className="bg-white w-28 rounded shadow text-center h-14 py-2">
                <FaTruck className="text-yellow-500 text-lg mx-auto" />
                <h3 className="font-medium text-[11px] text-gray-700">Fast Delivery</h3>
              </div>
            </div>
          </div>

          {/* Image Section with Cards */}
          <div className="relative mt-10 md:mt-0">
            <div className="w-60 h-60 rounded-full overflow-hidden bg-yellow-100">
              <img
                src={books}
                alt="Books Display"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-[-90px] top-1/2 -translate-y-1/2 bg-white w-32 rounded shadow text-center p-2">
              <FaBookmark className="text-yellow-500 text-xl mx-auto mb-1" />
              <h3 className="text-sm font-semibold text-gray-800">Genres</h3>
              <p className="text-yellow-600 text-xs">20+</p>
            </div>

            <div className="absolute -top-6 -right-6 bg-white w-32 rounded shadow text-center p-2">
              <FaTags className="text-yellow-500 text-xl mx-auto mb-1" />
              <h3 className="text-sm font-semibold text-gray-800">Discounts</h3>
              <p className="text-yellow-600 text-xs">Up to 50%</p>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white w-32 rounded shadow text-center p-2">
              <FaShoppingCart className="text-yellow-500 text-xl mx-auto mb-1" />
              <h3 className="text-sm font-semibold text-gray-800">Orders</h3>
              <p className="text-yellow-600 text-xs">10k+ Sold</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBookStore;
