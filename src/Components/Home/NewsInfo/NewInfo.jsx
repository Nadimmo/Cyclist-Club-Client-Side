import React from "react";
import img from "../../../assets/banner3.jpg";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineUpdate } from "react-icons/md";

const NewInfo = () => {
  return (
    <div className="m-5 mt-28">
      {/* Header Section */}
      <div className="text-center my-2">
        <h1 className="text-4xl font-bold">
          See what's in our latest <b>New & Info</b>
        </h1>
        <p className="text-lg my-4 text-gray-700">
          Racing is still encouraged and remains an important part of the Team. <br />
          Members are welcome to race if they choose to do so in our club.
        </p>
      </div>

      {/* Cards Section */}
      <div className="lg:grid grid-cols-3 gap-6 mx-auto">
        {/* Card 1 */}
        <div className="card image-full w-96 mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <figure>
            <img src={img} alt="New Info" className="rounded-lg" />
          </figure>
          <div className="card-body">
            <p className="uppercase text-white flex items-center">
              <RiAdminFill className="mr-2 text-[#ffc628f3]" /> Admin{" "}
              <MdOutlineUpdate className="ml-5 text-[#ffc628f3]" /> May 21-24
            </p>
            <h2 className="text-xl font-bold text-white mt-4">
              Where do you want the <br /> next Race to be held?
            </h2>
            <p className="text-[#ffc628f3] mt-2">Race</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card image-full w-96 mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <figure>
            <img src={img} alt="New Info" className="rounded-lg" />
          </figure>
          <div className="card-body">
            <p className="uppercase text-white flex items-center">
              <RiAdminFill className="mr-2 text-[#ffc628f3]" /> Admin{" "}
              <MdOutlineUpdate className="ml-5 text-[#ffc628f3]" /> May 21-24
            </p>
            <h2 className="text-xl font-bold text-white mt-4">
              Directions & Travel Times <br /> From The West
            </h2>
            <p className="text-[#ffc628f3] mt-2">Story</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card image-full w-96 mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <figure>
            <img src={img} alt="New Info" className="rounded-lg" />
          </figure>
          <div className="card-body">
            <p className="uppercase text-white flex items-center">
              <RiAdminFill className="mr-2 text-[#ffc628f3]" /> Admin{" "}
              <MdOutlineUpdate className="ml-5 text-[#ffc628f3]" /> May 21-24
            </p>
            <h2 className="text-xl font-bold text-white mt-4">
              Major Update in Cycling <br /> As Crisis Continues
            </h2>
            <p className="text-[#ffc628f3] mt-2">Race</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInfo;
