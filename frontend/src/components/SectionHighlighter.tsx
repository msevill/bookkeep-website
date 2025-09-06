"use client";
import React, { useEffect, useRef } from 'react';

interface SectionHighlighterProps {
  sectionId: string;
  highlightClass?: string;
}

const SectionHighlighter: React.FC<SectionHighlighterProps> = ({ sectionId, highlightClass = 'ring-4 ring-blue-200' }) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === `#${sectionId}`) {
        const el = document.getElementById(sectionId);
        if (el) {
          const classes = highlightClass.split(' ');
          el.classList.add(...classes);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            el.classList.remove(...classes);
          }, 900);
        }
      }
    };
    window.addEventListener('hashchange', handleHash);
    // Initial load
    handleHash();
    return () => {
      window.removeEventListener('hashchange', handleHash);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [sectionId, highlightClass]);
  return null;
};

export default SectionHighlighter;
