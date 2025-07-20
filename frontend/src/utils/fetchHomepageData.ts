import { fetchFromApi } from './fetchFromApi';
import type { StrapiResponse } from '../types/strapi';

export interface JumbotronButton {
  label: string;
  className?: string | null;
}

export interface JumbotronData {
  title: string;
  description: string;
  buttons: JumbotronButton[];
}

export interface Testimonial {
  id: number;
  testimonial: string;
  name: string;
  designation: string;
  rating: number;
}

export interface TestimonialsSectionData {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

export interface HomepageData {
  jumbotron: JumbotronData;
  testimonialsSection: TestimonialsSectionData;
}

export async function fetchHomepageData(): Promise<HomepageData | null> {
  try {
    const data: StrapiResponse<any> = await fetchFromApi('http://localhost:1337/api/home-page?populate[]=JumbotronSection.Buttons&populate[]=TestimonialsSection.Testimonials&populate[]=ContactSection.Form.Fields');
    const homepage = data?.data;
    if (!homepage) return null;

    const jumbotron = {
      title: homepage.JumbotronSection?.title ?? '',
      description: homepage.JumbotronSection?.description ?? '',
      buttons: (homepage.JumbotronSection?.Buttons || []).map((btn: any) => ({
        label: btn.label ?? '',
        className: btn.class ?? null,
      })),
    };

    const testimonialsSectionRaw = homepage.TestimonialsSection ?? {};
    const testimonialsSection = {
      title: testimonialsSectionRaw.Title ?? '',
      description: testimonialsSectionRaw.Description ?? '',
      testimonials: (testimonialsSectionRaw.Testimonials || []).map((t: any) => ({
        id: t.id,
        testimonial: t.Testimonial ?? '',
        name: t.Name ?? '',
        designation: t.Designation ?? '',
        rating: t.Rating ?? 0,
      })),
    };

    return {
      jumbotron,
      testimonialsSection,
    };
  } catch (error) {
    return null;
  }
}
