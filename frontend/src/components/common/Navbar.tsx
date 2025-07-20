'use client';
import React, { useState } from 'react';

export interface NavLink {
  label: string;
  href: string;
  openInNewTab?: boolean | null;
  children?: NavLink[];
}

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleExpand = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-bold text-blue-800">
              Supportive Bookkeepers Society
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks?.map((link, idx) => (
              <div key={link.href} className="relative group">
                <a
                  href={link.href}
                  target={link.openInNewTab ? '_blank' : undefined}
                  rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                  className="px-3 py-2 text-blue-800 hover:text-blue-600 font-medium"
                >
                  {link.label}
                </a>
                {link.children && link.children.length > 0 && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded z-10 hidden group-hover:block">
                    {link.children.map((child, childIdx) => (
                      <a
                        key={`${child.href}-${childIdx}`}
                        href={child.href}
                        target={child.openInNewTab ? '_blank' : undefined}
                        rel={
                          child.openInNewTab ? 'noopener noreferrer' : undefined
                        }
                        className="block px-4 py-2 text-blue-800 hover:bg-blue-50"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
            {navLinks.map((link, idx) => (
              <div key={link.href}>
                <button
                  className="block w-full text-left px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md"
                  onClick={() => handleExpand(idx)}
                >
                  {link.label}
                  {link.children && link.children.length > 0 && (
                    <span className="ml-2">{expanded[idx] ? '▲' : '▼'}</span>
                  )}
                </button>
                {link.children && link.children.length > 0 && expanded[idx] && (
                  <div className="pl-4">
                    {link.children.map((child, childIdx) => (
                      <a
                        key={`${child.href}-${childIdx}`}
                        href={child.href}
                        target={child.openInNewTab ? '_blank' : undefined}
                        rel={
                          child.openInNewTab ? 'noopener noreferrer' : undefined
                        }
                        className="block px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
