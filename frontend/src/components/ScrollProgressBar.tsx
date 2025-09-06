"use client";
import React, { useEffect, useState } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const winScroll = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setScroll(height ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${scroll}%`,
      height: 3,
      background: 'linear-gradient(90deg, #1a4b8c 0%, #3b82f6 100%)',
      zIndex: 50,
      transition: 'width 0.2s',
      pointerEvents: 'none',
    }} />
  );
};

export default ScrollProgressBar;
