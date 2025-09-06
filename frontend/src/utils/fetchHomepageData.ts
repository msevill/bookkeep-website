import { fetchFromApi } from './fetchFromApi';
import { API_BASE_URL } from '../config/api';
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

export interface FAQItem {
  id: string | number;
  question: string;
  answer: string;
}

export interface FAQSectionData {
  title: string;
  description: string;
  faqs: FAQItem[];
}

export interface ServiceItem {
  id: string | number;
  name: string;
  description: string;
  sgvIcon: string;
  uuid: string;
}

export interface ServicesSectionData {
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface ContactInformation {
  email: string;
  address: string;
  phone: string;
  businessHours: string;
  socmedFB?: string;
  socmedX?: string;
  socmedLinkedIn?: string;
}

export interface ContactFormField {
  id: string | number;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  key?: string;
}

export interface ContactForm {
  title: string;
  submitButtonText: string;
  actionEndpoint?: string | null;
  fields: ContactFormField[];
}

export interface ContactSectionData {
  title: string;
  description: string;
  contactInformation: ContactInformation;
  form: ContactForm;
}

export interface AboutUsSection {
  id: number;
  Title: string;
  Description: any[];
}

export interface HomepageData {
  jumbotron: JumbotronData;
  testimonialsSection: TestimonialsSectionData;
  faqSection: FAQSectionData;
  servicesSection: ServicesSectionData;
  contactSection: ContactSectionData;
  AboutUsSection: AboutUsSection;
}

export async function fetchHomepageData(): Promise<HomepageData | null> {
  try {
    const url = `${API_BASE_URL}/api/home-page?populate[]=JumbotronSection.Buttons&populate[]=TestimonialsSection.Testimonials&populate[]=ContactSection.Form.Fields&populate[]=ContactSection.contactInformation&populate[]=FAQSection.faqs&populate[]=ServicesSection.services&populate[]=AboutUsSection`;
    const data: StrapiResponse<any> = await fetchFromApi(url);
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

    const faqSectionRaw = homepage.FAQSection ?? {};
    const faqSection = {
      title: faqSectionRaw.title ?? '',
      description: faqSectionRaw.description ?? '',
      faqs: (faqSectionRaw.faqs || []).map((f: any) => ({
        id: f.id,
        question: f.question ?? '',
        answer: f.answer ?? '',
      })),
    };

    const servicesSectionRaw = homepage.ServicesSection ?? {};
    const servicesSection = {
      title: servicesSectionRaw.title ?? '',
      description: servicesSectionRaw.description ?? '',
      services: (servicesSectionRaw.services || []).map((s: any) => ({
        id: s.id,
        name: s.name ?? '',
        description: s.description ?? '',
        sgvIcon: s.sgvIcon ?? '',
        uuid: s.uuid ?? '',
      })),
    };

    const contactSectionRaw = homepage.ContactSection ?? {};
    const contactSection = {
      title: contactSectionRaw.Title ?? '',
      description: contactSectionRaw.Description ?? '',
      contactInformation: {
        email: contactSectionRaw.contactInformation?.email ?? '',
        address: contactSectionRaw.contactInformation?.address ?? '',
        phone: contactSectionRaw.contactInformation?.phone ?? '',
        businessHours: contactSectionRaw.contactInformation?.businessHours ?? '',
        socmedFB: contactSectionRaw.contactInformation?.socmedFB ?? '',
        socmedX: contactSectionRaw.contactInformation?.socmedX ?? '',
        socmedLinkedIn: contactSectionRaw.contactInformation?.socmedLinkedIn ?? '',
      },
      form: {
        title: contactSectionRaw.Form?.title ?? '',
        submitButtonText: contactSectionRaw.Form?.SubmitButtonText ?? 'Send',
        actionEndpoint: contactSectionRaw.Form?.ActionEndpoint ?? null,
        fields: (contactSectionRaw.Form?.Fields || []).map((f: any) => ({
          id: f.id,
          label: f.Label ?? '',
          type: f.Type ?? 'text',
          placeholder: f.Placeholder ?? '',
          required: !!f.Required,
          key: f.Key ?? ''
        })),
      },
    };
    
    const aboutUsSectionRaw = homepage.AboutUsSection ?? {};
    const AboutUsSection = {
      id: aboutUsSectionRaw.id ?? 0,
      Title: aboutUsSectionRaw.Title ?? '',
      Description: aboutUsSectionRaw.Description ?? [],
    };
    return {
      jumbotron,
      testimonialsSection,
      faqSection,
      servicesSection,
      contactSection,
      AboutUsSection,
    };
  } catch (error) {
    return null;
  }
}
