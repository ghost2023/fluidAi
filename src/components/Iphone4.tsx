import bg from "../assets/iphone-bg1.png";
import iphoneStatus from "../assets/iphone-status.svg";
import iphoneTabbar from "../assets/iphone-tabbar3.png";
import options from "../assets/options.svg";
import plus from "../assets/plus.svg";
import recommended1 from "../assets/recommended1.png";
import recommended2 from "../assets/recommended2.png";
import recommended3 from "../assets/recommended3.png";
import sort from "../assets/sort.svg";
import IphoneFrame from "./IphoneFrame";

export default function Iphone4() {
  const recommended = [
    {
      catagory: "Restaurants",
      title: "CE LA VI",
      image: recommended1,
      stars: "5.0",
      location: "Asian",
    },
    {
      catagory: "Night Club",
      title: "BLU Dubai",
      image: recommended2,
      stars: "4.9",
      location: "260 Sheikh Zayed Rd",
    },
    {
      catagory: "Restaurants",
      title: "CE LA VI",
      image: recommended3,
      stars: "4.8",
      location: "Asian",
    },
  ];

  const recents = [
    {
      title: "Zuma",
      stars: "4.1",
      catagory: "Restaurants",
      image: recommended1,
      location: "123 Marina Bay, Dubai",
    },
  ];
  return (
    <IphoneFrame>
      <img
        src={bg}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative w-full h-full flex flex-col ">
        <img src={iphoneStatus} />
        <div className="px-2 ">
          <div className="flex justify-between items-center pt-1.5 mb-3">
            <div className="flex gap-2.5">
              <p className="text-xl py-1">Explore</p>
            </div>
            <div className="flex gap-1">
              <div className="size-8 p-1.5 border border-white/20 rounded-full flex justify-center items-center">
                <img src={sort} />
              </div>
            </div>
          </div>

          <div className="bg-white/10 py-2 px-2 self-stretch border border-white/15 rounded-[10px] flex items-center gap-2">
            {/* TODO: Search */}
            <img src={plus} />
            <div className="text-sm text-white/40">Search</div>
          </div>
        </div>
        <div className="flex border-b text-white/50 text-sm border-white/20 w-full gap-3 mt-4 px-2.5">
          <div className="">
            <p className="text-white font-medium">All</p>
            <div className="h-px -translate-x-0.5 rounded-full bg-white w-5 mt-1.5"></div>
          </div>
          <div className="flex items-center pb-2 gap-1">
            <p className="font-medium ">Restaurants</p>
          </div>
          <div className="flex shrink-0 items-center pb-2 gap-1">
            <p className="font-medium ">Night clubs</p>
          </div>
          <div className="flex items-center pb-2 gap-1">
            <p className="font-medium ">Hotels</p>
          </div>
          <div className="flex items-center pb-2 gap-1">
            <p className="font-medium ">Concerts</p>
          </div>
        </div>

        <div className="px-2 ">
          <div className="my-4 ">
            <div>Recommended</div>
            <div className="mt-2 overflow-hidden  flex gap-1 ">
              {recommended.map((item, i) => (
                <div
                  key={i}
                  className="relative shrink-0 rounded-[12px] border border-white/10"
                >
                  <img src={item.image} className="w-32 object-cover flex" />
                  <div className="absolute inset-0 flex px-2 py-1.5 flex-col  justify-between ">
                    <div className="flex justify-between items-center ">
                      <div className="px-2 py-1 bg-white/10 rounded-full text-xs">
                        {item.catagory}
                      </div>
                      <img src={options} />
                    </div>
                    <div>
                      <div className="text-sm">{item.title}</div>
                      <div className="flex gap-1 items-center text-[10px] text-white/60">
                        <span>{item.stars}</span> <span className="">•</span>
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>Recently Viewed</div>
            <div className="flex flex-col gap-2 mt-1">
              {recommended.map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <img
                    src={item.image}
                    className="size-20 rounded-xl object-cover flex"
                  />
                  <div>
                    <div className="text-xs mb-1">{item.title}</div>
                    <div className="flex gap-1 items-center text-[10px] text-white/60">
                      <span>{item.stars}</span> <span className="">•</span>
                      <span>{item.catagory}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <img src="" />
                      <span className="truncate items-center text-[10px] text-white/60">
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-black to-[50%] "></div>
        <img src={iphoneTabbar} className="absolute -bottom-4 " />
        <div className="absolute bottom-0 left-1/2 w-1/3 -translate-x-1/2 bg-white h-1 rounded-3xl"></div>
      </div>
    </IphoneFrame>
  );
}
