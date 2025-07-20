'use client';
import React from 'react';
import TestimonialCard from './cards/TestimonialCard';
import type { TestimonialsSectionData } from '../utils/fetchHomepageData';

interface TestimonialsProps {
  testimonialsSection?: TestimonialsSectionData;
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonialsSection }) => (
  <div id="testimonials" className="py-16 bg-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {testimonialsSection?.title ?? 'What Our Students Say'}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          {testimonialsSection?.description ??
            'Hear from professionals who have benefited from our seminars'}
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {(testimonialsSection?.testimonials ?? []).map((t) => (
          <TestimonialCard
            key={t.id}
            name={t.name}
            role={t.designation}
            text={t.testimonial}
            rating={t.rating}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
