'use client';

import Lenis from 'lenis';
import About from './components/About';
import BookTable from './components/BookTable';
import EventBooking from './components/EventBooking';
import ExploreMenu from './components/ExploreMenu';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import WhyChoose from './components/WhyChoose';
import { motion } from 'motion/react';

export default function Home() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  return (
    <div ref={lenis}>
      <div className="bg-neutral4">
        <Navbar />
        <Hero />
        <About />
        <Feature />
        <WhyChoose />
        <ExploreMenu />
        <EventBooking />
        <Testimonial />
        <BookTable />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}
