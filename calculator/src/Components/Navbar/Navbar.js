import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/5/58/Zest_logo.png"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/5/58/Zest_logo.png"
                alt="Workflow"
              />
            </div>
            <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-green-900 z-10 transition-all duration-300`}>
              <div className="flex flex-col items-center justify-center space-y-4">
                <a href="#" className="bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Shop
                </a>
                <a href="#" className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Purchase
                </a>
                <a href="#" className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Profile
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Shop
                </a>
                <a href="#" className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Purchase
                </a>
                <a href="#" className="text-gray-300 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
