import React from "react";
import './join.css';

const Join = () => {
  return (
    <div className="back p-10 text-white m-5 mt-20 rounded-lg shadow-lg">
      <div className="text-center space-y-5">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold leading-relaxed">
          We are <b>inviting you</b> to join our club & <br />
          community today
        </h1>
        
        {/* Description Section */}
        <p className="text-lg text-gray-300">
          Racing is still encouraged and remains an important part of the Team. <br />
          Members are welcome to race if they choose to do so in our club.
        </p>

        {/* Call to Action Button */}
        <button className="btn btn-outline border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#172a5e] transition duration-300 uppercase font-semibold">
          Join Today
        </button>
      </div>
    </div>
  );
};

export default Join;
