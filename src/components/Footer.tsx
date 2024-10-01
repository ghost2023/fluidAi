import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex gap-36 justify-between px-[36px] py-16 mt-1 h-[64vh]">
      <div className="grow ">
        <Logo size={40} />
        <p className="text-sm text-white/50 font-medium mt-7 pl-1">
          2024 Fluid AI
        </p>
      </div>
      <div className="">
        <p className="text-sm text-white/50 font-medium mb-3">Our Features</p>
        <p className="text-sm text-white/50 font-medium mb-3">Areas</p>
        <p className="text-sm text-white/50 font-medium mb-3">FAQs</p>
        <p className="text-sm text-white/50 font-medium mb-3">The Waitlist</p>
        <p className="text-sm text-white/50 font-medium mb-3">Contact us</p>
      </div>
      <div className="pr-2">
        <p className="text-sm text-white/50 font-medium mb-3">
          Terms of Service
        </p>
        <p className="text-sm text-white/50 font-medium mb-3">Privacy Policy</p>
      </div>
    </div>
  );
}
