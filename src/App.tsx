import { ParallaxProvider } from "react-scroll-parallax";
import glowBg from "./assets/glow-bg.png";
import iphone from "./assets/iphone-in-hand.png";
import Accordion from "./components/Accordion";
import Carousel1 from "./components/Carousel1";
import CountryDropdown from "./components/CountryDropdown";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Iphone1 from "./components/Iphone1";
import Iphone2 from "./components/Iphone2";
import Iphone3 from "./components/Iphone3";
import Iphone4 from "./components/Iphone4";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ParallaxProvider>
      <div className="bg-black min-h-screen  text-white ">
        <Navbar />
        <Hero />
        <div className="mt-60 flex flex-col gap-2 items-center py-24 font-medium">
          <p className="opacity-50">Our Features</p>
          <h3 className="text-4xl sm:text-5xl md:text-[64px] leading-none mx-10 text-center md:max-w-3xl">
            Fluid AI was born out of a desire to simplify and streamline modern
            life
          </h3>
        </div>
        <div className="px-6 sm:px-14 md:px-[72px] ">
          <div className="flex flex-col-reverse text-center  md:text-start md:flex-row justify-between gap-8 pb-12">
            <div className="flex flex-col flex-1 max-w-[334px]">
              <div className="h-4"></div>
              <div className="space-y-[36px] mt-auto ">
                <h4 className="text-[28px] tracking-tight max-w-[320px] leading-none">
                  Fluid AI: Simplify, Organize, and Achieve More
                </h4>
                <p className="opacity-50 font-medium text-[15px] leading-[1.3] max-w-[334px]">
                  In a world where daily tasks, communication, and goals often
                  become overwhelming, Fluid AI offers an innovative solution.
                  Combining advanced AI technology with a user-friendly
                  interface, it brings together to-do lists, chats, saved items,
                  and bucket lists into one seamless platform.
                </p>
              </div>
              <div className="opacity-50 mt-auto font-medium">1/4</div>
            </div>
            <Iphone1 />

            <div className="hidden md:flex  flex-col gap-6 flex-1 max-w-[334px]"></div>
          </div>

          <div className="flex flex-col text-center  md:text-start md:flex-row justify-between gap-8 pb-12">
            <div className="hidden md:flex  flex-col gap-6 flex-1 max-w-[334px]"></div>
            <Iphone2 />

            <div className="flex flex-col flex-1 max-w-[334px]">
              <div className="h-4"></div>
              <div className="space-y-[36px] mt-auto ">
                <h4 className="text-[28px] tracking-tight max-w-[320px] leading-none">
                  Fluid AI: Simplify, Organize, and Achieve More
                </h4>
                <p className="opacity-50 font-medium text-[15px] leading-[1.3] max-w-[334px]">
                  In a world where daily tasks, communication, and goals often
                  become overwhelming, Fluid AI offers an innovative solution.
                  Combining advanced AI technology with a user-friendly
                  interface, it brings together to-do lists, chats, saved items,
                  and bucket lists into one seamless platform.
                </p>
              </div>
              <div className="opacity-50 mt-auto font-medium">2/4</div>
            </div>
          </div>

          <div className="flex flex-col-reverse text-center  md:text-start md:flex-row justify-between gap-8 pb-12">
            <div className="flex flex-col flex-1 max-w-[334px]">
              <div className="h-4"></div>
              <div className="space-y-[36px] mt-auto ">
                <h4 className="text-[28px] tracking-tight max-w-[320px] leading-none">
                  Fluid AI: Simplify, Organize, and Achieve More
                </h4>
                <p className="opacity-50 font-medium text-[15px] leading-[1.3] max-w-[334px]">
                  In a world where daily tasks, communication, and goals often
                  become overwhelming, Fluid AI offers an innovative solution.
                  Combining advanced AI technology with a user-friendly
                  interface, it brings together to-do lists, chats, saved items,
                  and bucket lists into one seamless platform.
                </p>
              </div>
              <div className="opacity-50 mt-auto font-medium">3/4</div>
            </div>
            <Iphone3 />
            <div className="hidden md:flex  flex-col gap-6 flex-1 max-w-[334px]"></div>
          </div>

          <div className="flex flex-col text-center  md:text-start md:flex-row justify-between gap-8 pb-12">
            <div className="hidden md:flex  flex-col gap-6 flex-1 max-w-[334px]"></div>
            <Iphone4 />

            <div className="flex flex-col flex-1 max-w-[334px]">
              <div className="h-4"></div>
              <div className="space-y-[36px] mt-auto ">
                <h4 className="text-[28px] tracking-tight max-w-[320px] leading-none">
                  Fluid AI: Simplify, Organize, and Achieve More
                </h4>
                <p className="opacity-50 font-medium text-[15px] leading-[1.3] max-w-[334px]">
                  In a world where daily tasks, communication, and goals often
                  become overwhelming, Fluid AI offers an innovative solution.
                  Combining advanced AI technology with a user-friendly
                  interface, it brings together to-do lists, chats, saved items,
                  and bucket lists into one seamless platform.
                </p>
              </div>
              <div className="opacity-50 mt-auto font-medium">4/4</div>
            </div>
          </div>
        </div>
        <Carousel1 />

        <div className="mx-14 flex flex-col md:flex-row gap-24 my-40 justify-between">
          <div className="max-w-[420px]">
            <h2 className="text-5xl leading-[1.1] mb-4 mr-8">
              What can curiosity, wonder, and awe do for you?
            </h2>
            <p className="opacity-50 font-medium leading-[1.3] tracking-tight">
              Research shows that experiencing curiosity and awe can immensely
              benefit our mental, physical, and professional health. Here’s a
              brief overview of what curiosity and awe can do for you.
            </p>
          </div>
          <div className="max-w-[43rem]">
            <Accordion label="Does Fluid AI increase wellbeing and meaning in life?" />
            <Accordion label="What can curiosity, wonder, and awe do for you?" />
            <Accordion label="Does Fluid AI increase wellbeing and meaning in life?" />
            <Accordion label="What can curiosity, wonder, and awe do for you?" />
            <Accordion label="Does Fluid AI increase wellbeing and meaning in life?" />
            <Accordion label="What can curiosity, wonder, and awe do for you?" />
            <Accordion label="Does Fluid AI increase wellbeing and meaning in life?" />
            <Accordion label="What can curiosity, wonder, and awe do for you?" />
            <Accordion label="Does Fluid AI increase wellbeing and meaning in life?" />
            <Accordion label="What can curiosity, wonder, and awe do for you?" />
          </div>
        </div>
        <div className="min-h-screen relative py-10 px-6 sm:px-16 md:px-[72px] items-center gap-24 justify-between">
          <img
            src={glowBg}
            className="absolute h-full w-full inset-0 object-cover"
          />
          <div className="max-w-lg relative z-[1]">
            <h3 className="text-3xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight ">
              Join the Fluid AI Waitlist Today!
            </h3>

            <div className="flex flex-col gap-5 max-w-[400px] mt-4">
              <input
                className="border-b border-white/40 placeholder:text-white/40 text-sm bg-transparent py-2 w-full"
                placeholder="Name"
              />

              <input
                className="border-b border-white/40 placeholder:text-white/40 text-sm bg-transparent py-2 w-full"
                placeholder="Email"
              />
              <CountryDropdown />
              <button
                className="bg-white mt-2 text-black rounded-full px-10 text-sm py-3  font-medium self-start"
                style={{ boxShadow: "0 5px 30px rgba(255,255,255, 0.61)" }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
          <img
            src={iphone}
            className="relative md:absolute z-[1] bottom-0 right-1  h-64 md:h-[96%] object-contain"
          />
        </div>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
