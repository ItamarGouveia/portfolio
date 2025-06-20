import Link from "next/link";
import React from "react";
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex w-full  flex-col md:flex-row p-10 justify-center items-center">
      <Link href="/">
        <div
          className="text-white hidden md:flex flex-col
       gap-5 justify-center items-center  
         h-[400px]  "
        >
          <FaDownload size={30} />
          <p
            className=" mt-5"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
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
      <div className="text-white  flex flex-row md:flex-col gap-10 justify-center items-center">
        <p
          className="hidden md:flex mb-5"
          style={{ writingMode: "vertical-rl", transform: "rotate(360deg)" }}
        >
          Siga-me
        </p>
        <Link
          href="https://www.linkedin.com/in/itamar-gouveia/"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </Link>

        <Link
          href="https://www.instagram.com/itamar.b.gouveia/"
          target="_blank"
        >
          <FaInstagram size={30} />
        </Link>
        <Link href=" https://github.com/ItamarGouveia" target="_blank">
          <FaGithub size={30} />
        </Link>
        <Link href=" https://wa.me/5533998491982" target="_blank">
          <FaWhatsapp size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
