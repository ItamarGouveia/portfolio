import Image from "next/image";
import React from "react";
import Socials from "../components/Socials";
import SkillsSection from "../components/SkillsSection";
import PhotoCard from "../components/PhotoCard";

export default function About() {
  return (
    <section
      className="flex w-full  flex-col lg:flex-row p-10 justify-center items-center "
      id="about"
    >
      <div className="w-full flex flex-col lg:flex-row gap-10 ">
        <div className=" flex justify-center lg:justify-end items-center w-full lg:w-1/3 ">
          <PhotoCard />
        </div>

        <div className=" w-full lg:w-2/3 ">
          <h1 className="text-5xl text-white font-ero mb-5 lg:mb-20">
            Sobre mim
          </h1>
          <p className="text-2xl text-white font-ero max-w-4xl mb-10">
            Sou um desenvolvedor full stack com paixão por transformar ideias em
            soluções funcionais. Tenho experiência tanto no desenvolvimento de
            interfaces modernas e responsivas quanto na construção de sistemas
            robustos no back-end. Ao longo da minha trajetória, trabalhei com
            diferentes tecnologias e estou sempre em busca de aprender mais.
            Valorizo código limpo, boas práticas e foco na experiência do
            usuário. Gosto de criar aplicações que sejam eficientes, intuitivas
            e que façam a diferença no dia a dia de quem usa.
          </p>
          <SkillsSection />
        </div>
      </div>

      <Socials />
    </section>
  );
}
