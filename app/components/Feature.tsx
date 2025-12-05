import Image from 'next/image';

export default function Feature() {
  return (
    <div className="bg-neutral1 text-center text-neutral4 md:max-xl:px-20 xs:max-xl:px-5">
      <div className="max-w-[1200px] mx-auto px-[20px] py-[120px] grid grid-cols-3 md:max-xl:grid-cols-2 xs:max-md:grid-cols-1 gap-[35px]">
        <div className="flex flex-col gap-[20px]">
          <div className="relative aspect-square h-[280px]">
            <Image
              src="/feature/pasta.avif"
              alt="Small picture of a pasta"
              fill={true}
              className="object-contain"
            />
          </div>
          <h3 className="text-3xl  font-gilda">Pasta & Noodles</h3>
          <p className="font-jost text-[18px]">
            An indulgent collection of Italian pastas and Asian noodles with
            rich sauces.
          </p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="relative aspect-square h-[280px]">
            <Image
              src="/feature/dessert.avif"
              alt="Small picture of a dessert"
              className="object-contain"
              fill={true}
            />
          </div>
          <h3 className="text-3xl font-gilda">Desserts & Sweet</h3>
          <p className="font-jost text-[18px]">
            Indulge in irresistible cakes, pastries, & traditional sweets to end
            on a high.
          </p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="relative aspect-square h-[280px]">
            <Image
              src="/feature/burger.avif"
              alt="Small picture of a burger"
              fill={true}
              className="object-contain"
            />
          </div>
          <h3 className="text-3xl font-gilda">Chef’s Specials</h3>
          <p className="font-jost text-[18px]">
            Exclusive dishes prepared with passion & creativity, available for a
            limited time.
          </p>
        </div>
      </div>
    </div>
  );
}
