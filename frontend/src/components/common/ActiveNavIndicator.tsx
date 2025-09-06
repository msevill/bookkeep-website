"use client";
import React, { useEffect, useRef, useState } from 'react';


interface ActiveNavIndicatorProps {
  linkRefs: React.RefObject<(HTMLAnchorElement | null)[]>;
  activeIdx: number | null;
}

const ActiveNavIndicator: React.FC<ActiveNavIndicatorProps> = ({ linkRefs, activeIdx }) => {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeIdx !== null && indicatorRef.current && linkRefs.current && linkRefs.current[activeIdx]) {
      const link = linkRefs.current[activeIdx];
      const rect = link!.getBoundingClientRect();
      indicatorRef.current.style.width = rect.width + 'px';
      indicatorRef.current.style.left = link!.offsetLeft + 'px';
      indicatorRef.current.style.opacity = '1';
    } else if (indicatorRef.current) {
      indicatorRef.current.style.opacity = '0';
    }
  }, [activeIdx, linkRefs]);

  return (
    <div className="relative h-0">
      <div
        ref={indicatorRef}
        className="absolute bottom-0 h-1 bg-gradient-to-r from-blue-800 to-blue-400 rounded transition-all duration-300"
        style={{ opacity: 0, width: 0, left: 0 }}
      />
    </div>
  );
};

export default ActiveNavIndicator;
