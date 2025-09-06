"use client";
import React, { useRef, useEffect, useState } from 'react';

type FadeInOnViewProps<T extends keyof React.JSX.IntrinsicElements = 'div'> = {
  children: React.ReactNode;
  className?: string;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

function FadeInOnView<T extends keyof React.JSX.IntrinsicElements = 'div'>(
  { children, className = '', as, ...rest }: FadeInOnViewProps<T>
) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = (as || 'div') as any;
  return (
    <Tag
      ref={ref}
      className={`transition-opacity duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}


export default FadeInOnView;
