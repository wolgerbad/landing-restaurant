import Image from 'next/image';
import Button from './Button';

export default function About() {
  return (
    <div className="bg-neutral1 pt-[120px]" id="about">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[75px] items-end">
        <div>
          <div className="mb-[60px]">
            <p className="mb-4 text-primary font-jost text-[18px]">About</p>
            <h2 className="mb-8 font-gilda tracking-wider text-6xl">
              Every Celebration Remarkable
            </h2>
            <p className="mb-10 font-jost text-[18px] text-neutral4">
              At Sofra Restaurant, dining is more than just a meal—it’s an
              experience of flavor, tradition, and hospitality. Inspired by the
              rich heritage of culinary artistry, Sofra brings together
              authentic recipes, fresh ingredients, and modern presentation to
              create dishes that delight every sense.
            </p>
            <Button className={`text-neutral1 font-jost font-semibold`}>
              book your table
            </Button>
          </div>
          <div className="font-gilda grid grid-cols-2 gap-x-[70px] gap-y-[30px]">
            <div className="h-36 flex flex-col justify-center">
              <h2 className=" mb-[14px] text-6xl tracking-widest">110+</h2>
              <p className=" font-jost text-[18px] text-neutral4">
                Seasonal Delights to Enjoy Fresh flavors
              </p>
            </div>
            <div className="h-36 flex flex-col justify-center">
              <h2 className=" mb-[14px] tracking-widest text-6xl">120+</h2>
              <p className=" font-jost text-[18px] text-neutral4">
                Healthy Choices with Nutritious options
              </p>
            </div>
            <div className="h-36 flex flex-col justify-center">
              <h2 className=" mb-[14px] tracking-widest text-6xl">30+</h2>
              <p className=" font-jost text-[18px] text-neutral4">
                Years of Exceptional Dining Experiences
              </p>
            </div>
            <div className="h-36 flex flex-col justify-center">
              <h2 className=" mb-[14px] tracking-widest text-6xl">100+</h2>
              <p className=" font-jost text-[18px] text-neutral4">
                Outstanding Customers Reviews
              </p>
            </div>
          </div>
        </div>
        <div className="h-full flex items-end">
          <Image
            src="/about/about.avif"
            alt="A photograph of a cheff"
            className="object-contain h-[722px]"
            width={1046}
            height={722}
          />
        </div>
      </div>
    </div>
  );
}
