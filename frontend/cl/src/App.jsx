import React from 'react';
import './index.css';
import Navbar from './template/Navbar';
import Cd from './template/Cd';

export default function App() {
  return (
    <div className="h-screen bg-gray-950 text-white">
      <Navbar />
      <Cd />
    </div>
  );
}