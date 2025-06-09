import React from 'react';
import heroImage from '../assets/hero.png';
 // Make sure this image exists in /src/assets

const Home = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Optional dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6 bg-white bg-opacity-90 text-black">
        <div className="text-3xl font-bold">KDTF</div>
        <ul className="flex gap-8 text-lg font-medium">
          <li><a href="#">Events</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Programs</a></li>
          <li><a href="#">Vision</a></li>
          <li><a href="#">Login</a></li>
          <li>
            <button className="bg-white text-black px-4 py-1 border border-black font-semibold hover:bg-gray-100 transition">
              Donate
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Text */}
      <div className="relative z-10 flex items-center h-[calc(100vh-100px)] px-10">
        <div className="max-w-xl text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Home of Drones For Good® and AAM for Good®.
        </div>
      </div>
    </div>
  );
};

export default Home;
