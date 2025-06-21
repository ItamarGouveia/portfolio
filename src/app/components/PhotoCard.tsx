"use client";

import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaPlus } from "react-icons/fa";

export default function PhotoCard() {
  return (
    <div className="relative w-[300px] h-[350px] m-10">
      {/* Moldura L externa */}
      <div className="absolute -top-4 -left-4 w-full h-full border-l-4 border-t-4 border-white z-0" />
      <div className="absolute -bottom-4 -right-4 w-full h-full border-r-4 border-b-4 border-white z-0" />

      {/* Imagem centralizada com padding interno */}
      <div className="relative z-10 w-full h-full overflow-hidden  bg-white p-2">
        <Image
          src="/about.jpg" // Substitua com o caminho correto
          alt="Pessoa apontando"
          fill
          className="object-cover "
        />
      </div>
      <Link href="/cv.pdf">
        <div
          className=" w-full h-18 mt-8 rounded-4xl flex text-2xl items-center justify-center
         text-white font-ero hover:scale-120 transition-transform duration-300 ease-in-out"
        >
          <FaDownload size={30} className="mr-4" />
          Download CV
        </div>
      </Link>
    </div>
  );
}
