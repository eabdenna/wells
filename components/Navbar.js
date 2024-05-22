// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
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
        <ul className="flex space-x-4">
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
    </nav>
  );
};

export default Navbar;
