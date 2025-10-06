import React from "react";

export default function Card({ children }) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-600 rounded-xl
       p-6 w-60 h-36 sm:w-64 sm:h-40 md:w-72 md:h-44 lg:w-80 lg:h-48 xl:w-96 xl:h-56
       shadow-md hover:shadow-lg transition-shadow gap-3 text-center"
    >
      {children}
    </div>
  );
}
