import React from "react";

export default function Hero() {
  return (
    <div className="w-full  bg-pureBlack flex flex-col  ">
      <div className="flex flex-col items-center justify-center pt-24 md:pt-32 lg:pt-40 px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl  text-white max-w-[36ch] text-center  font-bold">
          Stremline Your Github Pull Request Tracking
        </h1>
      </div>
      <div className="flex flex-col gap-y-2  mt-8 items-center px-2">
        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-[68ch] ">
          PR Tracker helps teams monitor the status of their GitHub Pull
          Requests with a clean, intuitive, and GitHub-inspired interface.
          Filter, view, and save PR data effortlessly.
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-6 mt-6">
        <button
          className="text-blue-300 bg-black border-blue-300 border-2 px-10 py-3 mt-6
         text-base rounded-xl hover:text-white hover:bg-blue-400 font-bold"
        >
          Explore Open PR
        </button>
        <button
          className="text-blue-300 bg-black border-blue-300 border-2 px-10 py-3 mt-6
         text-base rounded-xl  hover:text-white hover:bg-blue-400 font-bold"
        >
          View Close PR
        </button>
      </div>
    </div>
  );
}
