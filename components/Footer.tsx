import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Brandora</h2>
            <p className="mt-2 text-sm">Building innovative tech solutions for a better future.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/about" className="hover:text-gray-400">About Us
            </Link>
            <Link href="/services" className="hover:text-gray-400">Services
            </Link>
            <Link href="/FAQ" className="hover:text-gray-400">FAQ</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.5.59-2.33.69.83-.51 1.5-1.32 1.8-2.3-.77.47-1.63.81-2.54 1-1.7-1.8-4.68-1.6-6.43.42-1.01 1.07-1.37 2.5-1.05 3.91C7.7 9.6 5.15 8.3 3.67 6.3c-.67 1.3-.33 2.84.79 3.7-.6-.03-1.16-.19-1.67-.46v.04c0 1.9 1.33 3.5 3.07 3.87-.32.08-.66.13-1 .13-.25 0-.49-.02-.73-.07.5 1.5 1.96 2.6 3.66 2.64-1.36 1.1-3.07 1.6-4.85 1.38 1.44 1 3.17 1.53 5.02 1.53 6.1 0 9.55-5.13 9.55-9.57 0-.14 0-.29-.01-.43.68-.5 1.28-1.15 1.75-1.88z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.325v21.351C0 23.406.594 24 1.325 24H12.82v-9.294H9.692v-3.617h3.128V8.413c0-3.1 1.894-4.792 4.659-4.792 1.324 0 2.46.098 2.792.142v3.24l-1.916.001c-1.504 0-1.796.715-1.796 1.764v2.314h3.586l-.467 3.617h-3.119V24h6.116c.73 0 1.325-.594 1.325-1.324V1.325C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.86v-4.866c0-1.159-.023-2.652-1.617-2.652-1.617 0-1.865 1.262-1.865 2.572v4.946H9.847V9.485h3.417v1.496h.048c.477-.9 1.64-1.85 3.378-1.85 3.609 0 4.276 2.374 4.276 5.458v6.863zM5.337 8.042c-1.106 0-2.004-.896-2.004-2.002 0-1.106.898-2.002 2.004-2.002 1.106 0 2.002.896 2.002 2.002 0 1.106-.896 2.002-2.002 2.002zM6.903 20.452H3.77V9.485h3.133v10.967zM22.225 0H1.771C.789 0 0 .78 0 1.742v20.516C0 23.221.789 24 1.771 24h20.451c.981 0 1.771-.779 1.771-1.742V1.742C24 .779 23.207 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Brandora. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
