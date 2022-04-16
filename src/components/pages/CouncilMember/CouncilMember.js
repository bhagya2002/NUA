import React from "react";

import "./CouncilMember.css";

function CouncilMember() {
  return (
    <>
      <div className="container councilmember-container">
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
                Meet The Team
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CouncilMember;
