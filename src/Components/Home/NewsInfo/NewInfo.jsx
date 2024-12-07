import React from "react";
import img from "../../../assets/banner3.jpg";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineUpdate } from "react-icons/md";
import useNewsInfo from "../../Hooks/useNewsInfo";

const NewInfo = () => {
  const { newsInfos } = useNewsInfo();
  // console.log(newsInfos);

  return (
    <div className="m-5 mt-28">
      {/* Header Section */}
      <div className="text-center my-2">
        <h1 className="text-4xl font-bold">
          See what's in our latest <b>New & Info</b>
        </h1>
        <p className="text-lg my-4 text-gray-700">
          Racing is still encouraged and remains an important part of the Team.{" "}
          <br />
          Members are welcome to race if they choose to do so in our club.
        </p>
      </div>

      {/* Cards Section */}
      <div className="lg:grid grid-cols-3 gap-6 mx-auto">
        {/* Card  */}
        {newsInfos.map((info) => (
          <>
            <div className="card image-full lg:w-96 mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out lg:mt-0 mt-2">
              <figure>
                <img src={img} alt="New Info" className="rounded-lg" />
              </figure>
              <div className="card-body">
                <p className="uppercase text-white flex items-center">
                  <RiAdminFill className="mr-2 text-[#ffc628f3]" />{" "}
                  {info.author}
                  <MdOutlineUpdate className="ml-5 text-[#ffc628f3]" />{" "}
                  {info.dateTime}
                </p>
                <h2 className="text-xl font-bold text-white mt-4">
                  {info.title}
                </h2>
                <p className="text-[#ffc628f3] mt-2">{info.type}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default NewInfo;
