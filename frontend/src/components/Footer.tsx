'use client';
import React from 'react';
import { StrapiResponse, FooterContent } from '../types/strapi';
import { fetchFromApi } from '../utils/fetchFromApi';

const Footer: React.FC = () => {
  let footer = '';
  try {
    const data: StrapiResponse<Partial<FooterContent>> = await fetchFromApi(
      'http://localhost:1337/api/footer'
    );
    if (Array.isArray(data?.data)) {
      footer = data.data[0]?.copyright ?? '';
    } else {
      footer = data?.data?.copyright ?? '';
    }
  } catch (error) {
    footer = 'Failed to load footer.';
  }

  return (
    <footer className="bg-blue-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold">Supportive Bookkeepers Society</span>{' '}
          &copy; {new Date().getFullYear()}
        </div>
        <div className="flex space-x-4">
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
