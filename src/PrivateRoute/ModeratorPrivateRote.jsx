import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { Bars } from "react-loader-spinner";
import useModerator from "../Components/Hooks/useModerator";

const ModeratorPrivateRoute = ({ children }) => {
  const {isModerator, isModeratorLoading} = useModerator()
  const { user, loading, logOut } = useContext(AuthContext);
  const location = useLocation();

  // Show loading spinner if admin or auth is still loading
  if (loading || isModeratorLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
       
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        
      </div>
    );
  }

  // If user is logged in and is an admin, render children
  if (user && isModerator) {
    return children;
  }

  // If not an admin or user, log out and navigate to login page
  if (!user || !isModerator) {
    logOut();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return null;
};

export default ModeratorPrivateRoute;
