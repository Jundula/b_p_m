import React from "react";
import Image from "next/image";
import LogoB from "../images/Logo.svg";
import Etoile from "../images/etoile.png";

import { ChevronDoubleUpIcon } from "@heroicons/react/solid";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-7xl  group  mx-auto ">
      <div className=" bg-white rounded-xl md:border-t bg-opacity-50 mx-8 p-8 ">
        <div className="flex flex-col md:flex-row items-center justify-around text-center mt-80  md:mt-0">
          <div>
            <div className=" mt-8">
              <Image src={LogoB} width={160} height={160} objectFit="contain" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-grow justify-around">
            <div className=" border-t mt-4 md:border-none md:mt-0">
              <Link href="/">
                <p className="footer_link ease">Inicio</p>
              </Link>
              <p className="footer_link ease">Servicio</p>
              <Link href="#maps">
                <p className="footer_link ease">Horario</p>
              </Link>
              <Link href="#maps">
                <p className="footer_link ease">Contacto</p>
              </Link>
            </div>
            {/* <div className=" border-t mt-4 md:border-none md:mt-0">
              <p className="footer_link ease">Terms & condition</p>
              <p className="footer_link ease">Privacy</p>
              <p className="footer_link ease">Policy</p>
              <Link href="#faqs">
                <p className="footer_link ease">FAQ</p>
              </Link>
            </div> */}
            <div className=" border-t mt-4 md:border-none md:mt-0">
              <p className="footer_link ease">+52 222 178 8055</p>
              <p className="footer_link ease">
                Calle 5-A Sur 4920, Residencial Boulevares
              </p>
              <p className="footer_link ease">72440 Puebla, Pue.</p>
              <div className="flex items-center justify-around">
                {/* <Instagram className=" hover:scale-110 transition-all duration-300 ease hover:text-red-600 cursor-pointer " /> */}
                <Link href="https://www.facebook.com/Barbería-y-peluquería-marruecos-Marruecos-113346010027273/">
                  <Facebook className=" hover:scale-110 transition-all duration-300 ease hover:text-red-600 cursor-pointer " />
                </Link>
                {/* <Twitter className=" hover:scale-110 transition-all duration-300 ease hover:text-red-600 cursor-pointer " /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end   mt-4">
          <></>
          <Link href="/">
            <div className=" cursor-pointer rounded-full p-4  bg-white bg-opacity-50 hover:bg-red-600 hover:text-white shadow-lg hover:shadow-red-600 hover:scale-110 transition-all duration-300 ease">
              <ChevronDoubleUpIcon className="h-8 " />
              {/* <Image src={Etoile} width={40} height={40} objectFit="contain" /> */}
            </div>
          </Link>
        </div>
        <div className=" border-t mt-16 text-center hover:scale-110 transition-all duration-300 ease">
          <a
            target="_blank"
            href="https://www.login-design.com"
            className=" text-gray-400 text-center pt-8 text-sm cursor-pointer "
          >
            © 2022 B.P.M, All rights reserved by LogIn-Design.com .
          </a>
        </div>
      </div>
    </footer>
  );
}
