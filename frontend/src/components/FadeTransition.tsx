// FadeTransition.tsx
'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FadeTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setShow(true);
    }, 180); // match CSS duration
    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div
      className={`transition-opacity duration-200 ease-in-out ${show ? 'opacity-100' : 'opacity-0'}`}
      style={{ minHeight: '100vh' }}
    >
      {displayChildren}
    </div>
  );
}
