import React from "react";
import Six from "../images/Six.jpeg";
import Image from "next/image";

function Servicios() {
  return (
    <section
      id="servicios"
      className="group flex flex-col items-center h-screen max-w-7xl mx-auto mt-16 mb-80 lg:mb-0"
    >
      <h1 className="mb-4 mt-4 text-2xl md:text-4xl text-[#222449] font-Angkor  group-hover:text-red-600 transition-all duration-300 ease">
        SERVICOS
      </h1>
      <h2 className="mb-4 text-lg md:text-2xl text-[#222449] font-Angkor ">
        Parte de nuesros servicios
      </h2>
      <div>
        <div className="flex flex-col-reverse items-center md:flex-row-reverse justify-aroud max-w-7xl mx-auto  ">
          <div className="group p-8 flex flex-col items-center md:items-start flex-grow ">
            <div className=" flex flex-col items-center md:items-start flex-grow">
              <div className=" my-4 flex flex-col items-center md:items-start">
                <div className=" text-gray-600 text-xl md:text-3xl font-Angkor mb-4 ">
                  PELUQUERIA
                </div>
                <p className=" font-semibold">Corte de cabello</p>
                <p className=" font-semibold">Corte de nino</p>
              </div>
              <div className="my-4 flex flex-col items-center md:items-start">
                <div className=" text-gray-600 text-xl md:text-3xl font-Angkor mb-4 ">
                  BARBERIA
                </div>
                <p className=" font-semibold">Afeitado</p>
                <p className=" font-semibold">Delineado</p>
              </div>
              <div className="my-4 flex flex-col items-center md:items-start">
                <div className=" text-gray-600 text-xl md:text-3xl font-Angkor mb-4 ">
                  EXTRA
                </div>
                <p className=" font-semibold">Mascarilla de carbón</p>
                <p className=" font-semibold">Champú</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 md:w-1/2  mx-4  transition-all duration-300 ease">
            <div className="hidden md:inline ">
              <Image
                src={Six}
                width={700}
                height={700}
                objectFit="cover"
                className=""
              />
            </div>
            <div className=" md:hidden">
              <Image
                src={Six}
                width={400}
                height={400}
                objectFit="cover"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
