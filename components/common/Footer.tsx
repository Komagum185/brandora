import Image from 'next/image';
import Link from 'next/link';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h4>Plot 8, Buyinja Lane, Nakawa, Kampala</h4>
            <h4>Tel: +256757268698</h4>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/about" className="hover:text-blue-400">About Us
            </Link>
            <Link href="/services" className="hover:text-blue-400">Services
            </Link>
            <Link href="/FAQ" className="hover:text-blue-400">FAQ</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin className="w-4 h-4" />
               
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter className="w-4 h-4" />  
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
              <FaInstagram className="w-4 h-4" />  
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
            <Image src={'/brandora.png'} alt={'Brandora'}   width={150} height={200}/>
          &copy; {new Date().getFullYear()} Brandora. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
