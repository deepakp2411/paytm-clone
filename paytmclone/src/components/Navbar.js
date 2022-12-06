import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/paytm_logo.png";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  // useEffect(() => {
  //   window.scrollY(nav > 30) {

  //   }

  // },[])
  return (
    <>
      <header className="flex min-h-[12vh] justify-between bg-sky-100 shadow-2xl">
        
          <div className="flex items-center mx-auto justify-around">
          <img src={logo} alt="logo" className="w-[12vw]" />
            <ul className="flex justify-evenly  items-center gap-5">
            <li className="px-4 font-bold text-black hover:bg-slate-400 hover:h-8 cursor-pointer transition-all duration-500 ease-in-out hover:rounded-md">
              Paytm for business
            </li>
            <li className="px-4 font-bold text-black hover:bg-slate-400 hover:h-8 cursor-pointer transition-all duration-500 ease-in-out hover:rounded-md">
              Paytm for customers
            </li>
            <li className="px-4 font-bold text-black hover:bg-slate-400 hover:h-8 cursor-pointer transition-all duration-500 ease-in-out hover:rounded-md">
              Inverstor Relations
            </li>
            <li className="px-4 font-bold text-black hover:bg-slate-400 hover:h-8 cursor-pointer transition-all duration-500 ease-in-out hover:rounded-md">
              Company
            </li>
            <li className="px-8 font-bold text-black hover:bg-slate-400 hover:h-8 cursor-pointer transition-all duration-500 ease-in-out hover:rounded-md">
              Career
            </li>

            </ul>
            <div className="flex ml-3 items-center h-11 w-32 justify-between bg-cyan-600 hover:bg-cyan-700 px-4 rounded-full">
              <Link to="/" className="text-white font-medium ">Sign in </Link>
              <MdAccountCircle size={35} className="cursor-pointer" />
            </div>
          </div>
      
      </header>
    </>
  );
};

export default Navbar;
