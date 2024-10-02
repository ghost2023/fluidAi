import React from "react";
import menu from "../assets/menu.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  if (window.innerWidth < 768) {
    return (
      <nav className="flex sticky top-0 z-[3] justify-between pl-5 pr-12 text-sm pt-6 pb-3 ">
        <button
          className="flex items-center gap-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={menu} alt="menu" />
        </button>
        <div
          className={`absolute top-full w-48 bg-[#232323] shadow-lg rounded-xl overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"} transition-all `}
        >
          <div className="flex flex-col ">
            <div className="font-medium px-4 py-2">Our Features</div>
            <div className="font-medium px-4 py-2">Areas</div>
            <div className="font-medium px-4 py-2">FAQs</div>
            <div className="font-medium px-4 py-2">The Waitlist</div>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="flex absolute top-0 justify-center left-0 right-0 ">
      <div className="max-w-screen-xl w-full flex justify-between pl-5 pr-12  text-sm py-10 ">
        <div className="flex gap-16">
          <div className="font-medium">Our Features</div>
          <div className="font-medium">Areas</div>
        </div>
        <div className="flex gap-16">
          <div className="font-medium">FAQs</div>
          <div className="font-medium">The Waitlist</div>
        </div>
      </div>
    </nav>
  );
}
