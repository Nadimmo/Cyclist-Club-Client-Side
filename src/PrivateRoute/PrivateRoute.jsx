import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, Navigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner"; // Use any loader library or component you like

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
//   console.log(location.pathname);
  // If loading, show a loader
  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </>
    );
  }

  // If user is authenticated, render children
  if (user) {
    return children;
  }

  // If no user, redirect to login page and preserve the current location
  return <Navigate state={location.pathname} replace={true} to="/login" />;
};

export default PrivateRoute;
