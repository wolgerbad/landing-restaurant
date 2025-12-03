import Image from 'next/image';

export default function WhyChoose() {
  return (
    <div className="bg-neutral2 py-[120px] font-neutral4" id="whychoose">
      <div className="max-w-[1144px] mx-auto grid grid-cols-2 gap-[70px]">
        <div>
          <p className="text-primary font-jost text-[18px] mb-[24px]">
            Why Choose Us?
          </p>
          <h2 className="text-6xl font-gilda mb-[80px]">
            More Than Dining It's Sofra
          </h2>
          <div className="flex flex-col gap-8 w-[79%]">
            <div className="bg-neutral1 flex gap-5 justify-between items-center px-5 py-[34px]">
              <div>
                <h2 className="text-2xl font-gilda">
                  Fresh & Authentic Ingredients
                </h2>
              </div>
              <div>
                <Image
                  src="/whychoose/meat.svg"
                  alt="Small picture of meat"
                  width={95}
                  height={95}
                  className="max-w-none"
                />
              </div>
            </div>
            <div className="bg-neutral1 flex justify-between items-center px-5 py-[34px]">
              <div>
                <h2 className="text-2xl font-gilda">
                  Healthy & Flavorful Options
                </h2>
              </div>
              <div>
                <Image
                  src="/whychoose/salad.svg"
                  alt="Small picture of meat"
                  width={95}
                  height={95}
                />
              </div>
            </div>
            <div className="bg-neutral1 flex justify-between items-center px-5 py-[34px]">
              <div>
                <h2 className="text-2xl font-gilda">
                  Perfect for Every Occasion
                </h2>
              </div>
              <div>
                <Image
                  src="/whychoose/mix.svg"
                  alt="Small picture of meat"
                  width={95}
                  height={95}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[67px] relative">
          <div className="relative aspect-square">
            <Image
              src="/whychoose/main.avif"
              alt="Image of a plate filled with meat and potato"
              width={523}
              height={687}
            />
            <div className="p-[30px] w-[52.5%] flex flex-col gap-[10px] bg-neutral1 absolute -top-[30px] left-1/2 -translate-x-1/2 border border-primary text-center">
              <span className="text-neutral4 text-[18px] font-jost">
                Established Since
              </span>
              <span className="text-primary tracking-wide text-3xl font-gilda">
                1970
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
