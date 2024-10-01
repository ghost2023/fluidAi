import React from "react";
import chevron from "../assets/chevron.svg";
import france from "../assets/france-flag.png";
import poland from "../assets/polang-flag.png";
import uae from "../assets/uae-flag.png";
import uas from "../assets/usa-flag.png";

const availableCountries = [
  { value: "AE", label: "United Arab Emirates", image: uae },
  { value: "US", label: "USA", image: uas },
  { value: "PL", label: "Poland", image: poland },
  { value: "FR", label: "France", image: france },
];

export default function CountryDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(
    availableCountries[0],
  );
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="py-2.5 border-b border-white/40 flex justify-between w-full"
      >
        <div className="flex items-center justify-between">
          <img src={selectedCountry.image} className="w-6 h-6" />
          <span className="ml-2 text-sm">{selectedCountry.label}</span>
        </div>

        <img
          src={chevron}
          className="w-6 h-6 transition-all duration-500"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className={`absolute top-full w-full bg-[#232323] mt-2 shadow-lg rounded-xl overflow-hidden ${isOpen ? "h-36" : "h-0"} transition-all `}
      >
        <div className="p-2 overflow-auto h-full noscroll-bar">
          {availableCountries.map((country, index) => (
            <div
              key={index}
              className={`flex items-center gap-1 p-2 cursor-pointer hover:bg-white/05 `}
              onClick={() => {
                setSelectedCountry(country);
                setIsOpen(false);
              }}
            >
              <img src={country.image} className="w-6 h-6" />
              <span className="ml-2">{country.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
