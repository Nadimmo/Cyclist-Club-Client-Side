import React from "react";
import { FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa"; // Importing React Icons

const MemberCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col justify-center lg:h-[420px] max-w-xs p-6 lg:mt-0 mt-4 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt={name}
        className="w-36 h-36 mx-auto rounded-full dark:bg-gray-500 aspect-square mb-6"
      />
      <div className="space-y-4 text-center divide-y dark:divide-gray-300">
        <div className="my-2 space-y-1">
          <h2 className="text-2xl font-semibold sm:text-2xl">{name}</h2>
          <p className="px-5 text-xs sm:text-base dark:text-gray-600">{role}</p>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center">
          <a href="#" aria-label="Facebook" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
            <FaFacebook size={24} /> {/* Facebook Icon */}
          </a>
          <a href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
            <FaTwitter size={24} /> {/* Twitter Icon */}
          </a>
          <a href="#" aria-label="Email" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
            <FaEnvelope size={24} /> {/* Email Icon */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
