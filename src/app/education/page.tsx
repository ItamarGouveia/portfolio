import Image from "next/image";
import React from "react";
import Socials from "../components/Socials";
import Timeline from "../components/TimeLine";

export default function Education() {
  return (
    <section
      className="flex w-full  flex-col md:flex-row p-10 justify-center items-center "
      id="education"
    >
      <div className="w-full flex flex-col md:flex-row gap-10 ">
        <div className=" flex justify-center  items-center w-full  ">
          <Timeline />
        </div>
      </div>

      <Socials />
    </section>
  );
}
