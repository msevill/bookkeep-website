'use client';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <svg
                className="h-8 w-8 text-blue-800"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2H5v-2h10zM5 11h10V9H5v2zm0-4h2V5H5v2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-blue-800">
                Supportive Bookkeepers Society
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="px-3 py-2 text-blue-800 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            <a
              href="#seminars"
              className="px-3 py-2 text-blue-800 hover:text-blue-600 font-medium"
            >
              Seminars
            </a>
            <a
              href="#testimonials"
              className="px-3 py-2 text-blue-800 hover:text-blue-600 font-medium"
            >
              Testimonials
            </a>
            <a
              href="#orgchart"
              className="px-3 py-2 text-blue-800 hover:text-blue-600 font-medium"
            >
              Our Team
            </a>
            <a
              href="#faq"
              className="px-3 py-2 text-blue-800 hover:text-blue-600 font-medium"
            >
              FAQ
            </a>
            <a
              href="#about"
              className="px-3 py-2 text-blue-800 hover:text-blue-600 font-medium"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="px-3 py-2 text-blue-800 hover:text-blue-600 font-medium"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md"
            >
              Home
            </a>
            <a
              href="#seminars"
              className="block px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md"
            >
              Seminars
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md"
            >
              Testimonials
            </a>
            <a
              href="#orgchart"
              className="block px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md"
            >
              Our Team
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md"
            >
              FAQ
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
