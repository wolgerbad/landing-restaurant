import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <div className="text-neutral1 pt-64 pb-24 pr-5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-16 items-center">
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
        <div className="relative aspect-square">
          <Image
            src="/hero/bowl.webp"
            alt="Food bowl"
            fill={true}
            className="z-40"
          />
          <img
            src="/hero/leaf-next-bowl.avif"
            alt="Food bowl"
            className="absolute right-0 top-0 w-[10rem] h-[30rem]"
          />
        </div>
      </div>
    </div>
  );
}
