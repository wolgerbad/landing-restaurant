'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-neutral4 border-b border-neutral-600 font-jost xs:max-md:px-5 md:max-xl:px-8">
      <nav className="flex justify-between items-center text-neutral1 font-semibold max-w-[1200px] mx-auto py-5">
        <Link href="#home">
          <Image
            src="/nav/logo.svg"
            alt="Restaurant logo"
            width={95}
            height={38}
          />
        </Link>
        <ul className="flex gap-10 text-lg xs:max-md:hidden">
          <Link href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
            HOME
          </Link>
          <Link href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>
            ABOUT US
          </Link>
          <Link
            href="#whychoose"
            onClick={(e) => handleSmoothScroll(e, '#whychoose')}
            className="hidden xl:block"
          >
            WHY CHOOSE
          </Link>
          <Link
            href="#booktable"
            onClick={(e) => handleSmoothScroll(e, '#booktable')}
          >
            BOOK A TABLE
          </Link>
        </ul>

        <Button className="xs:max-md:hidden">View Menu</Button>

        <button
          className="md:hidden text-neutral1"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="w-6 h-[2px] bg-neutral1 mb-1" />
          <div className="w-6 h-[2px] bg-neutral1 mb-1" />
          <div className="w-6 h-[2px] bg-neutral1" />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-neutral4 text-neutral1 pt-24 px-6">
          <button
            aria-label="Close menu"
            className="absolute top-6 right-6 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <div className="max-w-[1200px] mx-auto h-full flex flex-col items-center gap-6 text-xl">
            <Link
              href="#home"
              onClick={(e) => {
                handleSmoothScroll(e, '#home');
                setMenuOpen(false);
              }}
              className="block"
            >
              HOME
            </Link>
            <Link
              href="#about"
              onClick={(e) => {
                handleSmoothScroll(e, '#about');
                setMenuOpen(false);
              }}
              className="block"
            >
              ABOUT US
            </Link>
            <Link
              href="#whychoose"
              onClick={(e) => {
                handleSmoothScroll(e, '#whychoose');
                setMenuOpen(false);
              }}
              className="block"
            >
              WHY CHOOSE
            </Link>
            <Link
              href="#booktable"
              onClick={(e) => {
                handleSmoothScroll(e, '#booktable');
                setMenuOpen(false);
              }}
              className="block"
            >
              BOOK A TABLE
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
