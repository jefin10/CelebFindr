import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-950 py-4 px-6 flex justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          Celebrity Detector
        </span>
      </h1>
    </nav>
  );
};

export default Navbar;
