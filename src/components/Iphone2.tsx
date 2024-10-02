import bg from "../assets/iphone-bg2.png";
import iphoneStatus from "../assets/iphone-status.svg";
import iphoneTabbar from "../assets/iphone-tabbar1.png";
import plus from "../assets/plus.svg";
import sort from "../assets/sort.svg";
import IphoneFrame from "./IphoneFrame";

export default function Iphone2() {
  return (
    <IphoneFrame>
      <img
        src={bg}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative w-full h-full flex flex-col ">
        <img src={iphoneStatus} />
        <div className="px-2 ">
          <div className="flex justify-between items-center py-1">
            <div className="flex gap-2.5">
              <p className="border-b border-white py-1">Calendar</p>
              <p className="text-white/40 border-b border-transparent py-1">
                To do
              </p>
            </div>
            <div className="flex gap-1">
              <div className="size-8 p-1.5 border border-white/20 rounded-full flex justify-center items-center">
                <img src={sort} />
              </div>
              <div className="size-8 p-1.5 border border-white/20 rounded-full flex justify-center items-center">
                <img src={plus} />
              </div>
            </div>
          </div>
          <div className="flex py-5 items-center">
            <div className="text-6xl mr-auto">
              <div>June</div>
              <div>26th</div>
            </div>
            <div className="bg-white/20 my-2 w-px self-stretch"></div>
            <div className="ml-auto text-sm pr-2">
              <div className="mb-3">
                <div className="text-white/60">Time</div>
                <div>11:30 PM</div>
              </div>
              <div className="mb-3">
                <div className="text-white/60">Next To-do</div>
                <div>Appointment</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 py-2 px-2 self-stretch border border-white/15 rounded-[21px] flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <div className="text-center flex-1">
                <p className="text-white/40 mb-1">Sun</p>
                <p>23</p>
              </div>
              <div className="text-center flex-1">
                <p className="text-white/40 mb-1">Mon</p>
                <p>24</p>
              </div>
              <div className="text-center flex-1">
                <p className="text-white/40 mb-1">Tue</p>
                <p>25</p>
              </div>
              <div className="text-center flex-1">
                <p className="text-white/40 mb-1">Wed</p>
                <div className="bg-white/10 p-1 border border-white/15 rounded-[7px] flex flex-col items-center ">
                  <p>26</p>
                  <div className="flex translate-x-[4px]">
                    <div className="shrink-0 size-[3px] rounded-full bg-[#709690]"></div>
                    <div className="shrink-0 size-[3px] rounded-full bg-white -translate-x-[1px]"></div>
                    <div className="shrink-0 size-[3px] rounded-full bg-[#5F85B1] -translate-x-[2px]"></div>
                    <div className="shrink-0 size-[3px] rounded-full bg-[#B75D28] -translate-x-[3px]"></div>
                    <div className="shrink-0 size-[3px] rounded-full bg-[#000000] -translate-x-[4px]"></div>
                    <div className="shrink-0 size-[3px] rounded-full bg-[#2B456F] -translate-x-[5px]"></div>
                  </div>
                </div>
              </div>
              <div className="text-center flex-1">
                <p className="text-white/40 mb-1">Thu</p>
                <p>27</p>
              </div>
              <div className="text-center flex-1">
                <p className="text-white/40 mb-1">Fri</p>
                <p>28</p>
              </div>
              <div className="text-center flex-1">
                <p className="text-white/40 mb-1">Sat</p>
                <p>29</p>
              </div>
            </div>
            <div className="self-center bg-white/20 h-[3px] rounded-full w-7"></div>
          </div>
          <div className="flex justify-between items-center py-6">
            <div>
              <p>Your Events</p>
              <p className="text-sm text-white/60 ">4 events</p>
            </div>
            <div className="flex rounded-full p-0.5 border border-white/20 gap-0.5">
              <div className="rounded-full flex items-center justify-center bg-white/20 backdrop-blur-[14px] shrink-0 grow size-8">
                {/* TODO: Stack */}

                <img src={plus} />
              </div>
              <div className="rounded-full flex items-center justify-center shrink-0 grow size-8">
                {/* TODO: Hamburger */}
                <img src={plus} />
              </div>
            </div>
          </div>

          <div className="bg-white/10 py-2 px-2 self-stretch border border-white/15 rounded-[10px] flex items-center gap-2">
            {/* TODO: Search */}
            <img src={plus} />
            <div className="text-sm text-white/40">Search</div>
          </div>

          <div className="bg-white/10 py-2 px-2.5 self-stretch mt-4 border border-white/15 rounded-[16px] flex flex-col gap-2">
            <div className="flex justify-between items-start ">
              <div className="">
                <div className="text-xs text-white/40">Personal</div>
                <div>Flight to Rome (W61543)</div>
              </div>
              <div className="rounded-full bg-white/10 px-2.5 py-1 text-sm">
                High
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center ">
                {/* TODO: Clock */}
                <img src={plus} className="size-4" />
                <div className="text-xs text-white/60">10:00 - 10:20 AM</div>
              </div>

              {/* TODO: Clock */}
              <img src={plus} className="size-7" />
            </div>
          </div>

          <div className="bg-white/10 py-2 px-2.5 self-stretch mt-1 border border-white/15 rounded-[16px] flex flex-col gap-2">
            <div className="flex justify-between items-start ">
              <div className="">
                <div className="text-xs text-white/40">Personal</div>
                <div className="text-sm">Flight to Rome (W61543)</div>
              </div>
              <div className="rounded-full bg-white/10 px-2.5 py-1 text-sm">
                High
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center ">
                {/* TODO: Clock */}
                <img src={plus} className="size-4" />
                <div className="text-xs text-white/60">10:00 - 10:20 AM</div>
              </div>

              {/* TODO: Clock */}
              <img src={plus} className="size-7" />
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
