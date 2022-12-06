import React from 'react'
import upi from '../assets/images/upi.png'
import upiHero from '../assets/images/upi-hero.png'
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";



const Hero = () => {
  return (
   <>
    <div className='flex justify-between items-center flex-wrap mt-12'>
        <div className='px-28 '>
            <img src={upi} alt="upi" className='w-[6vw]' />
            <div className='py-4 '>
                <h1 className='font-bold text-4xl'>India's Most-loved <br/>Payments App</h1>
                <p className='text-xl mt-3 text-black font-medium'>Recharge & pay bills, book flights & movie tickets,<br/> open a savings account, invest in stocks & mutual funds,<br/> and do a lot more.</p>
                <div className='flex w-[16vw] h-12 rounded-full bg-black text-white mt-6 items-center justify-center cursor-pointer hover:bg-white hover:text-black hover:border transition-all duration-500 ease-in-out'>
                    <p className='px-2'>Download Paytm App</p>
                    <BsApple size={14} className='mr-2' />
                    <FaGooglePlay size={14} />
                </div>
            </div>
        </div>
        <div className=''>
        <img src={upiHero} alt="upi-hero" className='w-[34vw]' />

        </div>
    </div>
   </>
  )
}

export default Hero