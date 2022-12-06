import React from "react";
import movies from "../assets/images/movies.png";
import flights from "../assets/images/flights.png";
import bus from "../assets/images/bus.png";
import train from "../assets/images/train.png";
import insurance from "../assets/images/insurance.png";
import international from "../assets/images/international.png";
import stocks from "../assets/images/stocks.png";

import { BiChevronRight } from "react-icons/bi";

const Booking = () => {
  return (
    <>
      <div className="grid grid-cols-7  place-items-center bg-[#1C488E] min-h-[50vh]">
        <div className="flex flex-col">
          <img src={movies} alt="movies" className="w-[60px] h-[60px]" />
          <div className="">
            <p className="text-white flex mt-4 justify-center items-end font-bold text-left">
              Movies <br /> tickets <BiChevronRight size={15} />
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={flights} alt="movies" className="w-[60px] h-[60px]" />
          <div className="">
            <p className="text-white flex mt-4 justify-center items-end font-bold text-left">
              flights <br /> tickets <BiChevronRight size={15} />
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={bus} alt="movies" className="w-[60px] h-[60px]" />
          <div className="">
            <p className="text-white flex mt-4 justify-center items-end font-bold text-left">
              Bus <br /> tickets <BiChevronRight size={15} />
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={train} alt="movies" className="w-[60px] h-[60px]" />
          <div className="">
            <p className="text-white flex mt-4 justify-center items-end font-bold text-left">
              Train <br /> tickets <BiChevronRight size={15} />
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={insurance} alt="movies" className="w-[60px] h-[60px]" />
          <div className="">
            <p className="text-white flex mt-4 justify-center items-end font-bold text-left">
              Buy <br /> Insurance <BiChevronRight size={15} />
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={international} alt="movies" className="w-[60px] h-[60px]" />
          <div className="">
            <p className="text-white flex mt-4 justify-center items-end font-bold text-left">
              International <br /> flights <BiChevronRight size={15} />
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={stocks} alt="movies" className="w-[60px] h-[60px]" />
          <div className="">
            <p className="text-white flex mt-4 justify-center items-end font-bold text-left">
              Invest In <br /> Stocks <BiChevronRight size={15} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
