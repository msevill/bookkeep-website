'use client';

import React from 'react';
import Button from './common/Button';
import type { JumbotronData } from '../utils/fetchHomepageData';

interface HeroProps {
  jumbotron?: JumbotronData;
}

const Hero: React.FC<HeroProps> = ({ jumbotron }) => (
  <div className="hero-pattern bg-blue-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {jumbotron?.title ?? 'Master Bookkeeping Skills'}
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            {jumbotron?.description ??
              'Join our free seminars and learn essential bookkeeping skills from industry experts. Perfect for students, career changers, and professionals looking to enhance their financial knowledge.'}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {(
              jumbotron?.buttons ?? [
                {
                  label: 'Register for Free Seminars',
                  className:
                    'inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-800 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300',
                },
              ]
            ).map((btn, idx) => (
              <Button
                key={idx}
                className={
                  btn.className ??
                  'inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-800 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300'
                }
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          {/* SVG illustration from HTML */}
          <svg
            className="w-full h-auto"
            viewBox="0 0 500 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="50"
              y="50"
              width="400"
              height="300"
              rx="20"
              fill="#ffffff"
              fillOpacity="0.1"
            />
            <rect
              x="100"
              y="100"
              width="300"
              height="40"
              rx="5"
              fill="#ffffff"
              fillOpacity="0.2"
            />
            <rect
              x="100"
              y="160"
              width="140"
              height="20"
              rx="5"
              fill="#ffffff"
              fillOpacity="0.2"
            />
            <rect
              x="260"
              y="160"
              width="140"
              height="20"
              rx="5"
              fill="#ffffff"
              fillOpacity="0.2"
            />
            <rect
              x="100"
              y="200"
              width="140"
              height="20"
              rx="5"
              fill="#ffffff"
              fillOpacity="0.2"
            />
            <rect
              x="260"
              y="200"
              width="140"
              height="20"
              rx="5"
              fill="#ffffff"
              fillOpacity="0.2"
            />
            <rect
              x="100"
              y="240"
              width="140"
              height="20"
              rx="5"
              fill="#ffffff"
              fillOpacity="0.2"
            />
            <rect
              x="260"
              y="240"
              width="140"
              height="20"
              rx="5"
              fill="#ffffff"
              fillOpacity="0.2"
            />
            <rect
              x="100"
              y="280"
              width="300"
              height="40"
              rx="5"
              fill="#ffffff"
              fillOpacity="0.2"
            />
            <circle cx="430" cy="70" r="10" fill="#4ade80" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
