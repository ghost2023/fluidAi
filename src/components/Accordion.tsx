import React from "react";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";

type Props = {
  label: string;
};

export default function Accordion({ label }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-b text-start  border-white/40 flex justify-between w-full pb-2.5 mb-4"
      >
        <p className="font-medium">{label}</p>
        <img src={isOpen ? minus : plus} className="w-6 h-6" />
      </button>

      <div
        className={`${isOpen ? "max-h-screen mt-4" : "max-h-0"} transition-all overflow-hidden duration-500 ease-in-out`}
      >
        <p className="text-white/60 mb-10">
          Research shows that experiencing curiosity and awe can immensely
          benefit our mental, physical, and professional health. Here’s a brief
          overview of what curiosity and awe can do for you.
        </p>
      </div>
    </div>
  );
}
