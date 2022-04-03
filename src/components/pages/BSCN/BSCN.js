import React from "react";
import "./BSCN.css";

function BSCN() {
  return (
    <>
      <div className="container BSCN-container">
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
                Building Skills in Communication for Nurses (BSCN)
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                We are a group of nursing students trying to promote better
                communication among all nursing students. We are here to support
                all nursing students who wish to practice their communication by
                offering one-on-one mentoring, group simulations and group
                activities. BSCN was created to try to break communication
                barriers that nursing students experience, and therefore
                facilitate a smooth transition into the nursing profession.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BSCN;
