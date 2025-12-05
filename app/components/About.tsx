import Image from 'next/image';
import Button from './Button';
import { motion } from 'motion/react';
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-neutral1 pt-[120px] md:max-xl:px-20 xs:max-xl:px-5"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 xs:max-xl:grid-cols-1 gap-[75px] items-end">
        <div>
          <div className="mb-[60px] xs:max-xl:flex flex-col xs:max-xl:text-center xs:max-xl:items-center">
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
          <div className="font-gilda grid grid-cols-2 xs:max-md:grid-cols-1 gap-x-[70px] gap-y-[30px] place-items-center">
            <div className="flex flex-col justify-center xs:max-md:items-center">
              <h2 className=" mb-[14px] text-6xl tracking-widest">110+</h2>
              <p className=" font-jost text-[18px] text-neutral4">
                Seasonal Delights to Enjoy Fresh flavors
              </p>
            </div>
            <div className="flex flex-col justify-center xs:max-md:items-center">
              <h2 className=" mb-[14px] tracking-widest text-6xl">120+</h2>
              <p className=" font-jost text-[18px] text-neutral4">
                Healthy Choices with Nutritious options
              </p>
            </div>
            <div className="flex flex-col justify-center xs:max-md:items-center">
              <h2 className=" mb-[14px] tracking-widest text-6xl">30+</h2>
              <p className=" font-jost text-[18px] text-neutral4">
                Years of Exceptional Dining Experiences
              </p>
            </div>
            <div className="flex flex-col justify-center xs:max-md:items-center">
              <h2 className=" mb-[14px] tracking-widest text-6xl">100+</h2>
              <p className=" font-jost text-[18px] text-neutral4">
                Outstanding Customers Reviews
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[722px] overflow-hidden relative xs:max-md:hidden">
          <Image
            src="/about/about.avif"
            alt="A photograph of a cheff"
            className="md:max-xl:w-full w-full h-full object-cover object-top absolute bottom-0"
            width={1046}
            height={722}
          />
        </div>
      </div>
    </motion.div>
  );
}
