import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <div className="text-neutral1 pt-64 pb-24 pr-5 xs:max-xl:px-5" id="home">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 xs:max-xl:grid-cols-1 xs:max-xl:text-center gap-16 items-center">
        <div>
          <h1 className="text-7xl tracking-wide mb-8 font-gilda">
            Savor Every Moment with{' '}
            <span className="text-primary">Every Bite</span>
          </h1>
          <p className="mb-8 font-jost text-[18px]">
            Delight in flavors crafted to bring joy, comfort, and unforgettable
            dining experiences every time.
          </p>
          <Button className="font-jost font-semibold">Book your table</Button>
        </div>
        <div className="relative aspect-square xs:max-md:h-[250px] md:max-xl:h-[500px] xs:max-xl:mx-auto w-full">
          <Image
            src="/hero/bowl.webp"
            alt="Food bowl"
            fill={true}
            className="z-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
