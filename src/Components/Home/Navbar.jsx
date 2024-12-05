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
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/event"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <img
            className="w-14 h-14"
            src="https://i.ibb.co.com/TvdHTzH/logo.jpg"
            alt="Logo"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="relative">
              <div
                onClick={togglePopup}
                className="cursor-pointer flex items-center space-x-2"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <p className="font-bold">{user.displayName || "User"}</p>
                )}
              </div>
              {showPopup && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                  <p className="font-semibold mb-2">{user.displayName || "User"}</p>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-info w-full"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to={"/register"}>
              <p className="btn btn-info">Login</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
