export default function Navbar() {
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
