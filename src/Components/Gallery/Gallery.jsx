import React from "react";
import useAxiosPublic from "./../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Moment from "../Home/Moment/Moment";

const Gallery = () => {
  const axiosPublic = useAxiosPublic();
  const { data: images = [] } = useQuery({
    queryKey: "images",
    queryFn: async () => {
      const res = await axiosPublic.get("/gallery");
      return res.data;
    },
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="text-center p-6 bg-sky-500 text-white">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p>Explore moments from our events and rides!</p>
      </div>
      <Moment></Moment>

      {/* Grid Layout */}
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={image.url}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">
                  Event {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
