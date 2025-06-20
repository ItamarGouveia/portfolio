import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="text-white  flex flex-row lg:flex-col gap-10 justify-center items-center ">
      <p
        className="hidden lg:flex mb-5"
        style={{ writingMode: "vertical-rl", transform: "rotate(360deg)" }}
      >
        Siga-me
      </p>
      <Link href="https://www.linkedin.com/in/itamar-gouveia/" target="_blank">
        <FaLinkedin
          size={30}
          className="hover:scale-120 transition-transform duration-300 ease-in-out"
        />
      </Link>

      <Link href="https://www.instagram.com/itamar.b.gouveia/" target="_blank">
        <FaInstagram
          size={30}
          className="hover:scale-120 transition-transform duration-300 ease-in-out"
        />
      </Link>
      <Link href=" https://github.com/ItamarGouveia" target="_blank">
        <FaGithub
          size={30}
          className="hover:scale-120 transition-transform duration-300 ease-in-out"
        />
      </Link>
      <Link href=" https://wa.me/5533998491982" target="_blank">
        <FaWhatsapp
          size={30}
          className="hover:scale-120 transition-transform duration-300 ease-in-out"
        />
      </Link>
    </div>
  );
};

export default Socials;
