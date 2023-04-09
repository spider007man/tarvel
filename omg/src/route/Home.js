import React from "react";
import Navbar from "../Componet/Navbar";
import Hero from "../Componet/Hero";
import HomeImg from "../images/5.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="home"
        heroimg={HomeImg}
        title="Your journey Your story"
        texa="choose youer favourite place"
        btnclass="show"
        buttontexa="traval plan"
        url="/"
      />
    </>
  );
};

export default Home;
