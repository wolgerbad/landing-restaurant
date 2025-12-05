import Image from 'next/image';
import Button from './Button';

export default function EventBooking() {
  return (
    <div className="max-w-[1140px] mx-auto text-neutral1 pb-[120px] xs:max-xl:px-5 xs:max-md:text-center">
      <div className="grid grid-cols-2 gap-[136px] xs:max-xl:grid-cols-1">
        <div className="flex flex-col">
          <div className="mb-[50px]">
            <p className="text-primary font-jost text-[18px]  mb-[24px]">
              Event Booking
            </p>
            <h2 className="text-6xl font-gilda">
              Planning a Party or Special Event?
            </h2>
          </div>

          <div className="mb-[50px] bg-neutral3 relative py-[30px] px-[31px]">
            <h2 className="mb-[30px] text-3xl font-gilda">Opening Hour</h2>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 xs:max-md:grid-cols-1 justify-items-center xs:max-md:gap-4 font-semibold gap-[30px]">
                <span className="text-primary font-jost text-[18px] font-semibold ">
                  Monday - Saturday
                </span>
                <span>7.30 am - 10.30 pm</span>
              </div>
              <div className="grid grid-cols-2 xs:max-md:grid-cols-1 justify-items-center xs:max-md:gap-4 font-semibold gap-[30px]">
                <span className="text-primary font-jost text-[18px] font-semibold ">
                  Sunday
                </span>
                <span>7.30 am - 11.30 pm</span>
              </div>
              <div className="grid grid-cols-2 xs:max-md:grid-cols-1 justify-items-center xs:max-md:gap-4 font-semibold gap-[30px]">
                <span className="text-primary font-jost text-[18px] font-semibold ">
                  Happy Hour
                </span>
                <span>5.30 am - 09.30 pm</span>
              </div>
            </div>
            <div className="absolute aspect-square object-cover right-0 top-0 bottom-0">
              <Image
                src="/eventbooking/lemonade.avif"
                alt="Lemonade photograph"
                fill={true}
                className="absolute right-0 top-0 bottom-0 opacity-20 xs:max-md:hidden"
              />
            </div>
          </div>

          <span className="mb-[50px] text-xl font-jost font-medium ">
            Just Call for Reservation{' '}
            <span className="ml-1 text-primary underline">+01234 567 888</span>
          </span>

          <Button className="self-start text-neutral1 font-semibold xs:max-md:mx-auto">
            book your table
          </Button>
        </div>
        <span className="relative w-full xs:max-md:hidden">
          <Image
            src="/eventbooking/main.avif"
            alt="A big meat photo"
            width={446}
            height={696}
            quality={70}
            className="w-full h-[696px] object-contain"
          />
          <Image
            src="/eventbooking/pepper.avif"
            alt="Small Pepper photo"
            width={150}
            height={125}
            className="absolute top-0 xs:max-xl:hidden"
          />
        </span>
      </div>
    </div>
  );
}
