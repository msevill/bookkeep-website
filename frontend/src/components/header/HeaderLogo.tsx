import Image from 'next/image';
import React from 'react';

interface HeaderLogoProps {
  logoUrl: string;
  altText?: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({
  logoUrl,
  altText = 'Logo',
}) => (
  <div className="header-logo">
    <Image
      src={logoUrl}
      alt={altText}
      width={120}
      height={40}
      className="h-10 w-auto"
    />
  </div>
);

export default HeaderLogo;
