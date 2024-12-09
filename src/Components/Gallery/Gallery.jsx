import React from "react";
import Moment from "../Home/Moment/Moment";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-sky-500 text-white">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p>Explore moments from our events and rides!</p>
      </div>

      {/* Moment Section */}
      <Moment />
    </div>
  );
};

export default Gallery;
