import React, { useContext } from "react";
import { CurrentDataContext } from "../App";
import {sunrise, sunset, humidity, wind, arrow, downArrow } from "../assets";
import Toggle from "./Toggle";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
const scrollToTop = () => {
  scroll.scrollToTop();
};
const getTemp = (current) => {
  const temp = { min: current.temp.min, max: current.temp.max };
  const time = parseInt(current.time);
  if (time <= 4)
    return {
      ...temp,
      temp: current.temp.night,
      feels_like: current.feels_like.night,
    };
  else if (time <= 11)
    return {
      ...temp,
      temp: current.temp.morn,
      feels_like: current.feels_like.morn,
    };
  else if (time <= 15)
    return {
      ...temp,
      temp: current.temp.day,
      feels_like: current.feels_like.day,
    };
  else if (time <= 19)
    return {
      ...temp,
      temp: current.temp.eve,
      feels_like: current.feels_like.eve,
    };
  else
    return {
      ...temp,
      temp: current.temp.night,
      feels_like: current.feels_like.night,
    };
};

const isEmpty = (obj) => JSON.stringify(obj) === "{}";

const Hero = () => {
  const { current } = useContext(CurrentDataContext);

  var sideElements = [];
  if (current) {
    sideElements = [
      {
        src: sunrise,
        data: current.sunrise,
      },
      {
        src: sunset,
        data: current.sunset,
      },
      {
        src: humidity,
        data: `${current.humidity} %`,
      },
      {
        src: wind,
        data: `${current.wind_speed}`,
      },
    ];
  }
  return (
    <div className="flex flex-col-reverse sm:flex-row py-2 md:py-6 w-full justify-between items-center ss:items-start sm:items-center">
      {!isEmpty(current) ? (
          <div className=" flex flex-col justify-center items-center cursor-pointer bg-darkPurple rounded-3xl z-10 p-8 mt-5 sm:mt-0 sm:pr-12 w-[100%] hover:shadow-xl transition duration-300">
            <div className="mb-4 pl-8">
              <Toggle />
            </div>
            <p className="text-darkGrey font-satoshi font-bold text-2xl md:text-3xl">
              
              {current.location} 
            </p>
            <p className="text-darkGrey font-satoshi font-medium text-lg sm:text-xl md:text-2xl mt-1">
              {current.date}
            </p>
            <div className="mt-4 sm:mt-0"> {/* Adjust the margin as needed */}
              
            </div>
            <div className="flex justify-center xs:justify-between space-x-14 ss:space-x-20 items-start mt-8">
              <div>
                <p className="text-darkGrey font-satoshi text-xl ss:text-2xl md:text-3xl font-bold capitalize">
                  {current.condition}
                </p>
                <p className="text-offWhite font-satoshi font-medium text-[70px] ss:text-[80px] md:text-[100px] leading-none">
                  {getTemp(current).temp?.toFixed(1)}&deg;
                </p>
                <p className="text-offWhite font-satoshi font-medium text-base ss:text-lg md:text-xl mt-5">
                  Real feel {getTemp(current).feels_like?.toFixed(1)}&deg;
                </p>
                <p className="text-offWhite font-satoshi font-medium text-base ss:text-lg md:text-xl">
                  {getTemp(current).min?.toFixed(1)}&deg; /{" "}
                  {getTemp(current).max?.toFixed(1)}
                  &deg;
                </p>
                
              </div>
              <div className="flex flex-col space-y-2 ss:space-y-4">
                {sideElements.map((element, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 xs:space-x-4"
                  >
                    <div className="flex justify-center -ml-8 sm:ml-0 items-center">
                      <img src={element.src} className="object-contain" />
                    </div>
                    <p className="text-offWhite font-satoshi font-medium text-base ss:text-lg md:text-xl">
                      {element.data}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <ScrollLink to="cards" smooth={true} duration={1000}>
            <img
              src={downArrow}
              alt=""
              className="h-6 w-6 cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1"
            />

          </ScrollLink>

          </div>
      ) : (
<div className="mainPage flex flex-col justify-center items-center cursor-pointer bg-darkPurple rounded-3xl ml-[32%] z-10 py-8 px-4 mt-5 sm:mt-0 sm:pr-12 max-w-100% hover:shadow-xl 
transition ease-in-out delay-150  duration-300">
<img
  src={arrow}
  alt=""
  className="hidden sm:hidden md:hidden lg:block xl:hidden h-[150px] w-[150px] absolute top-0 right-0 mt-[100px] mr-[500px] z-210 opacity-70"
/>
  <div role="status" className="max-w-sm text-center">
    <p className="text-[#FFF5E0] font-satoshi font-bold text-2xl md:text-3xl">
      Enter your location
    </p>
    <div className="animate-pulse flex space-x-4 mt-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-[#a599b5] rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-[#a599b5] rounded col-span-2"></div>
            <div className="h-2 bg-[#a599b5] rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-[#a599b5] rounded"></div>
        </div>
      </div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
</div>


      )}
      <div className="flex flex-1 justify-center items-center ml-4 relative">
        <div className="purple-gradient w-[628px] h-[628px] rounded-full absolute z-[0] scale-75:scale-90 sm:scale-100 " />
      </div>
      
    </div>
    
  );
};

export default React.memo(Hero);
export { getTemp };
