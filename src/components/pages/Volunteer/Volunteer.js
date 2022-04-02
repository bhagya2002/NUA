import React from "react";
import "./Volunteer.css";

function Volunteer() {
  return (
    <>
      <div className="container volunteer-container">
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
                Volunteer Opportunities
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                Interested in volunteering and giving back to the community?
                <br />
                <br />
                Why not consider starting your journey here with NUA? To sign
                up, contact our Vice President Student Life, Sean Knorr, at
                <a href="mailto: sknorr@ualberta.ca"> sknorr@ualberta.ca</a> to
                be added to the NUA's general volunteer contact list!
                <br />
                <br />
                You will receive news about all up and coming volunteer events
                (for example, helping out at fundraiser BBQs or putting on
                social events). You can volunteer as much as you like - we want
                to make sure your time giving back works with your schedule and
                lifestyle!
                <br />
                <br />
                If you know of or are organizing volunteer opportunities that
                you'd like us to share with the nursing student body, you can
                also contact Calum or email us at{" "}
                <a href="mailto: nua@ualberta.ca"> nua@ualberta.ca</a> and ask
                us to feature your event in an upcoming newsletter!
                <br />
                <br />
                <strong>
                  Thank you for considering volunteering with us and helping
                  those within our local community!
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Volunteer;
