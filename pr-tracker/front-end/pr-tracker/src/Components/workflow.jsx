import React from "react";
import { featureCards } from "./index.jsx";
import Card from "./card.jsx";

export default function Workflow() {
  return (
    <div className="w-full h-120 bg-[#1A1A1A] ">
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="mt-20 text-4xl font-bold">
          How PR Tracker Enhances Your Workflow
        </h1>
        <div className="flex mt-15 items-center justify-center gap-x-10 ">
          {featureCards.map((item, index) => (
            <Card key={index}>
              <span>{item.icon}</span>
              <span className="font-bold text-2xl">{item.title}</span>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
