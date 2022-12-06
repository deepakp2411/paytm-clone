import React from "react";
import { data } from "../utils/data";

const Recharge = () => {
  return (
    <>
      <div className="flex min-h-[50vh]  bg-[#20CDF0] mt-20">
        <div className="flex mt-8">
          <h1 className="text-white text-3xl font-bold ml-[7vw]">
            Recharge & Pay Bills on Paytm.
          </h1>
        </div>

        {data.map((item) => {
          const { id, img, title, icon } = item;
          return (
            <div key={id} className="flex items-center">
              <div className="flex flex-col justify-center">
                <img src={img} alt={title} className="w-[80px] h-[80px] cursor-pointer" />
                <p className="text-white font-medium">{title}</p>
                <span>{icon}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Recharge;
