import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
     

        <p className="text-sm">
          &copy; {currentYear} <span className="font-semibold">Jabirshuuke</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
