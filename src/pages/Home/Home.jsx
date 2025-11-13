import React from "react";
import LatestReview from "../../components/LatestReview/LatestReview";
import HeroSection from "../../components/HeroSection/HeroSection";
import Reels from "../../components/Reels/Reels";
import TrendingDishes from "../../components/TrendingDishes/TrendingDishes";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div>
       <h1 className=" lg:text-5xl text-3xl font-bold text-center lg:my-10 my-4"> Popular<span className="text-primary"> Review Reels</span> </h1>
        <Reels></Reels>
      </div>
      <LatestReview></LatestReview>
      <TrendingDishes></TrendingDishes>
    </div>
  );
};

export default Home;
