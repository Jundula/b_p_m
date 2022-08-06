import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

function ReviewUI({ time, rating, profile_photo_url, text, author_name }) {
  return (
    <div className="relative lg:h-72 w-80  rounded-xl hover:shadow-xl border bg-white  transition-all duration-200 ease hover:scale-105  mx-4  ">
      <div className="absolute right-1/2 -top-4 lg:-top-8  translate-x-1/2 h-8 w-8  lg:h-16 lg:w-16 ">
        <Image src={profile_photo_url} className="rounded-xl" layout="fill" />
      </div>
      <div className="flex flex-col items-center justify-center mt-8 lg:mt-16 mb-4 ">
        <p className="text-xs lg:text-base font-bold text-center">{author_name}</p>
        <p className=" text-gray-500 my-1 text-sm mb-4 text-center">{time}</p>
        <div className="flex mb-2">
          <StarIcon className=" h-3 lg:h-5 text-[#d4af37]" />
          <StarIcon className=" h-3 lg:h-5 text-[#d4af37]" />
          <StarIcon className=" h-3 lg:h-5 text-[#d4af37]" />
          <StarIcon className=" h-3 lg:h-5 text-[#d4af37]" />
          <StarIcon className=" h-3 lg:h-5 text-[#d4af37]" />
        </div>
        <p className="text-[12px] md:text-xs lg:text-base text-center px-4 ">"{text}"</p>
      </div>
    </div>
  );
}

export default ReviewUI;
