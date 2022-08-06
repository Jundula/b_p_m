import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React, { useRef } from "react";
import ReviewUI from "./ui/ReviewUI";

export default function Reviews(reviews) {
  // const ref = useRef(null);
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };
  return (
    <section className=" group flex flex-col items-center overflow-hidden md:mt-32 ">
      <h1 className="mb-4 mt-4 text-2xl md:text-4xl text-[#222449] font-Angkor  group-hover:text-red-600 transition-all duration-300 ease ">
        OPINIONES
      </h1>
      <h2 className=" text-lg md:text-2xl text-[#222449] font-Angkor  ">
        Lo que dicen nuestros clientes
      </h2>
      <div className="group flex  flex-col items-center  relative bg-white p-4 w-full   ">
        <div className=" group  hidden md:inline-flex absolute w-1/2 bg-gradient-to-r from-white via-white h-full top-0 left-0 z-10 ">
          {/* <ChevronLeftIcon className="cursor-pointer absolute bottom-1/2 translate-y-1/2 right-1/2 hover:scale-110 h-16 text-gray-400 hover:text-black " /> */}
        </div>
        <div className="hidden md:inline-flex absolute w-1/4 bg-gradient-to-l from-white via-white h-full top-0 right-0 z-10 ">
          {/* <ChevronRightIcon className="cursor-pointer absolute bottom-1/2 translate-y-1/2 left-1/4  hover:scale-110 h-16 text-gray-400 hover:text-black " /> */}
        </div>
        <div
          id="reviews"
          className="group flex  flex-col items-center relative p-4 bg-white w-full "
        >
          <div className=" bg-white p-4 w-full overflow-scroll scrollbar-hide">
            <div className="md:hover:-translate-x-[115vw] lg:hover:-translate-x-[75vw]  transition-all duration-[7000ms] linear flex flex-col items-center justify-center md:inline-flex md:flex-row  space-y-8 md:space-y-0  py-4 md:py-8 md:mt-4 bg-gray-50 md:px-[35vw] ">
              {reviews.data.map((item) => (
                <ReviewUI
                  key={item.id}
                  author_name={item.author_name}
                  text={item.text}
                  profile_photo_url={item.profile_photo_url}
                  rating={item.rating}
                  time={item.time}
                  className=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
