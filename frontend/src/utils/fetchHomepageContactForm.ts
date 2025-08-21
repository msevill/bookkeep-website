import { fetchFromApi } from './fetchFromApi';
import type { ContactForm } from './fetchHomepageData';
import { API_BASE_URL } from '../config/api';

export async function fetchHomepageContactForm(): Promise<ContactForm | null> {
  const homepage: any = await fetchFromApi(`${API_BASE_URL}/api/home-page?populate[]=ContactSection.Form.Fields`);
  return homepage?.data?.ContactSection?.Form ?? null;
}
