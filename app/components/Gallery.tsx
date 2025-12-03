import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export default function Gallery() {
  return (
    <div className="flex h-[400px]">
      <div className="relative flex-1 h-full group">
        <Image
          src="/gallery/saladmix.avif"
          alt="Picture of salad"
          width={250}
          height={400}
          className="w-full object-cover h-full"
        />
        <span className="flex justify-center items-center absolute right-0 -bottom-100 left-0 h-full bg-neutral3/80 group-hover:-translate-y-[400px] transition-transform duration-400 ease-in">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-neutral1 bg-primary p-4 rounded-full"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
      <div className="relative flex-1 h-full group">
        <Image
          src="/gallery/grapefruit.avif"
          alt="Picture of salad"
          width={250}
          height={400}
          className=" w-full object-cover h-full"
        />
        <span className="flex justify-center items-center absolute right-0 -bottom-100 left-0 h-full bg-neutral3/80 group-hover:-translate-y-[400px] transition-transform duration-400 ease-in">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-neutral1 bg-primary p-4 rounded-full"
          >
            <FaInstagram />
          </a>
        </span>
      </div>

      <div className="relative group flex-1 h-full">
        <Image
          src="/gallery/apple.avif"
          alt="Picture of salad"
          width={250}
          height={400}
          className="w-full h-full object-cover"
        />
        <span className="flex justify-center items-center absolute right-0 -bottom-100 left-0 h-full bg-neutral3/80 group-hover:-translate-y-[400px] transition-transform duration-400 ease-in">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-neutral1 bg-primary p-4 rounded-full"
          >
            <FaInstagram />
          </a>
        </span>
      </div>

      <div className="relative group flex-1 h-full">
        <Image
          src="/gallery/egg.avif"
          alt="Picture of salad"
          width={250}
          height={400}
          className="w-full h-full object-cover"
        />
        <span className="flex justify-center items-center absolute right-0 -bottom-100 left-0 h-full bg-neutral3/80 group-hover:-translate-y-[400px] transition-transform duration-400 ease-in">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-neutral1 bg-primary p-4 rounded-full"
          >
            <FaInstagram />
          </a>
        </span>
      </div>

      <div className="relative group flex-1 h-full">
        <Image
          src="/gallery/tortilla.avif"
          alt="Picture of salad"
          width={250}
          height={400}
          className="w-full h-full object-cover"
        />
        <span className="flex justify-center items-center absolute right-0 -bottom-100 left-0 h-full bg-neutral3/80 group-hover:-translate-y-[400px] transition-transform duration-800 ease-in">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-neutral1 bg-primary p-4 rounded-full"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
    </div>
  );
}
