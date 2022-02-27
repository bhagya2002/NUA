import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  buttonShow,
  imageShow,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              //   image on left or right
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                {buttonShow ? (
                  <Link to="/sign-up">
                    <Button buttonSize="btn--wide" buttonColor="blue">
                      {buttonLabel}
                    </Button>
                  </Link>
                ) : null}
              </div>
            </div>
            {imageShow ? (
              <div className="col">
                <div className="home__hero-img-wrapper">
                  <img src={img} alt={alt} className="home__hero-img" />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
