import attach from "../assets/attach.svg";
import blob from "../assets/blob.png";
import bg from "../assets/iphone-bg1.png";
import iphoneNavbar from "../assets/iphone-navbar.svg";
import iphoneStatus from "../assets/iphone-status.svg";
import keyboard from "../assets/keyboard.svg";
import mic from "../assets/mic.svg";
import IphoneFrame from "./IphoneFrame";

export default function Iphone1() {
  return (
    <IphoneFrame>
      <img
        src={bg}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <img src={iphoneStatus} className="absolute top-0" />
        <div className="absolute w-full  top-0">
          <img src={iphoneNavbar} className="" />
          <p className="text-center absolute bottom-1 left-1/2 font-medium text-xs  -translate-x-1/2">
            Speaking to Fluid A
          </p>
        </div>
        <p className=" text-center text-2xl font-medium px-6">
          Hi! Can you find me top rated restaurants with a{" "}
          <span className="text-white/40">nice view</span>
        </p>
        <img
          src={blob}
          className="absolute bottom-0 translate-y-1/3 left-0 w-[200%] object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full ">
          <p className="text-xs text-center w-full text-white/40 mb-3">
            Go ahead, I’m listening
          </p>
          <div className="flex items-center justify-between px-4 py-4">
            <div className="rounded-full bg-black/60 border border-white/20 flex items-center justify-center w-10 h-10">
              <img className="size-4" src={attach} />
            </div>

            <div className="rounded-full size-24 p-3 backdrop-blur-[14px] border border-white/20 bg-white/05">
              <div className="rounded-full size-full p-3 backdrop-blur-[28px] border border-white/20 bg-white/05">
                <div className="rounded-full size-full p-1.5 backdrop-blur-[42px] border border-white/20 bg-white/05">
                  <img className="size-full" src={mic} />
                </div>
              </div>
            </div>
            <div className="rounded-full bg-black/60 border border-white/20 flex items-center justify-center w-10 h-10">
              <img className="size-4" src={keyboard} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 w-1/3 -translate-x-1/2 bg-white h-[3px] rounded-t-3xl"></div>
      </div>
    </IphoneFrame>
  );
}
