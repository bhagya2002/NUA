import React from "react";
import "./Council.css";

function Council() {
  return (
    <>
      <div className="container council-container">
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
                Student Advisory Council
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                The Student Advisory Council, or SAC, is a council comprised of
                both students and faculty where major student concerns and ideas
                on how to improve the curriculum are discussed. Members of the
                SAC include a student representative from each year and stream
                of the program, as well as the Course Leads from each department
                and the Director of Undergraduate Programs.
                <br />
                <br />
                The SAC uses an appreciative inquiry model to approach program
                issues, providing possible solutions to each concern which are
                discussed at length with the appropriate faculty members at
                least once per semester. If any undergraduate student has a
                concern or suggestion about the program, they should inform
                their cohort's representative who will direct the student in the
                appropriate direction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Council;
