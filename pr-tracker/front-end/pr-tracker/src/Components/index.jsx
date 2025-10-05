import { ReactElement } from "react";

export const featureCards = [
  {
    title: "Track PRs Seamlessly",
    description:
      "Monitor the status of your GitHub Pull Requests across repositories with an intuitive, real-time overview.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#66A3FF]"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    ),
  },
  {
    title: "Filter with Precision",
    description:
      "Easily narrow down your search using advanced filters, including specific GitHub usernames, to find exactly what you need.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#66A3FF]"
      >
        <polygon points="3 4 21 4 14 14 14 20 10 22 10 14 3 4" />
      </svg>
    ),
  },
  {
    title: "Save Data Instantly",
    description:
      "Preserve crucial API data directly from GitHub. Export and analyze historical PR statuses effortlessly for better insights.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-[#66A3FF]"
      >
        <path d="M4 4h16l0 16H4z" />
        <rect x="8" y="4" width="8" height="6" />
        <rect x="8" y="16" width="8" height="4" />
      </svg>
    ),
  },
];
