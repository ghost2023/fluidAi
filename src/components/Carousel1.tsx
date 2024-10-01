import family from "../assets/family.png";
import friends from "../assets/friends.png";
import leftArrow from "../assets/left-arrow.svg";

import { useCallback, useState } from "react";
import man from "../assets/man.png";
import rightArrow from "../assets/right-arrow.svg";

export default function Carousel1() {
  const [index, setIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    setIndex((p) => (p > 0 ? p - 1 : 2));
  }, []);

  const scrollNext = useCallback(() => {
    setIndex((p) => (p < 3 ? p + 1 : 0));
  }, []);

  return (
    <div className="my-16 ">
      <h2 className="text-5xl mx-14 mb-8 max-w-[700px] ">
        Fluid AI was born out of a desire to simplify and streamline modern life
      </h2>
      <div className="embla overflow-hidden">
        <div
          className="embla__container flex w-[300%] transition-all ease-in-out duration-500 "
          style={{ transform: `translateX(-${(index * 100) / 3}%)` }}
        >
          <CarouselItem1
            goBack={() => {
              scrollPrev();
            }}
            goNext={() => {
              scrollNext();
            }}
          />
          <CarouselItem2
            goBack={() => {
              scrollPrev();
            }}
            goNext={() => {
              scrollNext();
            }}
          />
          <CarouselItem3
            goBack={() => {
              scrollPrev();
            }}
            goNext={() => {
              scrollNext();
            }}
          />
        </div>
      </div>
    </div>
  );
}

type CarouselItemProps = {
  goBack: () => void;
  goNext: () => void;
};

function CarouselItem1({ goBack, goNext }: CarouselItemProps) {
  return (
    <div className="embla__slide relative flex-1">
      <div className="flex z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-4">
        <button
          className="embla__prev cursor-pointer bg-white/10 border border-[#6464644D]  text-white rounded-full p-2 w-12 h-12 flex items-center justify-center shrink-0"
          onClick={goBack}
        >
          <img src={leftArrow} className="w-5 h-5" />
        </button>
        <div className="p-7 border border-white/40 w-screen max-w-[500px] h-[75vh]  bg-gradient-to-b from-[#BABABA00] to-[#BABABA66] rounded-[32px] flex flex-col justify-between">
          <p className="text-xl leading-tight font-medium max-w-[246px] opacity-90">
            Fluid has Internet access, so you can get up-to-date information
            from it.
          </p>
          <h4 className="text-5xl">Time to work</h4>
        </div>

        <div
          className="embla__next cursor-pointer bg-white/10 border border-[#6464644D]  text-white rounded-full p-2 w-12 h-12 flex items-center justify-center shrink-0"
          onClick={goNext}
        >
          <img src={rightArrow} className="w-5 h-5" />
        </div>
      </div>
      <div className="bg-black/05 absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="bg-gradient-to-b from-transparent to-black/70 h-[50%] absolute left-0 right-0 bottom-0"></div>

      <img src={man} className="w-screen h-full object-contain" />
    </div>
  );
}

function CarouselItem2({ goBack, goNext }: CarouselItemProps) {
  return (
    <div className="embla__slide relative flex-1">
      <div className="flex z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-4">
        <button
          className="embla__prev cursor-pointer bg-white/10 border border-[#6464644D]  text-white rounded-full p-2 w-12 h-12 flex items-center justify-center shrink-0"
          onClick={goBack}
        >
          <img src={leftArrow} className="w-5 h-5" />
        </button>
        <div className="p-7 border border-white/40 w-screen max-w-[500px] h-[75vh]  bg-gradient-to-b from-[#BABABA00] to-[#BABABA66] rounded-[32px] flex flex-col justify-between">
          <p className="text-xl leading-tight font-medium max-w-[246px] opacity-90">
            You can use Fluid as an assistant to save time - and save your
            sanity.
          </p>
          <h4 className="text-5xl">Time to family</h4>
        </div>

        <div
          className="embla__next cursor-pointer bg-white/10 border border-[#6464644D]  text-white rounded-full p-2 w-12 h-12 flex items-center justify-center shrink-0"
          onClick={goNext}
        >
          <img src={rightArrow} className="w-5 h-5" />
        </div>
      </div>
      <div className="bg-black/05 absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="bg-gradient-to-b from-transparent to-black/70 h-[50%] absolute left-0 right-0 bottom-0"></div>

      <img src={family} className="w-screen h-full object-contain" />
    </div>
  );
}

function CarouselItem3({ goBack, goNext }: CarouselItemProps) {
  return (
    <div className="embla__slide relative flex-1">
      <div className="flex z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-4">
        <button
          className="embla__prev cursor-pointer bg-white/10 border border-[#6464644D]  text-white rounded-full p-2 w-12 h-12 flex items-center justify-center shrink-0"
          onClick={goBack}
        >
          <img src={leftArrow} className="w-5 h-5" />
        </button>
        <div className="p-7 border border-white/40 w-screen max-w-[500px] h-[75vh]  bg-gradient-to-b from-[#BABABA00] to-[#BABABA66] rounded-[32px] flex flex-col justify-between">
          <p className="text-xl leading-tight font-medium max-w-[246px] opacity-90">
            Fluid easily integrates with your friends' calendars
          </p>
          <h4 className="text-5xl">Time to friends</h4>
        </div>

        <div
          className="embla__next cursor-pointer bg-white/10 border border-[#6464644D]  text-white rounded-full p-2 w-12 h-12 flex items-center justify-center shrink-0"
          onClick={goNext}
        >
          <img src={rightArrow} className="w-5 h-5" />
        </div>
      </div>
      <div className="bg-black/05 absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="bg-gradient-to-b from-transparent to-black/70 h-[50%] absolute left-0 right-0 bottom-0"></div>

      <img src={friends} className="w-screen h-full object-contain" />
    </div>
  );
}
