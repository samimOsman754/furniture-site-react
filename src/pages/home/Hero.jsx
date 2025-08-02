import React, { useContext } from "react";
import BannerImg from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";
import TooltipButton from "../../components/TooltipButton";
import { BsMoon, BsSun } from "react-icons/bs";
import { ThemeContext } from "../../contex/ThemeContex";


const Hero = () => {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext)

  

  return (
    <section
      className="min-h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      
      <div className="md:pt-44 pt-24 text-center space-y-6 md:w-1/2 mx-auto px-4">
        <h1 className="text-4xl lg:text-6xl font-semibold leading-snug lg:leading-tight">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-xl md:text-2xl font-light lg:w-3/4 mx-auto">
          Turn your room with Panto into a more minimalistic and modern space with ease and speed.
        </p>

        {/* Search Field */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none text-gray-800 placeholder-gray-700"
          />
          <div className="text-gray-800 absolute right-3 top-1/2 -translate-y-1/2">
            <FaSearch />
          </div>
        </div>
      </div>

      {/* Bottom blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm pointer-events-none"></div>

      {/* Tooltip Buttons (desktop only) */}
      <div className="hidden xl:block absolute bottom-40 left-24">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-52 left-96">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-24 right-[820px]">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-20 right-20 left-20">
        <TooltipButton position="bottom" />
      </div>
      {/* dark and light mode toggle */}
       <div className="absolut bottom-20 right-16 z-40">
        <button
          onClick={toggleTheme} 
        className="focus:outline-none font-bold text-lg p-5 bg-black rounded-full ml-6">
          {
            isDarkMode ? (
              <BsSun className="text-yellow-300"/>
            ) : (
              <BsMoon className="text-yellow-300"/>
            )
          }
        
        </button>
      </div>
    </section>
  );
};

export default Hero;
