import React from "react";
import HeroSection from "../../HeroSection";
import "../../HeroSection.css";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import "./Home.css";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />

      <div className="container exp-container">
        <div
          className="row home__hero-row"
          style={{
            display: "flex",
          }}
        >
          <div>
            <div>
              <h1
                className={{ lightText: "heading dark" }}
                style={{ marginBottom: "25px", fontSize: "48px" }}
              >
                Experience
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                If you would like to share a picture of you and your friends on
                the NUA website to show what a FANTASTIC time you're having in
                Nursing, please email us (nua@ualberta.ca) your pictures and we
                will upload them on our site!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <HeroSection {...homeObjThree} /> */}
    </>
  );
}

export default Home;
