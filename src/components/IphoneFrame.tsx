import React from "react";
import iphone from "../assets/iphone-frame.png";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};
export default function IphoneFrame({ children }: Props) {
  return (
    <div className="relative w-[335px] scale-[0.85] sm:scale-100 shrink-0">
      <div className="absolute inset-4 overflow-hidden rounded-[32px]">
        {children}
      </div>
      <img src={iphone} className=" " />
    </div>
  );
}
