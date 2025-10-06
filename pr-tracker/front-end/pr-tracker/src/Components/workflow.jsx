import React from "react";
import { featureCards } from "./index.jsx";
import Card from "./card.jsx";

export default function Workflow() {
  return (
    <div className="w-full bg-[#1A1A1A] 2xl:py-20 py-10 mt-32 ">
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          How PR Tracker Enhances Your Workflow
        </h1>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4">
          {featureCards.map((item, index) => (
            <Card key={index}>
              <span>{item.icon}</span>
              <span className="font-bold text-lg sm:text-xl md:text-2xl">
                {item.title}
              </span>
              <p className="text-sm sm:text-base">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
