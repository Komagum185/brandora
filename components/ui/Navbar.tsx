'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './button';
import { ButtonsCard } from './buttons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white justify-start ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/"className="text-2xl font-bold">
            <Image src={'/brandora.svg'}
             alt='Brandora Logo' width={250} height={50}/>
            </Link>
          </div>
          <div className="hidden md:flex space-x-2 justify-start">
            <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Home
            </Link>
            <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            About Us
            </Link>
            <Link href="/services" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Services
            </Link>
            <Link href="/contact"className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Works
            </Link>
            <Link href="/contact"className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
            <ButtonsCard className='bg-blue-600 border-none text-white' />
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="/about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
          <Link href="/service" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
          <Link href="/works"className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Works</Link>
          <Link href="/pricing"className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
