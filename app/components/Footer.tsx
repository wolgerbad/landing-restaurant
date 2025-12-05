import Image from 'next/image';

export default function Footer() {
  return (
    <div className="relative overflow-hidden xs:max-xl:px-5">
      <div className="max-w-[1140px] mx-auto relative z-10 pt-28 xs:max-md:pt-12 md:max-xl:pt-20 pb-12 text-neutral1">
        <div className="flex justify-between mb-16 xs:max-xl:flex-col xs:max-xl:items-center">
          <div className="xs:max-xl:mb-8">
            <h4 className="text-2xl font-gilda">
              Plan Ahead – Book a Table <br /> at Sofra Restaurant
            </h4>
          </div>
          <div className="flex xs:max-md:flex-col gap-8">
            <div className="flex items-center gap-5">
              <div>
                <h4 className="text-2xl font-gilda text-neutral1">Location</h4>
                <p className="text-neutral2 font-jost">
                  555 12th Ave, New York,
                </p>
              </div>
              <div className="p-2.5 border border-primary/30 rounded-xl bg-neutral4 xs:max-md:hidden">
                <Image
                  src="/footer/location.svg"
                  alt="Phone icons"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <h4 className="text-2xl font-gilda text-neutral1">Phone No</h4>
                <p className="text-neutral2 font-jost">+888 999 5555 4444</p>
              </div>
              <div className="p-2.5 border border-primary/30 rounded-xl bg-neutral4 xs:max-md:hidden">
                <Image
                  src="/footer/phone.svg"
                  alt="Phone icons"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-square h-64 xs:max-md:h-20 md:max-xl:h-44 w-full mb-16">
          <Image
            src="/footer/logo.avif"
            alt="App logo"
            fill
            className="w-[93%] "
          />
        </div>
        <div className="flex justify-between gap-12 opacity-70 text-lg font-jost">
          <p>2025 Design Sofra. All right reserved.</p>
          <p>Powered by Framer</p>
        </div>
      </div>
      {/* Background Image */}
      <Image
        src="/footer/background.avif"
        alt=""
        fill
        className="object-cover"
      />
    </div>
  );
}
