import React from "react";
import logo from "../assets/Logos/prtracker-logo-dark.png";

export default function Header() {
  return (
    <div
      className="w-full h-32 md:h-24 sm:h-20 header-font bg-pureBlack flex 
    items-center justify-between xl:pr-24 md:pr-20 sm:pr-12 pt-3 xl:pl-8 
    md:pl-6 sm:pl-4  relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]
             after:bg-blue-400 after:shadow-[0_0_5px_2px_rgba(156,163,175,0.8)]"
    >
      <div className="max-w-[240px]">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <div
        className="flex text-gray lg:gap-6 md:gap-4 sm:gap-3 lg:text-xl font-bold 
      lg:ml-[-80px] sm:ml-[0]"
      >
        <a href="#" className=" hover:text-blue-900">
          Home
        </a>
        <a href="#" className=" hover:text-blue-900">
          Open PR
        </a>
        <a href="#" className=" hover:text-blue-900">
          Close PR
        </a>
      </div>
      <div>
        <p className="text-gray">calender</p>
      </div>
    </div>
  );
}
