<<<<<<< HEAD
import React from "react";
import video from "../../../assets/vedio.mp4";
const Community = () => {
  return (
    <div className="lg:flex justify-between m-5 mt-20">
      <div className="lg:mt-22 mt-14">
        <video src={video} controls className="lg:w-[560px]" />
      </div>
      <div className="lg:w-[50%] lg:mt-0 mt-5 text-left">
        <h2 className="text-4xl">
          <b>Community</b>, it's what <br /> we are all about.
        </h2>
        <p className="text-sm my-2">
          We are looking for member who are willing to work together.
        </p>
        <p className="text-sm">
          However, the best reason of all is the opportunity to connect with
          other riders. With over 4.5k members in our club, you are sure to find
          a group. Each ride indicates the expected pace and distance of the
          ride. Set in stunning tourist destinations, within two hours’ drive of
          our major metropolitan cities, the Cycling Classics are the ultimate
          Gran Fondo experience.
        </p>

        <div className="mt-4">
            <p className="font-bold text-lg">Mountain Bike</p>
          <progress
            className="progress progress-warning lg:w-[560px]"
            value="60"
            max="100"
          ></progress>
          <br />
          <p className="font-bold text-lg">City Bike</p>
          <progress
            className="progress progress-warning lg:w-[560px]"
            value="80"
            max="100"
          ></progress>
          <br />
          <p className="font-bold text-lg">Championship</p>
          <progress
            className="progress progress-warning lg:w-[560px]"
            value="70"
            max="100"
          ></progress>
          <br />
          <p className="font-bold text-lg">Gathering</p>
          <progress
            className="progress progress-warning lg:w-[560px]"
            value="100"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Community;
=======
import React from "react";
import video from "../../../assets/vedio.mp4";
const Community = () => {
  return (
    <div className="lg:flex justify-between m-5 mt-20">
      <div className="lg:mt-22 mt-14">
        <video src={video} controls className="lg:w-[560px]" />
      </div>
      <div className="lg:w-[50%] lg:mt-0 mt-5 text-left">
        <h2 className="text-4xl">
          <b>Community</b>, it's what <br /> we are all about.
        </h2>
        <p className="text-sm my-2">
          We are looking for member who are willing to work together.
        </p>
        <p className="text-sm">
          However, the best reason of all is the opportunity to connect with
          other riders. With over 4.5k members in our club, you are sure to find
          a group. Each ride indicates the expected pace and distance of the
          ride. Set in stunning tourist destinations, within two hours’ drive of
          our major metropolitan cities, the Cycling Classics are the ultimate
          Gran Fondo experience.
        </p>

        <div className="mt-4">
            <p className="font-bold text-lg">Mountain Bike</p>
          <progress
            className="progress progress-warning lg:w-[560px]"
            value="60"
            max="100"
          ></progress>
          <br />
          <p className="font-bold text-lg">City Bike</p>
          <progress
            className="progress progress-warning lg:w-[560px]"
            value="40"
            max="100"
          ></progress>
          <br />
          <p className="font-bold text-lg">Championship</p>
          <progress
            className="progress progress-warning lg:w-[560px]"
            value="70"
            max="100"
          ></progress>
          <br />
          <p className="font-bold text-lg">Gathering</p>
          <progress
            className="progress progress-warning lg:w-[560px]"
            value="100"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Community;
>>>>>>> 6d2a2ddcf10cf48201a02a1d4e1789f924c86fec
