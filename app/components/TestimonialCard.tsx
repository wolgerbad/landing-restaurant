import Image from 'next/image';

type PropTypes = {
  testimonial: {
    id: string;
    author: string;
    review: string;
    role: string;
    image: string;
  };
};

export default function TestimonialCard({ testimonial }: PropTypes) {
  return (
    <div className="embla__slide flex-[0_0_50%] min-w-0 px-4">
      <div className="embla__slide__number bg-neutral3 p-10">
        <p className="mb-10 text-xl font-jost">{testimonial.review}</p>
        <div className="flex gap-5">
          <div className="border border-opacity-30 border-secondary/30">
            <div className="p-[5px]">
              <Image
                src={testimonial.image}
                alt="Photograph of the writer"
                width={90}
                height={90}
                className="object-cover h-[90px]"
              />
            </div>
          </div>
          <div className="flex flex-col font-jost justify-center gap-1 flex-1 ">
            <p className="text-primary text-lg">{testimonial.author}</p>
            <p className="text-neutral1 opacity-70 font-jost">
              {testimonial.role}
            </p>
          </div>
          <Image
            src="/testimonial/backtick.svg"
            alt="Small backtick symbol"
            className="py-3"
            width={85}
            height={74}
          />
        </div>
      </div>
    </div>
  );
}
