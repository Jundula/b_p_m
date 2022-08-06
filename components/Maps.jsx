import React from "react";
import Image from "next/image";
import Map from "../images/Map.svg";

function Maps() {
  return (
    <section id="maps" className=" md:pt-0 h-screen mt-16">
      <div className=" ">
        <div className="flex flex-col-reverse items-center md:flex-row-reverse justify-aroud max-w-7xl mx-auto  ">
          <div className="group p-8 flex flex-col items-center md:items-start flex-grow ">
            <span className=" text-center mb-4 text-2xl md:text-4xl text-[#222449] font-Angkor  group-hover:text-red-600 transition-all duration-300 ease">HORARIO & CONTACTO</span>
            <h2 className="text-xl md:text-2xl text-[#222449] font-Angkor mt-4  mb-8">
              Tienda en <span className=" font-Montserrat group-hover:text-red-600 transition-all duration-300 ease">Puebla</span>
            </h2>
            <div className=" flex flex-col items-center md:items-start flex-grow">
              <div className=" my-4 flex flex-col items-center md:items-start">
                <div className=" text-gray-600 text-2xl md:text-3xl font-Angkor mb-4 ">Horario</div>
                <div className="flex flex-col items-center md:items-start ">
                  <p className="text-[#222449] font-Poppins text-xl md:text-2xl ">Semana :<span className="  text-[#222449] font-Poppins text-lg md:text-xl "> 10 AM - 8 PM</span></p>
                  <p className="text-[#222449] font-Poppins text-xl md:text-2xl ">Sabado :<span className="  text-[#222449] font-Poppins text-lg md:text-xl "> 10 AM - 7 PM</span></p>
                </div>
              </div>
              
              <div className="my-4 flex flex-col items-center md:items-start">
                <div className=" text-gray-600 text-2xl md:text-3xl font-Angkor mb-4 ">Contacto</div>
                <div className="flex flex-col ">
                  <span className="  text-[#222449] font-Poppins text-xl md:text-2xl ">+522221788055</span>
                </div>
              </div>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D522221788055%26app%3Dfacebook%26entry_point%3Dpage_cta&h=AT0WTrOwEoTAFUsN6DvZehcEcPofjvJouJahe7Clb6fDrWRUWoxnQPLMSzQo9Mcbur0PGKNzBO4CjiIncwT04rZTbrUuLtwCunHSVQUtk5kzXnP9q6mvU_lUUAYKjk6QoS63kf2A4_s9I_KIFA2mCfIwRkIqgCwifqAnIJwagUAgaVEojhw" className="flex justify-center px-4 mx-16 items-center rounded-full mt-4 shadow-xl py-1 border hover:scale-110 hover:bg-red-400 hover:shadow-red-400 transition-all duration-300 ease">
                <button className="text-xl text-[#222449] font-semibold" >Hacer Cita</button>
              </a>
              
            </div>
          </div>
          <a href="https://goo.gl/maps/hwDUC3g6rcEioZAG6" className="flex items-center justify-center mt-8 md:w-1/2  mx-4 hover:scale-105 cursor-pointer transition-all duration-300 ease" >
            <div className="hidden md:inline ">
              <Image
                src={Map}
                width={600}
                height={600}
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className=" md:hidden">
              <Image
                src={Map}
                width={400}
                height={400}
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </a >
        </div>
      </div>
    </section>
  );
}

export default Maps;
