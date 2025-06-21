"use client";

import React from "react";

type TimelineItem = {
  year: string;
  location: string;
  title: string;
  description: string;
  side: "left" | "right";
  color: "pink" | "yellow" | "orange";
  number: string;
};

const timelineData: TimelineItem[] = [
  {
    year: "2022",
    location: "United States",
    title: "Diploma In UI/UX Design",
    description:
      "Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium, totam rem aperiam.",
    side: "right",
    color: "pink",
    number: "01",
  },
  {
    year: "2022",
    location: "New York",
    title: "Diploma In Web Design",
    description:
      "Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium, totam rem aperiam.",
    side: "left",
    color: "yellow",
    number: "02",
  },
  {
    year: "2017",
    location: "United States",
    title: "Diploma In UI/UX Design",
    description:
      "Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium, totam rem aperiam.",
    side: "right",
    color: "orange",
    number: "03",
  },
];

export default function Timeline() {
  return (
    <div className="relative max-w-6xl mx-auto py-20 px-4">
      {/* Linha vertical central */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-white transform -translate-x-1/2 z-0" />

      {timelineData.map((item, index) => {
        const isLeft = item.side === "left";

        const colorMap = {
          pink: "pink-500",
          yellow: "yellow-400",
          orange: "orange-400",
        };

        const borderColor = `border-${colorMap[item.color]}`;
        const textColor = `text-${colorMap[item.color]}`;
        const bgColor = `bg-${colorMap[item.color]}`;
        const lineColor = `bg-${colorMap[item.color]}`;

        return (
          <div
            key={index}
            className={`relative mb-24 flex flex-col md:flex-row items-center ${
              isLeft ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Card */}
            <div className="w-full md:w-1/2 z-10">
              <div className="bg-white rounded shadow-lg p-6 m-6">
                <div className="flex items-center mb-2">
                  <span
                    className={`text-white text-sm px-3 py-1 rounded-l-full ${bgColor}`}
                  >
                    {item.location}
                  </span>
                  <span className="bg-white text-gray-800 text-sm px-3 py-1 rounded-r-full shadow-md">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>

            {/* Círculo + traço */}
            <div className="relative md:mx-8">
              {/* Círculo */}
              <div
                className={`w-24 h-24 rounded-full border-4 ${borderColor} ${textColor} font-bold flex items-center justify-center text-lg bg-white z-10 relative`}
              >
                {item.year}
              </div>

              {/* Traço horizontal do círculo até a linha */}
              <div
                className={`absolute top-1/2 w-8 h-1 ${lineColor} -translate-y-1/2 ${
                  isLeft ? "left-full" : "right-full"
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
