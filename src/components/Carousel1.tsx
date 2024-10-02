import family from "../assets/family.png";
import friends from "../assets/friends.png";
import leftArrow from "../assets/left-arrow.svg";

import { useCallback, useState } from "react";
import man from "../assets/man.png";
import rightArrow from "../assets/right-arrow.svg";

const items = [
  {
    title: "Time to work",
    paragraph:
      "Fluid has Internet access, so you can get up-to-date information from it.",
    image: man,
    mask: "polygon(0 0, 60% 0, 60% 5%, 99% 5%, 99% 0, 100% 0, 100% 100%, 0 100%)",
  },
  {
    title: "Time to family",
    paragraph:
      "You can use Fluid as an assistant to save time - and save your sanity.",
    image: family,
    mask: "polygon(0 40%, 100% 50%,  100% 100%, 0 100%)",
  },
  {
    title: "Time to friends",
    paragraph: "Fluid easily integrates with your friends' calendars",
    image: friends,
    mask: "polygon(0 0, 53% 0, 53% 5%, 95% 5%, 95% 0, 100% 0, 100% 100%, 0 100%)",
  },
];

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
      <h2 className="text-3xl md:text-5xl mx-14 mb-8 max-w-[700px] ">
        Fluid AI was born out of a desire to simplify and streamline modern life
      </h2>
      <div className="embla overflow-hidden h-screen">
        <div
          className="embla__container flex w-[300%] h-screen transition-all ease-in-out duration-500 "
          style={{ transform: `translateX(-${(index * 100) / 3}%)` }}
        >
          {items.map((item, i) => (
            <CarouselItem
              goBack={() => {
                scrollPrev();
              }}
              goNext={() => {
                scrollNext();
              }}
              index={i}
              item={item}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type CarouselItemProps = {
  goBack: () => void;
  goNext: () => void;
  index: number;
  item: (typeof items)[number];
};

function CarouselItem({ goBack, goNext, item, index }: CarouselItemProps) {
  return (
    <div className="embla__slide relative flex-1">
      <div className="flex z-[1] absolute px-10 w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-4">
        <button
          className="embla__prev hidden md:flex cursor-pointer bg-white/10 border border-[#6464644D]  text-white rounded-full p-2 w-12 h-12 items-center justify-center shrink-0"
          onClick={goBack}
        >
          <img src={leftArrow} className="w-5 h-5" />
        </button>
        <div className="shrink-0 grow max-w-[500px] ">
          <div className="p-7 grow relative h-[75vh] bg-gradient-to-b from-[#BABABA00] to-[#BABABA66] rounded-[32px] flex flex-col justify-between">
            <div
              style={{
                clipPath: item.mask,
              }}
              className="border border-white/40 absolute inset-0 rounded-[32px]"
            ></div>

            <p className="text-xl leading-tight font-medium max-w-[246px] opacity-90">
              {item.paragraph}
            </p>
            <h4 className="text-5xl">{item.title}</h4>
          </div>
          <div className="flex mt-6 items-center justify-center gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="size-1 rounded-full"
                style={{
                  backgroundColor: i === index + 1 ? "white" : "#BABABA",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div
          className="embla__next hidden md:flex cursor-pointer bg-white/10 border border-[#6464644D]  text-white rounded-full p-2 w-12 h-12 items-center justify-center shrink-0"
          onClick={goNext}
        >
          <img src={rightArrow} className="w-5 h-5" />
        </div>
      </div>
      <div className="bg-black/05 absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="bg-gradient-to-b from-transparent to-black/70 h-[50%] absolute left-0 right-0 bottom-0"></div>

      <img src={item.image} className="w-screen h-full object-cover" />
    </div>
  );
}
