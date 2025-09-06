"use client";

import { useEffect, useState } from 'react';
import { fetchHeaderData } from '../utils/fetchHeaderNavLinks';
import Navbar from './common/Navbar';

export default function Header() {
  const [navLinks, setNavLinks] = useState([]);
  const [headerName, setHeaderName] = useState('Supportive Bookkeepers Society');

  useEffect(() => {
    fetchHeaderData().then(headerData => {
      if (headerData) {
        setHeaderName(headerData.headerName || 'Supportive Bookkeepers Society');
        const links = (headerData.navLinks ?? []).map((link) => ({
          label: link.label,
          href: link.url,
          openInNewTab: link.openInNewTab,
          children: (link.children ?? []).map((child) => ({
            label: child.label,
            href: child.url,
            openInNewTab: child.openInNewTab,
          })),
        }));
        setNavLinks(links);
      }
    });
  }, []);

  return <Navbar navLinks={navLinks} headerName={headerName} />;
}
