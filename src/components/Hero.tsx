import clock from "../assets/clock.png";
import options from "../assets/options.svg";
import scroll from "../assets/scroll.svg";
import ticket from "../assets/ticket.png";

import { useEffect, useRef, useState } from "react";
import {
  Parallax,
  ParallaxProvider,
  useParallaxController,
} from "react-scroll-parallax";
import glowCloud from "../assets/glow-cloud.svg";
import heroImg1 from "../assets/hero-image1.png";
import heroImg2 from "../assets/hero-img2.png";
import Logo from "./Logo";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [logoProgress, setLogoProgress] = useState(0);
  const [cloudProgres, setCloudProgres] = useState(0);
  const [itemsProgress, setItemsProgress] = useState(0);
  const parallaxController = useParallaxController();

  useEffect(() => {
    if (parallaxController) parallaxController.update();
  }, [location.pathname]);

  useEffect(() => {
    if (!containerRef.current) return;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "container1") {
            setIsVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.95 },
    );

    intersectionObserver.observe(containerRef.current);
    return () => {
      if (!containerRef.current) return;
      intersectionObserver.unobserve(containerRef.current);
    };
  }, [containerRef.current]);

  return (
    <div className="h-[320vh] relative w-full overflow-hidden">
      <div id="container1" ref={containerRef} className="relative h-screen ">
        <div
          className={`absolute flex flex-col items-center bottom-[7%] left-1/2 -translate-x-1/2 gap-2 ${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-300`}
        >
          <img src={scroll} className="" alt="scroll" />
          <p>Scroll down</p>
        </div>
      </div>

      <div className="h-[200vh] overflow-y-visible w-full ">
        <div className="h-screen relative w-full bottom-0 top-0">
          <Parallax
            startScroll={window.innerHeight}
            endScroll={window.innerHeight * 1.55}
            onProgressChange={setItemsProgress}
            speed={10}
            easing={"easeInOutCubic"}
          >
            <div className="absolute w-full"></div>
          </Parallax>
          <Parallax
            startScroll={0}
            endScroll={window.innerHeight}
            onProgressChange={setLogoProgress}
            style={{ transform: `translateX(-50%)` }}
            translateY={["0%", "-36%"]}
            disabled={cloudProgres > 0}
            rootMargin={{
              bottom: 0,
              top: window.innerHeight * 0.3,
              left: 0,
              right: 0,
            }}
            className={`${cloudProgres != 1 ? "fixed top-0 " : "absolute opacity-0 top-20"} h-screen z-[1] flex items-center`}
          >
            <div
              style={{
                transform: `translateY(-${window.innerHeight * cloudProgres * 1.5}px)`,
              }}
              className={`w-screen  relative pb-1 z-[1] flex flex-col items-center justify-center`}
            >
              <Logo size={112 - logoProgress * 80} />
            </div>
          </Parallax>
          <Parallax
            className="top-0"
            style={{
              position:
                cloudProgres < 1 && logoProgress > 0.9 ? "fixed" : "relative",
            }}
            translateY={["0px", `-${window.innerHeight * 1.5}px`]}
            targetElement={targetRef.current ?? undefined}
            onProgressChange={setCloudProgres}
          >
            <div className="h-screen absolute inset-0 w-screen">
              <div className="flex flex-col items-center mt-36 justify-center relative z-[1] gap-6">
                <p className="text-[80px] max-w-2xl leading-[1.1] text-center">
                  Unlock Seamless Efficiency
                </p>
                <button
                  className="bg-white mt-2 text-black rounded-full px-10 py-3  font-medium "
                  style={{ boxShadow: "0 5px 30px rgba(255,255,255, 0.61)" }}
                >
                  Join Waitlist
                </button>
              </div>
              <div className="absolute overflow-x-hidden w-[120vw] -top-28 left-[50vw] -translate-y-0 -translate-x-1/2 ">
                <img src={glowCloud} className="h-full w-full object-cover" />
              </div>
              <div
                className="absolute left-0 top-0"
                style={{
                  transform: `translateX(${-100 + itemsProgress * 100}%)`,
                }}
              >
                <div className="flex items-end">
                  <div className="rounded-[20px] bg-[#262626]/30 -left-28 w-fit px-6 py-3 text-xl relative border border-white/10">
                    <div className="text-white/60 mb-1">Next To-Do</div>
                    <div>Renew Car insurance</div>
                  </div>
                  <div className="relative w-fit shrink-0 rounded-[12px] -left-14 -top-12 border border-white/10">
                    <img src={heroImg1} className="w-44 object-cover flex" />
                    <div className="absolute inset-0 flex px-2 py-1.5 flex-col  justify-between ">
                      <div className="flex justify-between items-center ">
                        <div className="px-2 py-1 bg-white/10 rounded-full text-xs">
                          Restaurants
                        </div>
                        <img src={options} />
                      </div>
                      <div>
                        <div className="text-sm">Clap Dubai</div>
                        <div className="flex gap-1 items-center text-[10px] text-white/60">
                          <span>4.4</span> <span className="">•</span>
                          <span>$$$$</span>
                          <span className="">•</span>
                          <span className="truncate">Japanese</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative translate-y-[40%] left-[-10%] flex items-end gap-4 ">
                  <div className="rounded-[20px] flex flex-col  min-w-56 bg-[#262626]/30 px-6 py-3 relative border border-white/10">
                    <div className="self-end flex mb-2">
                      <img
                        className="shrink-0 size-9 overflow-hidden rounded-full  translate-x-6"
                        src="https://xsgames.co/randomusers/assets/avatars/male/41.jpg"
                      />
                      <img
                        className="shrink-0 size-9 overflow-hidden rounded-full translate-x-3 relative z-[1]"
                        src="https://xsgames.co/randomusers/assets/avatars/female/41.jpg"
                      />
                      <img
                        className="shrink-0 size-9 overflow-hidden rounded-full relative z-[2]"
                        src="https://xsgames.co/randomusers/assets/avatars/female/31.jpg"
                      />
                    </div>
                    <div className="text-white/60 ">Upcoming Events</div>
                    <div className="text-xl ">Kite Beach</div>
                    <div className="text-white/60 mt-2">10:00 - 14:00</div>
                  </div>
                  <div className="rounded-full bg-[#262626]/30 px-5 py-2 text-lg relative border border-white/10">
                    <div>Cafe nearby</div>
                  </div>
                </div>
                <img src={ticket} className="top-32 relative left-32" />
              </div>

              <div
                className="absolute right-0 top-0"
                style={{
                  transform: `translateX(${170 - itemsProgress * 170}%)`,
                }}
              >
                <div className="rounded-[20px] bg-[#262626]/30 -left-28 w-fit translate-y-[40%] px-6 py-3 text-xl relative border border-white/10">
                  <div className="text-white/60 mb-1">Next To-Do</div>
                  <div>Renew Car insurance</div>
                </div>
                <div className="rounded-[20px] flex flex-col top-10 -left-4  min-w-56 bg-[#262626]/30 px-6 py-3 relative border border-white/10">
                  <div className="self-end flex mb-2">
                    <img
                      className="shrink-0 size-9 overflow-hidden rounded-full  translate-x-6"
                      src="https://xsgames.co/randomusers/assets/avatars/male/41.jpg"
                    />
                    <img
                      className="shrink-0 size-9 overflow-hidden rounded-full translate-x-3 relative z-[1]"
                      src="https://xsgames.co/randomusers/assets/avatars/female/41.jpg"
                    />
                    <img
                      className="shrink-0 size-9 overflow-hidden rounded-full relative z-[2]"
                      src="https://xsgames.co/randomusers/assets/avatars/female/31.jpg"
                    />
                  </div>
                  <div className="text-white/60 ">Upcoming Events</div>
                  <div className="text-xl ">Kite Beach</div>
                  <div className="text-white/60 mt-2">10:00 - 14:00</div>
                </div>

                <div className="rounded-full w-fit top-20 left-20 bg-[#262626]/30 px-5 py-2 text-lg relative border border-white/10">
                  <div>Book a flight</div>
                </div>
                <div className="rounded-full w-fit top-24 left-16 bg-[#262626]/30 px-5 py-2 text-lg relative border border-white/10">
                  <div>Trip ideas</div>
                </div>

                <div className="relative w-fit shrink-0 rounded-[24px] -left-44  overflow-hidden top-20 border border-white/10">
                  <img src={heroImg2} className="w-60 object-cover flex" />
                  <div className="absolute  bg-gradient-to-b  from-[#251F1F30] from-20% to-[#251F1F] to-90%   inset-0 flex px-3 py-2 flex-col  justify-end ">
                    <div className="">
                      <div className="text-white/60">Reservations</div>
                      <div className="text-xl">Restaurant Le Bous</div>
                      <div className="flex gap-1 items-center text-lg text-white/60">
                        <img src={clock} />
                        <span className="truncate">4 Oct 20:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="absolute bottom-0" ref={targetRef}></div>
      </div>
    </div>
  );
}
