// eslint-disable-next-line no-unused-vars
import React from "react";
import "../App.css";
import mainBg from "../assets/images/main123.jpeg"; 

import Navigation from "../components/Navigation";

function Home() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col px-4 items-center"
      style={{ backgroundImage: `url(${mainBg})` }} 
    >
     

      <Navigation/>
      <div className="relative w-full max-w-2xl text-center flex flex-col items-center gap-4 z-10">
        <h1 className="text-4xl font-bold text-white text-center pb-2 leading-tight mt-55 sm:text-5xl md:text-6xl">
          Design your Kitchen<br></br> with the experts
        </h1>
        <p className="text-white text-lg sm:text-xl">$150 deposit</p>
        <p className="text-white text-lg sm:text-xl">3D Designs and Management</p>

        <button className="bg-white rounded-full p-3 w-40 mt-4 font-bold text-gray-800 px-6 py-3 w-48 hover:bg-gray-500 transition">
          Visit Showroom
        </button>
      </div>
    </section>
  );
}

export default Home;
