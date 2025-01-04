import React, { useState } from 'react';

const Navbar = () => {
  const [selectedButton, setSelectedButton] = useState('CELEBRITY DETECTOR');

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
  };

  return (
    <nav className="bg-gray-950 py-2 px-4 flex justify-center items-center gap-5">
      <button
        className={`bg-gray-800 p-4 rounded-full border-4 transition-all duration-300 ${
          selectedButton === 'CELEBRITY DETECTOR'
            ? 'border-blue-500 glow'
            : 'border-transparent hover:border-blue-500 hover:glow'
        }`}
        onClick={() => handleButtonClick('CELEBRITY DETECTOR')}
      >
        <h2 className="text-white font-bold">CELEBRITY DETECTOR</h2>
      </button>
      <button
        className={`bg-gray-800 p-4 rounded-full border-4 transition-all duration-300 ${
          selectedButton === 'LOOK ALIKE FINDER'
            ? 'border-pink-500 glow'
            : 'border-transparent hover:border-pink-500 hover:glow'
        }`}
        onClick={() => handleButtonClick('LOOK ALIKE FINDER')}
      >
        <h2 className="text-white font-bold">LOOK ALIKE FINDER</h2>
      </button>
    </nav>
  );
};

export default Navbar;