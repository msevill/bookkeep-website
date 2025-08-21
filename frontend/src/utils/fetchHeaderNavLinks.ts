import { fetchFromApi } from './fetchFromApi';
import type { StrapiResponse } from '../types/strapi';
import { API_BASE_URL } from '../config/api';

export interface NavLinkChild {
  label: string;
  url: string;
  openInNewTab: boolean | null;
}

export interface NavLink {
  label: string;
  url: string;
  openInNewTab: boolean | null;
  children: NavLinkChild[];
}

export interface HeaderData {
  headerName: string;
  logo: string | null;
  navLinks: NavLink[];
}

export async function fetchHeaderData(): Promise<HeaderData | null> {
  try {
    const data: StrapiResponse<any> = await fetchFromApi(`${API_BASE_URL}/api/header?populate[0]=logo&populate[1]=NavlinkTree.parent&populate[2]=NavlinkTree.children`);
    const header = data?.data;
    if (!header) return null;
    const navLinks: NavLink[] = (header.NavlinkTree || []).map((item: any) => ({
      label: item.parent?.label ?? '',
      url: item.parent?.url ?? '',
      openInNewTab: item.parent?.openInNewTab ?? null,
      children: (item.children || []).map((child: any) => ({
        label: child?.label ?? '',
        url: child?.url ?? '',
        openInNewTab: child?.openInNewTab ?? null,
      })),
    }));

    return {
      headerName: header.headerName ?? '',
      logo: header.logo ?? null,
      navLinks,
    };
  } catch (error) {
    return null;
  }
}
