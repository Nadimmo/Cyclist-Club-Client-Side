import React from "react";
import Banner from "./Banner/Banner";
import Professional from "./Professional/Proffessional";
import Community from "./Community/Community";
import Moment from "./Moment/Moment";
import Members from "./Members/Members";
import Goals from "./Goals/Goals";
import NewInfo from "./NewsInfo/NewInfo";
import Join from "./Join/Join";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Professional></Professional>
      <Goals></Goals>
      <Community></Community>
      <Moment></Moment>
      <Members></Members>
      <NewInfo></NewInfo>
      <Join></Join>
    </div>
  );
};

export default Home;
