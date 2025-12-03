'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function Navbar() {
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
    <div
      className={`fixed top-0 left-0 right-0 z-50  bg-neutral4 border-b border-neutral-600 font-jost`}
      id="home"
    >
      <nav className="flex justify-between items-center text-neutral1 font-semibold max-w-[1200px] mx-auto py-5">
        <div>
          <Image
            src="/nav/logo.svg"
            alt="Restaurant logo"
            width={95}
            height={38}
          />
        </div>
        <ul className="flex gap-10 text-lg">
          <Link href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
            HOME
          </Link>
          <Link href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>
            ABOUT US
          </Link>
          <Link
            href="#whychoose"
            onClick={(e) => handleSmoothScroll(e, '#whychoose')}
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

        <Button>View Menu</Button>
      </nav>
    </div>
  );
}
