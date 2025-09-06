"use client";
import React, { useEffect, useRef, useState } from 'react';
import HashLoadingOverlay from './HashLoadingOverlay';

const HashNavigationHandler: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const hashRef = useRef<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash !== hashRef.current) {
        setShowOverlay(true);
        setTimeout(() => {
          setShowOverlay(false);
          // Scroll to the section after overlay
          const el = document.getElementById(hash.replace('#', ''));
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 400);
        hashRef.current = hash;
      }
    };

    // On initial load with hash
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return <HashLoadingOverlay visible={showOverlay} />;
};

export default HashNavigationHandler;
