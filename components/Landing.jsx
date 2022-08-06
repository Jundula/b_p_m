import React from "react";
import Image from "next/image";
import Barber from "../images/Barber5.svg";
import BarberS from "../images/BarberS.svg";


function Landing() {
  return (
    <section className=" h-screen ">
      {/* <div className="hidden sm:flex justify-center items absolute top-0 -z-10  ">
        <Image
          src={Barber}
          width={1600}
          height={1000 }
          objectFit="cover"
          className=""
        />
      </div>
      <div className=" sm:hidden absolute top-0 -z-10">
        <Image
          src={BarberS}
          width={640}
          height={1000}
          objectFit="cover"
          className=""
        />
      </div> */}
    </section >
  );
}

export default Landing;
