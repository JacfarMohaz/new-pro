import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HeaderBookStore() {
  return (
    <header className="w-full bg-white shadow-md px-6 md:px-48 py-4 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-yellow-600 cursor-pointer">
        Book<span className="text-gray-800">Haven</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <a href="#home" className="hover:text-yellow-600 transition">Home</a>
        <a href="#categories" className="hover:text-yellow-600 transition">Categories</a>
        <a href="#bestsellers" className="hover:text-yellow-600 transition">Best Sellers</a>
        <a href="#contact" className="hover:text-yellow-600 transition">Contact</a>
      </nav>

      {/* Right side buttons */}
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-yellow-600 transition">
          <FaUser />
          Login
        </button>
      <Link to='/register'>
      <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-yellow-600 transition border border-yellow-500 px-3 py-1 rounded">
          Register Customer
        </button>
      </Link>
        

        <button className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded text-sm shadow hover:bg-yellow-600 transition">
          <FaShoppingCart />
          Cart
        </button>
      </div>
    </header>
  );
}

export default HeaderBookStore;
