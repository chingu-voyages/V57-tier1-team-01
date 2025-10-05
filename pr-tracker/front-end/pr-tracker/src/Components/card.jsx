import React from "react";

export default function Card({ children }) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-600 rounded-xl
       p-6 w-90 h-48 shadow-md hover:shadow-lg transition-shadow gap-3 text-center "
    >
      {children}
    </div>
  );
}
