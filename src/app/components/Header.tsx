"use client";

import Link from "next/link";
import { useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { FaHome, FaPhone, FaUserGraduate } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* INÍCIO MENU */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full z-50 flex flex-row
          bg-transparent
          transition-all duration-300 ease-in-out
          ${
            isVisible
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full pointer-events-none"
          }
        `}
      >
        <div className="hidden md:flex w-1/2 bg-black opacity-80">
          {/* div vazia */}
        </div>

        <div className="flex w-full md:w-1/2 bg-black flex-col">
          <div className="w-full p-10">
            <IoMdClose
              size={30}
              className="text-white cursor-pointer"
              onClick={() => setIsVisible(false)}
            />
          </div>
          <div className="flex p-10 flex-col ">
            <div className="flex items-center py-6">
              <Link href="/" className="text-white text-6xl font-ero  flex ">
                <FaHome size={50} className="mr-5" />
                Home
              </Link>
            </div>
            <div className="flex items-center py-6">
              <Link href="/" className="text-white text-6xl font-ero  flex ">
                <IoDocumentTextOutline size={50} className="mr-5" />
                Sobre
              </Link>
            </div>

            <div className="flex items-center py-6">
              <Link href="/" className="text-white text-6xl font-ero  flex ">
                <BsPersonWorkspace size={50} className="mr-5" />
                Portifólio
              </Link>
            </div>
            <div className="flex items-center py-6">
              <Link href="/" className="text-white text-6xl font-ero  flex ">
                <FaUserGraduate size={50} className="mr-5" />
                Educação
              </Link>
            </div>
            <div className="flex items-center py-6">
              <Link href="/" className="text-white text-6xl font-ero  flex ">
                <FaPhone size={50} className="mr-5" />
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* FIM MENU */}

      <div className="w-full flex p-8 h-[120px] justify-between items-center">
        <div className="text-5xl font-ero text-white">Itamar Gouveia</div>

        <CiMenuFries
          size={40}
          className="text-white cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>
    </>
  );
}
