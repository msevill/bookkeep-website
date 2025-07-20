import React from 'react';
import { fetchHomepageData } from '../utils/fetchHomepageData';
import Hero from '../components/Hero';
import Seminars from '../components/Seminars';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import OrgChart from '../components/OrgChart';

export default async function Home() {
  const homepageData = await fetchHomepageData();
  return (
    <main>
      <Hero jumbotron={homepageData?.jumbotron} />
      <Seminars />
      <Testimonials testimonialsSection={homepageData?.testimonialsSection} />
      <FAQ />
      <OrgChart />
    </main>
  );
}
