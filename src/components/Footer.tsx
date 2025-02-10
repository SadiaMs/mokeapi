import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
              <li><Link href="/order" className="hover:text-gray-400">Order Now</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                <FaGoogle size={24} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

