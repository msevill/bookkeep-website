'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import ActiveNavIndicator from './ActiveNavIndicator';

export interface NavLink {
  label: string;
  href: string;
  openInNewTab?: boolean | null;
  children?: NavLink[];
}


interface NavbarProps {
  navLinks: NavLink[];
  headerName?: string;
}


const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const Navbar: React.FC<NavbarProps> = ({ navLinks, headerName = 'Supportive Bookkeepers Society' }) => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileIdx, setExpandedMobileIdx] = useState<number | null>(null);
  const [openDropdownIdx, setOpenDropdownIdx] = useState<number | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen || !mobileMenuRef.current) return;
    const focusableSelectors = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
    const focusableEls = mobileMenuRef.current.querySelectorAll<HTMLElement>(focusableSelectors);
    if (focusableEls.length === 0) return;
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      } else if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    mobileMenuRef.current.addEventListener('keydown', handleKeyDown);
    // Focus the first element
    firstEl.focus();
    return () => {
      mobileMenuRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  // Desktop: handle mouse and keyboard for dropdowns with delay
  const handleDropdownOpen = (idx: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenDropdownIdx(idx);
  };
  const handleDropdownClose = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropdownIdx(null);
    }, 180); // 180ms delay
  };

  // Mobile: handle expand/collapse
  const handleExpandMobile = (idx: number) => {
    setExpandedMobileIdx(expandedMobileIdx === idx ? null : idx);
  };


  const linkRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
    const onScroll = () => {
      let foundIdx: number | null = null;
      for (let i = 0; i < navLinks.length; i++) {
        const id = navLinks[i].href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            foundIdx = i;
            break;
          }
        }
      }
      setActiveIdx(foundIdx);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [navLinks]);

  return (
    <nav className="bg-gradient-to-r from-blue-50/80 to-blue-100/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              className="ml-2 text-xl font-bold text-blue-800 bg-transparent border-none outline-none cursor-pointer hover:text-blue-600 transition-colors duration-200"
              style={{ background: 'none', padding: 0 }}
              aria-label="Scroll to top / hero"
              onClick={() => scrollToSection('hero')}
            >
              {headerName}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4 relative">
            {hasMounted && <ActiveNavIndicator linkRefs={linkRefs} activeIdx={activeIdx} />}
            {navLinks?.map((link, idx) => {
              const isOpen = openDropdownIdx === idx;
              return (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => handleDropdownOpen(idx)}
                  onMouseLeave={handleDropdownClose}
                >
                  <a
                    href={link.href}
                    target={link.openInNewTab ? '_blank' : undefined}
                    rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                    className={
                      `flex items-center gap-1 px-4 py-2 text-blue-800 font-medium rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ` +
                      (isOpen ? 'bg-blue-50 text-blue-700 shadow-sm' : 'hover:bg-blue-50 hover:text-blue-600')
                    }
                    ref={el => {
                      linkRefs.current[idx] = el;
                    }}
                    tabIndex={0}
                    aria-haspopup={!!link.children?.length}
                    aria-expanded={isOpen}
                  >
                    {link.label}
                    {link.children && link.children.length > 0 && (
                      <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    )}
                  </a>
                  {link.children && link.children.length > 0 && (
                    <div
                      className={`absolute left-0 mt-2 w-48 bg-white shadow-xl border border-blue-100 rounded-lg z-20 transition-all duration-300 ease-in-out
                        ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                      role="menu"
                    >
                      {link.children.map((child, childIdx) => (
                        <a
                          key={`${child.href}-${childIdx}`}
                          href={child.href}
                          target={child.openInNewTab ? '_blank' : undefined}
                          rel={child.openInNewTab ? 'noopener noreferrer' : undefined}
                          className="block px-4 py-2 text-blue-800 rounded-md hover:bg-blue-100 hover:text-blue-900 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                          tabIndex={0}
                          role="menuitem"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex items-center md:hidden">
            {!mobileOpen ? (
              <button
                onClick={() => setMobileOpen(true)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-full transition-colors duration-150"
                aria-label="Open menu"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setMobileOpen(false)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-full transition-colors duration-150"
                aria-label="Close menu"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden bg-white/90 backdrop-blur-lg border-t border-blue-100 shadow-xl"
          ref={mobileMenuRef}
          tabIndex={-1}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, idx) => (
              <div key={link.href}>
                <div className="flex items-center justify-between">
                  <a
                    href={link.href}
                    className="block w-full text-left px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md"
                    tabIndex={0}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.children && link.children.length > 0 && (
                    <button
                      className="ml-2 text-blue-800"
                      onClick={() => handleExpandMobile(idx)}
                      aria-label={expandedMobileIdx === idx ? `Collapse ${link.label}` : `Expand ${link.label}`}
                      aria-expanded={expandedMobileIdx === idx}
                      aria-controls={`mobile-dropdown-${idx}`}
                    >
                      {expandedMobileIdx === idx ? '▲' : '▼'}
                    </button>
                  )}
                </div>
                {/* Mobile dropdown animation */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${link.children && link.children.length > 0 && expandedMobileIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  id={`mobile-dropdown-${idx}`}
                  role="menu"
                  aria-hidden={!(link.children && link.children.length > 0 && expandedMobileIdx === idx)}
                >
                  {link.children && link.children.length > 0 && expandedMobileIdx === idx && (
                    <div className="pl-4">
                      {link.children.map((child, childIdx) => (
                        <a
                          key={`${child.href}-${childIdx}`}
                          href={child.href}
                          target={child.openInNewTab ? '_blank' : undefined}
                          rel={child.openInNewTab ? 'noopener noreferrer' : undefined}
                          className="block px-3 py-2 text-blue-800 font-medium hover:bg-blue-50 rounded-md"
                          tabIndex={0}
                          onClick={() => setMobileOpen(false)}
                          role="menuitem"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
