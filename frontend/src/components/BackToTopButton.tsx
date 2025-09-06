"use client";
import React, { useEffect, useState } from 'react';

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#1a4b8c] text-white shadow-lg hover:bg-[#3b82f6] transition-colors"
      aria-label="Back to top"
    >
      ↑
    </button>
  ) : null;
};

export default BackToTopButton;
