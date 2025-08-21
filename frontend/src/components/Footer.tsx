'use client';
import React from 'react';
import { StrapiResponse, FooterContent } from '../types/strapi';
import { fetchFromApi } from '../utils/fetchFromApi';
import { API_BASE_URL } from '../config/api';

const Footer: React.FC = () => {
  // Removed duplicate 'footer' variable declaration and logic

  const [footer, setFooter] = React.useState('');
  React.useEffect(() => {
    const fetchFooter = async () => {
      try {
        const data: StrapiResponse<Partial<FooterContent>> = await fetchFromApi(
          `${API_BASE_URL}/api/footer`
        );
        if (Array.isArray(data?.data)) {
          setFooter(data.data[0]?.copyright ?? '');
        } else {
          setFooter(data?.data?.copyright ?? '');
        }
      } catch (error) {
        setFooter('Failed to load footer.');
      }
    };
    fetchFooter();
  }, []);

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white mb-2">
            {/* Example logo SVG, replace with your actual logo if needed */}
            <svg
              className="w-8 h-8 text-blue-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </span>
          <span className="text-xl font-bold tracking-tight">
            Supportive Bookkeepers Society
          </span>
          <span className="text-sm text-blue-100">
            123 Financial Street, Suite 456
            <br />
            Business District, NY 10001
          </span>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-base font-medium">
            <a href="#services" className="hover:text-blue-200 transition">
              Services
            </a>
            <a href="#seminars" className="hover:text-blue-200 transition">
              Seminars
            </a>
            <a href="#testimonials" className="hover:text-blue-200 transition">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-blue-200 transition">
              FAQ
            </a>
            <a href="#contact" className="hover:text-blue-200 transition">
              Contact
            </a>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact</h4>
          <div className="flex flex-col gap-2 text-base">
            <span>
              Email:{' '}
              <a href="mailto:info@sbsbookkeeping.com" className="underline">
                info@sbsbookkeeping.com
              </a>
            </span>
            <span>
              Phone:{' '}
              <a href="tel:(123) 456-7890" className="underline">
                (123) 456-7890
              </a>
            </span>
            <span>
              Business Hours: <br />
              Monday - Friday: 9:00 AM - 5:00 PM
              <br />
              Saturday & Sunday: Closed
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com/sbsbookkeep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
              </svg>
            </a>
            <a
              href="https://x.com/sbsbookkeep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.924 2.206-4.924 4.924 0 .386.045.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.016-.634.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://linkedIn.com/in/sbsbookkeep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.604v5.592z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-blue-100 text-sm">
        &copy; {new Date().getFullYear()} Supportive Bookkeepers Society. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
