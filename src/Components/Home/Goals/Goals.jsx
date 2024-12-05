import React from "react";

const Goals = () => {
  return (
    <div className="m-5 mt-20">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-center text-teal-800">
          Our Club Goals
        </h1>
        <p className="text-lg my-4 text-gray-700">
          Racing is still encouraged and remains an important part of the team. <br />
          Members are welcome to race if they choose to do so in our club.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-stretch mt-10">
        {/* Card 1 */}
        <div className="bg-[#172a5e] min-h-[350px] flex flex-col p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border hover:border-[#ffc21af3] hover:bg-[#1d366f] duration-300 ease-in-out">
          <div className="flex-1">
            <h3 className="text-sm uppercase font-bold text-[#ffc21af3]">
              Our Club Goals
            </h3>
            <h1 className="text-2xl font-bold text-white mt-4">
              Share The Joy of Bicycle
            </h1>
            <div className="border-t border-[#ffc21af3] my-4"></div>
            <p className="text-sm text-gray-300">
              Promote cycling culture and encourage more people to ride.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#172a5e] min-h-[350px] flex flex-col p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border hover:border-[#ffc21af3] hover:bg-[#1d366f] duration-300 ease-in-out">
          <div className="flex-1">
            <h3 className="text-sm uppercase font-bold text-[#ffc21af3]">
              Our Club Goals
            </h3>
            <h1 className="text-2xl font-bold text-white mt-4">
              Create Exceptional Opportunities
            </h1>
            <div className="border-t border-[#ffc21af3] my-4"></div>
            <p className="text-sm text-gray-300">
              Build an inclusive cycling community with events and challenges.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#172a5e] min-h-[350px] flex flex-col p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border hover:border-[#ffc21af3] hover:bg-[#1d366f] duration-300 ease-in-out">
          <div className="flex-1">
            <h3 className="text-sm uppercase font-bold text-[#ffc21af3]">
              Our Club Goals
            </h3>
            <h1 className="text-2xl font-bold text-white mt-4">
              Teach Everyone to Ride Safely
            </h1>
            <div className="border-t border-[#ffc21af3] my-4"></div>
            <p className="text-sm text-gray-300">
              Educate members on safe cycling practices and road rules.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#172a5e] min-h-[350px] flex flex-col p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border hover:border-[#ffc21af3] hover:bg-[#1d366f] duration-300 ease-in-out">
          <div className="flex-1">
            <h3 className="text-sm uppercase font-bold text-[#ffc21af3]">
              Our Club Goals
            </h3>
            <h1 className="text-2xl font-bold text-white mt-4">
              Bring People Together
            </h1>
            <div className="border-t border-[#ffc21af3] my-4"></div>
            <p className="text-sm text-gray-300">
              Foster friendships and community through cycling events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
