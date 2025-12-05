'use client';

import TestimonialCard from './TestimonialCard';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButton';
const slides = [
  {
    id: '1',
    author: 'Ronald Richards',
    role: 'CEO, Onelay Group',
    image: '/testimonial/ronald.avif',
    review:
      '“Sofra Restaurant never disappoints. From the attentive service to the fresh ingredients, every dish tells a story. The grilled salmon is a must-try!” The food is hearty yet & always make you feel.',
  },
  {
    id: '2',
    author: 'Ralph Edwards',
    role: 'CTO, Morlex Group',
    image: '/testimonial/ralph.avif',
    review:
      '“Dining at Sofra is always a treat. The flavors are authentic, the presentation is beautiful, and the atmosphere feels like home. Truly one of the best culinary experiences in town.”',
  },
  {
    id: '3',
    author: 'John, Doe',
    role: 'Marketing, Manager',
    image: '/testimonial/john.avif',
    review:
      '“Dining at Olive Grove is always delightful. The meals are fresh and flavorful, beautifully presented, and served in a cozy atmosphere that makes every visit feel truly special and memorable.”',
  },
];
const options: EmblaOptionsType = {
  slidesToScroll: 1,
  align: 'start',
  loop: true,
};
export default function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="bg-neutral1 xs:max-xl:px-5">
      <div className="max-w-[1140px] mx-auto py-28 overflow-hidden">
        <p className="mb-6 text-center text-[18px] font-jost text-primary">
          Testimonial
        </p>
        <h2 className="mb-16 text-center text-6xl font-gilda text-neutral4">
          What Our Guests <br /> Are Saying
        </h2>

        <div className="embla">
          <div className="embla__viewport overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex text-neutral1 -mx-4">
              {slides.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="embla__controls mt-16">
          <div className="embla_buttons flex justify-center gap-5 ">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
              <GrFormPrevious />
            </PrevButton>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
              <GrFormNext />
            </NextButton>
          </div>
        </div>
      </div>
    </div>
  );
}
