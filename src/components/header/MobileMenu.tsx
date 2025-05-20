"use client";
import * as React from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hidden max-sm:block">
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ti ti-menu-2 text-2xl text-stone-950"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-20 right-0 bg-white shadow-md rounded-md p-4 z-10">
          <ul className="flex flex-col gap-4">
            <li><a href="#work" className="text-xl text-stone-950">Work</a></li>
            <li><a href="#about" className="text-xl text-stone-950">About</a></li>
            <li><a href="#tools" className="text-xl text-stone-950">Tools</a></li>
            <li><a href="#contact" className="text-xl text-stone-950">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
