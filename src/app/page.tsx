import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <section
      className="flex w-full  flex-col md:flex-row p-10 justify-center items-center"
      id="home"
    >
      <Link href="/">
        <div
          className="text-white hidden md:flex flex-col
     gap-5 justify-center items-center  
       h-[400px]  "
        >
          <FaDownload size={30} />
          <p
            className=" mt-5"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Download CV
          </p>
        </div>
      </Link>

      <div className=" z-20 w-full container flex flex-row py-10 mx-auto   mt-20">
        <div className="w-full flex  items-center flex-col justify-center">
          <p
            className=" flex leading-0.9 text-[14vw] sm:text-[12vw] md:text-[11vw] text-transparent
           stroke-white stroke-2
         justify-end  uppercase font-ero "
            style={{
              WebkitTextStroke: "2px white",
              color: "transparent",
            }}
          >
            fullstack
          </p>

          <p className=" flex  leading-0.9 text-[14vw] sm:text-[12vw] md:text-[11vw] font-ero text-white justify-end leading-56 uppercase">
            developer
          </p>
        </div>
      </div>

      <Socials />
    </section>
  );
}
