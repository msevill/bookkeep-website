import React from 'react';
import { fetchHomepageData } from '../utils/fetchHomepageData';
import Hero from '../components/Hero';
import Seminars from '../components/Seminars';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Services from '../components/Services';
import GetInTouch from '../components/GetInTouch';
import AboutSection from '../components/AboutSection';

export default async function Home() {
  const homepageData = await fetchHomepageData();
  return (
    <main>
      <Hero jumbotron={homepageData?.jumbotron} />
      <Services servicesSection={homepageData?.servicesSection} />
      <AboutSection />
      {/* <Seminars /> */}
      <Testimonials testimonialsSection={homepageData?.testimonialsSection} />
      <GetInTouch contactSection={homepageData?.contactSection} />
      <FAQ faqSection={homepageData?.faqSection} />
      {/* <OrgChart /> */}
    </main>
  );
}
