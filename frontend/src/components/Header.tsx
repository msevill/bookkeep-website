import { fetchHeaderData } from '../utils/fetchHeaderNavLinks';
import Navbar from './common/Navbar';

export default async function Header() {
  const headerData = await fetchHeaderData();
  console.log(JSON.stringify(headerData));
  const navLinks = (headerData?.navLinks ?? []).map((link) => ({
    label: link.label,
    href: link.url,
    openInNewTab: link.openInNewTab,
    children: (link.children ?? []).map((child) => ({
      label: child.label,
      href: child.url,
      openInNewTab: child.openInNewTab,
    })),
  }));

  return <Navbar navLinks={navLinks} />;
}
