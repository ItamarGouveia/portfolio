import React from "react";

type SkillCircleProps = {
  percentage: number;
  label: string;
};

export default function SkillCircle({ percentage, label }: SkillCircleProps) {
  const radius = 45;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-white m-4">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#fff"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#098891"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-1000"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-lg font-bold fill-white"
        >
          {percentage}%
        </text>
      </svg>
      <span className="mt-2 font-semibold uppercase text-sm text-center">
        {label}
      </span>
    </div>
  );
}
