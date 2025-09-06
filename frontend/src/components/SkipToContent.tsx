"use client";
import React from 'react';

const SkipToContent: React.FC = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only absolute top-2 left-2 bg-white text-[#1a4b8c] px-4 py-2 rounded shadow z-50"
    tabIndex={0}
  >
    Skip to main content
  </a>
);

export default SkipToContent;
