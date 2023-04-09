import React from "react";
import "./Herostyle.css";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroimg} alt="mithun" />

        <div className="hero-texa">
          <h1>{props.title}</h1>
          <p>{props.texa}</p>
          <a href={props.url} className={props.btnclass}>
            {props.buttontexa}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
