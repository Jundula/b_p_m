import Image from "next/image";
import React, { useEffect, useState } from "react";
import LogoB from "../images/LogoB.svg";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import {
  AnnotationIcon,
  BeakerIcon,
  CashIcon,
  ClockIcon,
  CogIcon,
  HomeIcon,
  InformationCircleIcon,
  MenuIcon,
  PhotographIcon,
  XIcon,
  ScissorsIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

function Header() {
  const [showB, setShowB] = useState(false);

  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={classNames(" flex items-center  mx-auto   w-full  h-16 ", {
        " transition-all duration-300 ease  mx-auto  bg-black bg-opacity-40  backdrop-blur-xl shadow-md w-full fixed z-20 ":
          isShrunk,
      })}
    >
      <div className="flex justify-end items-center md:justify-between flex-grow max-w-7xl mx-auto ">
        <div className=" text-sm lg:text-base items-center  justify-around hidden md:inline-flex space-x-8 lg:space-x-16 ">
          <Link href="/">
            <p className="header_link ease">INICIO</p>
          </Link>
          <Link href="#servicios">
            <p className="header_link ease">SERVICIOS</p>
          </Link>
          <Link href="#maps">
            <p className="header_link ease">HORARIO</p>
          </Link>

          {/* <p className="header_link ease">Pricing</p> */}
        </div>
        <div className="group flex items-center justify-center absolute right-1/2 translate-x-1/2 top-0 z-20  ">
          {!isShrunk && (
            <div className="hidden h-124 w-124 md:flex items-center cursor-pointer  transition-all duration-500 ease-in z-20">
              <Image src={LogoB} width={120} height={192} objectFit="contain" />
            </div>
          )}

          {isShrunk && (
            <div className="hidden  md:flex items-center cursor-pointer  transition-all duration-500 ease-in">
              <Image src={LogoB} width={96} height={154} objectFit="contain" />
            </div>
          )}
          <div className="h-124 w-124 md:hidden flex items-center cursor-pointer  transition-all duration-500 ease-in">
            <Image src={LogoB} width={72} height={116} objectFit="contain" />
          </div>
        </div>
        <div>
          {showB ? (
            <motion.div
              className=""
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              exit={{ rotate: 0 }}
            >
              <XIcon
                className="h-8 md:hidden text-white  transition-all duration-300 ease cursor-pointer m-2 "
                onClick={(e) => {
                  setShowB(!showB);
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              exit={{ rotate: 0 }}
            >
              <MenuIcon
                className="h-8 md:hidden text-white transition-all duration-300 ease cursor-pointer m-2 "
                onClick={(e) => {
                  setShowB(!showB);
                }}
              />
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {showB && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" shadow-xl rounded-md absolute w-60 h-50 top-48 right-0 flex flex-col items-left pl-4 z-10 md:hidden bg-white "
              onClick={(e) => {
                setShowB(!showB);
              }}
            >
              <Link href="/">
                <div className="flex items-center group">
                  <HomeIcon className="h-5 text-[#222449] group-hover:animate-bounce" />
                  <p className="header_link_B ease">INICIO</p>
                </div>
              </Link>
              <Link href="#servicios">
                <div className="flex items-center group">
                  <ScissorsIcon className="h-5 text-[#222449] group-hover:animate-bounce" />
                  <p className="header_link_B ease">SERVICIOS</p>
                </div>
              </Link>
              <Link href="#maps">
                <div className="flex items-center group">
                  <ClockIcon className="h-5 text-[#222449] group-hover:animate-bounce" />
                  <p className="header_link_B ease whitespace-nowrap">
                    HORARIO & CITA
                  </p>
                </div>
              </Link>
              <Link href="#galleria">
                <div className="flex items-center group">
                  <PhotographIcon className="h-5 text-[#222449] group-hover:animate-bounce" />
                  <p className="header_link_B ease">GALERIA</p>
                </div>
              </Link>
              <Link href="#reviews">
                <div className="flex items-center group">
                  <AnnotationIcon className="h-5 text-[#222449] group-hover:animate-bounce" />
                  <p className="header_link_B ease">OPINIONES</p>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="   text-sm lg:text-base items-center  justify-around hidden md:inline-flex space-x-8 lg:space-x-16 ">
          <Link href="#galleria">
            <p className="header_link ease">GALERIA</p>
          </Link>
          <Link href="#maps">
            <p className="header_link ease">CONTACTO</p>
          </Link>
          <Link href="#reviews">
            <p className="header_link ease">OPINIONES</p>
          </Link>
          {/* <button
            className=" rounded-full px-8 py-1 font-bold 
          hover:bg-[#F07C4A] 
          hover:text-white transition-all duration-300 ease hover:scale-110  
          shadow-xl hover:shadow-xl active:scale-95 hover:shadow-[#F07C4A] whitespace-nowrap border-none"
          >
            Contact
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
