export interface StrapiResponse<T> {
  data: T | [T],
  meta: {}
}

export interface FooterContent {
  id: string;
  copyright: string;
}

export interface HeaderContent {
  logo: string;
  navLinks?: Array<{
    label: string;
    href: string;
  }>;
}
