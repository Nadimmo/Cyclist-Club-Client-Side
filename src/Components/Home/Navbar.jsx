import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    logOut();
    setShowPopup(false); // Close popup after logout
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-yellow-400 ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-yellow-400 ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/calender"
          className={({ isActive }) =>
            `hover:text-yellow-400 ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          Event-Calender
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `hover:text-yellow-400 ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/event"
          className={({ isActive }) =>
            `hover:text-yellow-400 ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-yellow-400 ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gradient-to-l from-blue-300 via-blue-600 to-purple-600 shadow-lg">
      <div className="navbar px-4 lg:px-8">
        {/* Logo Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost text-white hover:bg-blue-700 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow-lg"
            >
              {Links}
            </ul>
          </div>
          <Link to="/">
            <img
              className="w-14 h-14 hover:shadow-md rounded-full cursor-pointer"
              src="https://i.ibb.co.com/TvdHTzH/logo.jpg"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Links for Larger Screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{Links}</ul>
        </div>

        {/* User Profile / Login Section */}
        <div className="navbar-end">
          {user ? (
            <div className="relative">
              <div
                onClick={togglePopup}
                className="cursor-pointer flex items-center space-x-2 border-2 border-yellow-400 rounded-full p-2 shadow hover:shadow-md transition"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <p className="text-white font-semibold">{user.displayName || "User"}</p>
                )}
              </div>
              {showPopup && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4">
                  <p className="font-semibold mb-2 text-center">
                    {user.displayName || "User"}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/register">
              <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg shadow hover:shadow-md transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
