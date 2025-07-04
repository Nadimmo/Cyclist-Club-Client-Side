import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useModerator from "../Hooks/useModerator";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  const { user } = useContext(AuthContext); // Correct use of useContext
  const { isAdmin } = useAdmin();
  const { isModerator } = useModerator();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <button className='md:hidden p-3 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-600 hover:bg-gray-700 transition duration-300' onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={24} />
      </button>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className={`lg:w-64 min-h-screen bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-600 text-white p-6 shadow-lg ${isOpen? "block": "hidden"} md:block`}>
          <ul className="space-y-4">
            {isAdmin ? (
              // Admin Dashboard
              <>
                <li>
                  <NavLink
                    to="users"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="request"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    Request User
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="newsUpdate"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    News & Update
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    Home
                  </NavLink>
                </li>
              </>
            ) : isModerator ? (
              // Moderator Dashboard
              <>
                <li>
                  <NavLink
                    to="addEvent"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    Add Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="addImage"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    Add Image
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="newsUpdate"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    News & Update
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    Home
                  </NavLink>
                </li>
              </>
            ) : user ? (
              // Normal User Dashboard
              <>
                <li>
                  <NavLink
                    to="event"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="team"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    Our Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="article"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    Article
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="blog"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="text-xl hover:text-yellow-300 transition duration-300"
                  >
                    Home
                  </NavLink>
                </li>
              </>
            ) : (
              // If no user is logged in
              <p className="text-center text-xl mt-6">
                Please log in to access the dashboard.
              </p>
            )}
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 m-6 p-6 bg-white shadow-lg rounded-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
