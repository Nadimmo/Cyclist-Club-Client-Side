<<<<<<< HEAD
import React from "react";
import img from "../../../assets/banner3.jpg";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineUpdate } from "react-icons/md";
const NewInfo = () => {
  return (
    <div className="m-5 mt-28">
        <div className="text-center my-2">
        <h1 className="text-4xl font-bold">See what's in our latest <b>new & info</b></h1>
        <p className="text-lg my-4">
          Racing is still encouraged and remains an important part of the Team. 
          Members are welcome to  <br />race if they choose to do so in our club.
        </p>
      </div>
      <br /><br />
      <div className="lg:grid grid-cols-3 gap-4 mx-auto">
        <div className="card image-full w-96">
          <figure>
            <img src={img} alt="loading..." />
          </figure>
          <div className="card-body">
            <p className="uppercase text-white  flex">
              {" "}
              <RiAdminFill className="m-1 text-[#ffc628f3]" /> Admin{" "}
              <MdOutlineUpdate className="m-1 ml-5 text-[#ffc628f3]" /> May
              21-24
            </p>
            <h2 className="text-xl font-bold text-white mt-4">
              Where do you want the <br /> next Race to be held?
            </h2>
            <p className="text-[#ffc628f3]">race</p>
          </div>
        </div>
        <div className="card image-full w-96">
          <figure>
            <img src={img} alt="loading..." />
          </figure>
          <div className="card-body">
            <p className="uppercase text-white  flex">
              {" "}
              <RiAdminFill className="m-1 text-[#ffc628f3]" /> Admin{" "}
              <MdOutlineUpdate className="m-1 ml-5 text-[#ffc628f3]" /> May
              21-24
            </p>
            <h2 className="text-xl font-bold text-white mt-4">
              Directions & Travel Times <br /> From The West.
            </h2>
            <p className="text-[#ffc628f3]">story</p>
          </div>
        </div>
        <div className="card image-full w-96">
          <figure>
            <img src={img} alt="loading..." />
          </figure>
          <div className="card-body">
            <p className="uppercase text-white  flex">
              {" "}
              <RiAdminFill className="m-1 text-[#ffc628f3]" /> Admin{" "}
              <MdOutlineUpdate className="m-1 ml-5 text-[#ffc628f3]" /> May
              21-24
            </p>
            <h2 className="text-xl font-bold text-white mt-4">
              Major Update in Cycling<br /> As Crisis Continues
            </h2>
            <p className="text-[#ffc628f3]">race</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInfo;
=======
import React from "react";
import img from "../../../assets/banner3.jpg";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineUpdate } from "react-icons/md";
const NewInfo = () => {
  return (
    <div className="m-5 mt-28">
        <div className="text-center my-2">
        <h1 className="text-4xl font-bold">See what's in our latest <b>new & info</b></h1>
        <p className="text-lg my-4">
          Racing is still encouraged and remains an important part of the Team. 
          Members are welcome to  <br />race if they choose to do so in our club.
        </p>
      </div>
      <br /><br />
      <div className="lg:grid grid-cols-3 gap-4 mx-auto">
        <div className="card image-full w-96">
          <figure>
            <img src={img} alt="loading..." />
          </figure>
          <div className="card-body">
            <p className="uppercase text-white  flex">
              {" "}
              <RiAdminFill className="m-1 text-[#ffc628f3]" /> Admin{" "}
              <MdOutlineUpdate className="m-1 ml-5 text-[#ffc628f3]" /> May
              21-24
            </p>
            <h2 className="text-xl font-bold text-white mt-4">
              Where do you want the <br /> next Race to be held?
            </h2>
            <p className="text-[#ffc628f3]">race</p>
          </div>
        </div>
        <div className="card image-full w-96">
          <figure>
            <img src={img} alt="loading..." />
          </figure>
          <div className="card-body">
            <p className="uppercase text-white  flex">
              {" "}
              <RiAdminFill className="m-1 text-[#ffc628f3]" /> Admin{" "}
              <MdOutlineUpdate className="m-1 ml-5 text-[#ffc628f3]" /> May
              21-24
            </p>
            <h2 className="text-xl font-bold text-white mt-4">
              Directions & Travel Times <br /> From The West.
            </h2>
            <p className="text-[#ffc628f3]">story</p>
          </div>
        </div>
        <div className="card image-full w-96">
          <figure>
            <img src={img} alt="loading..." />
          </figure>
          <div className="card-body">
            <p className="uppercase text-white  flex">
              {" "}
              <RiAdminFill className="m-1 text-[#ffc628f3]" /> Admin{" "}
              <MdOutlineUpdate className="m-1 ml-5 text-[#ffc628f3]" /> May
              21-24
            </p>
            <h2 className="text-xl font-bold text-white mt-4">
              Major Update in Cycling<br /> As Crisis Continues
            </h2>
            <p className="text-[#ffc628f3]">race</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInfo;
>>>>>>> 6d2a2ddcf10cf48201a02a1d4e1789f924c86fec
