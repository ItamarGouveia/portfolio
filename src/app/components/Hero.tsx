import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex w-full  flex-row p-10 justify-center items-center">
      <div className="text-white  flex flex-col gap-10">
        <FaFacebook size={30} />
        <FaFacebook size={30} />
        <FaFacebook size={30} />
        <FaFacebook size={30} />
      </div>

      <div className=" z-20 w-full container flex flex-row py-10 mx-auto   mt-20">
        <div className="w-full flex  items-center flex-col justify-center">
          <p
            className=" flex text-[11vw] text-transparent stroke-white stroke-2
           justify-end leading-56 uppercase font-ero"
            style={{
              WebkitTextStroke: "2px white",
              color: "transparent",
            }}
          >
            full stack
          </p>

          <p className=" flex   text-[11vw] font-ero text-white justify-end leading-56 uppercase">
            developer
          </p>
        </div>
      </div>

      <div className="text-white  flex flex-col gap-10 justify-center items-center">
        <p className="rotate-90 mb-5">Siga-me</p>
        <FaFacebook size={30} />
        <FaGithub size={30} />
        <FaInstagram size={30} />
        <FaWhatsapp size={30} />
      </div>
    </div>
  );
};

export default Hero;
