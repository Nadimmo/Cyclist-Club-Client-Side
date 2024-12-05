import React from "react";
import "./style.css";
import { FaNutritionix, FaSupple } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { IoBicycle } from "react-icons/io5";
import { FaScrewdriverWrench } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="background">
      <section>
        <div>
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-100">
              The Club Rides For Different Standards
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
            Racing is still encouraged and remains an important part of the Team. Members are welcome to race if they choose to do so.
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className=" px-8 py-3 m-2 text-lg bg-[#f8c537f3] rounded-xl font-semibold  text-white hover:btn-outline"
              >
                Our Club
              </button>
              <button
                type="button"
                className=" px-8 py-3 m-2 text-lg border rounded-xl dark:border-gray-300 dark:text-gray-50 hover:btn-outline"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/random/480x320"
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 rounded-xl dark:bg-gray-500  shadow-md lg:-mt-40"
        />
      </section>
      <div className="lg:grid grid-cols-4 gap-5 m-4 py-5">
        <div className="bg-[#2a2041] p-5 rounded-xl text-center text-white">
          <span><FaScrewdriverWrench className="mx-auto text-6xl text-[#ffc628f3]"></FaScrewdriverWrench></span>
          <h3 className="text-2xl font-bold mt-2">Full of Support</h3>
          <p className="text-sm text-[#ffc628f3]">The excepted peace</p>
          <p className="text- mt-4">The best reason of all is the opportunity to contact with other riders in our club </p>
        </div>
        <div className="bg-[#2a2041] p-5 rounded-xl text-center text-white lg:mt-0 mt-5">
          <span ><MdHealthAndSafety className="mx-auto text-6xl text-[#ffc628f3]"></MdHealthAndSafety></span>
          <h3 className="text-2xl font-bold mt-2">Health Care</h3>
          <p className="text-sm text-[#ffc628f3]">The excepted peace</p>
          <p className="text- mt-4">The best reason of all is the opportunity to contact with other riders in our club </p>
        </div>
        <div className="bg-[#2a2041] p-5 rounded-xl text-center text-white lg:mt-0 mt-5">
          <span><FaNutritionix className="mx-auto text-6xl text-[#ffc628f3]"></FaNutritionix></span>
          <h3 className="text-2xl font-bold mt-2">The Nutrition</h3>
          <p className="text-sm text-[#ffc628f3]">The excepted peace</p>
          <p className="text- mt-4">The best reason of all is the opportunity to contact with other riders in our club </p>
        </div>
        <div className="bg-[#2a2041] p-5 rounded-xl text-center text-white lg:mt-0 mt-5">
          <span ><IoBicycle className="mx-auto text-6xl text-[#ffc628f3]"></IoBicycle></span>
          <h3 className="text-2xl font-bold mt-2">Variety of Club</h3>
          <p className="text-sm text-[#ffc628f3]">The excepted peace</p>
          <p className="text- mt-4">The best reason of all is the opportunity to contact with other riders in our club </p>
        </div>
      </div>


    </div>
  );
};

export default Banner;
