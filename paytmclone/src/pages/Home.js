import React from "react";
import Booking from "../components/Booking";
import Hero from "../components/Hero";
import Recharge from "../components/Recharge";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Recharge />
        <Booking />
      </div>
    </>
  );
};

export default Home;
