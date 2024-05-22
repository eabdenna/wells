import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-8" />
              <span className="text-white text-lg font-semibold">Texas Auto Buy</span>
            </div>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:space-x-4">
          <li>
            <Link href="/" passHref>
              <span className="text-white hover:text-gray-300 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span className="text-white hover:text-gray-300 cursor-pointer">About</span>
            </Link>
          </li>
          <li>
            <Link href="/faq" passHref>
              <span className="text-white hover:text-gray-300 cursor-pointer">FAQ</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span className="text-white hover:text-gray-300 cursor-pointer">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <ul className="space-y-4 mt-4 p-4 bg-gray-800 rounded-md shadow-lg">
          <li>
            <Link href="/" passHref>
              <span className="text-white hover:text-gray-300 cursor-pointer block">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span className="text-white hover:text-gray-300 cursor-pointer block">About</span>
            </Link>
          </li>
          <li>
            <Link href="/faq" passHref>
              <span className="text-white hover:text-gray-300 cursor-pointer block">FAQ</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span className="text-white hover:text-gray-300 cursor-pointer block">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
