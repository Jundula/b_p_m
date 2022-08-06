import React from "react";
import Image from "next/image";
import One from "../images/One.jpg";
import Two from "../images/Two.jpg";
import Three from "../images/Three.jpg";
import Four from "../images/Four.jpg";
import Five from "../images/Five.jpg";
import Six from "../images/Six.jpg";

export default function Galleria() {
  return (
    <section id="galleria" className="group flex flex-col items-center h-screen max-w-7xl mx-auto mt-16 mb-64 lg:mb-0">
      <h1 className="mb-4 text-xl md:text-4xl text-[#222449] font-Angkor  group-hover:text-red-600 transition-all duration-300 ease">GALERIA</h1>
      <h2 className="mb-16 text-lg md:text-2xl text-[#222449] font-Angkor ">Nuestros clientes satisfechos</h2>
      <div className=" flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 ">
          <div className="flex flex-row lg:flex-col mb-4 space-x-4 lg:space-x-0 lg:space-y-8 lg:mb-0">
            <div className="relative h-[200px] w-44 lg:h-[196px] lg:w-48 ">
              <Image src={One} layout="fill" objectFit="cover" />
            </div>
            <div className="relative h-[200px] w-44  lg:h-[296px] lg:w-48">
              <Image src={Two} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="relative h-[370px] w-[370px]  lg:h-[526px] lg:w-[526px]">
            <Image src={Five} layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-row lg:flex-col mb-4 space-x-4 lg:space-x-0 lg:space-y-8 lg:mb-0 mt-4 lg:mt-0">
            <div className="relative h-[200px] w-44 lg:h-[296px] lg:w-48">
              <Image src={Three} layout="fill" objectFit="cover" />
            </div>
            <div className="relative h-[200px] w-44 lg:h-[196px] lg:w-48">
              <Image src={Four} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
