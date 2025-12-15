'use client';

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
import LenisProvider from './components/LenisProvider';

export default function Home() {
  return (
    <LenisProvider>
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
    </LenisProvider>
  );
}
