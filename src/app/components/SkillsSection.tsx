"use client";

import React from "react";
import SkillCircle from "./SkillCircle";

const skills = [
  { percentage: 60, label: "Javascript" },
  { percentage: 70, label: "Html" },
  { percentage: 30, label: "Golang" },
  { percentage: 90, label: "CSS" },
  { percentage: 80, label: "React JS" },
  { percentage: 70, label: "Node JS" },
];

export default function SkillsSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full mb-10">
      <h2 className="text-4xl text-white font-bold mb-10 font-ero">
        Habilidades
      </h2>
      <div className="flex flex-wrap justify-center gap-6 font-ero">
        {skills.map((skill, i) => (
          <SkillCircle
            key={i}
            percentage={skill.percentage}
            label={skill.label}
          />
        ))}
      </div>
    </section>
  );
}
