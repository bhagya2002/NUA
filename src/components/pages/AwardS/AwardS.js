import React from "react";
import "./AwardS.css";

function AwardS() {
  return (
    <>
      <div className="container award-container">
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
                Awards and Scholarships
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                The Nursing Undergraduate Association (NUA) is a student-run
                organization that consists of nursing students who are elected
                by their peers to volunteer their time and effort to represent
                the Faculty of Nursing's undergraduate students and ensure that
                they have the best experience possible.
                <br />
                <br />
                {/* Regarding Academics */}
                <br />
                <strong>Regarding Academics:</strong>
                <br /> Academic concerns and interests can be brought forward to
                your <strong>VP Academic</strong>,
                <strong> Brett Gleeson </strong>
                at
                <strong> gleeson1@ualberta.ca</strong>. Whether you would like
                to recognize a successful change to your program, are facing a
                student appeal, or just do not know where to find the form for
                that exam you missed, we will ensure that your inquiry is dealt
                with properly or provide you with the appropriate contact
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AwardS;
