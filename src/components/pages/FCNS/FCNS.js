import React from "react";
import "./FCNS.css";

function FCNS() {
  return (
    <>
      <div className="container FCNS-container">
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
                Fellowship of Christian Nursing Students (FCNS)
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                As a club, we exist to connect nursing students with peers who
                share similar Christian values and beliefs.
                <br />
                <br />
                We do this through regular meet-ups on and off campus, where we
                get to know each other, encourage one another, and discuss
                topics regarding faith and nursing. Our hope is that through
                this group, our members grow together to form friendships and
                mentorships, as well as find ways to support one another in
                their studies.
                <br />
                <br />
                If you are interested or have any questions, please contact us,
                we would love to hear from you!
                <br />
                Email:{" "}
                <a href="mailto:  ualbertaFCNS@gmail.com">
                  {" "}
                  ualbertaFCNS@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FCNS;
