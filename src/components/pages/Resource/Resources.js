import React from "react";
import "./Resources.css";

function Resources() {
  return (
    <>
      <div className="container resources-container">
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
                Resources
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                <strong>Meeting Minutes</strong>
                <br />
                SAC meeting minutes include course and instructor specific
                feedback. As such, meeting minutes are available in your eClass,
                securely located in the{" "}
                <strong>Undergraduate Student Resource Site</strong>. Check it
                out for the latest SAC topics and information.
                <br />
                <br />
                <strong>USRIs</strong>
                <br />
                Each term, the faculty needs feedback from the student body with
                anonymous surveys called USRIs. With your confidential feedback,
                the results help identify the impact of curriculum revisions and
                the need for adjustments. Furthermore, it allows administration
                to effectively evaluate teaching for feedback. These evaluations
                are also taken into consideration for instructor evaluations and
                promotions.
                <br />
                <br />
                <strong>Terms of Reference</strong>
                <br />
                The Student Advisory Council functions with an outlined purpose
                and a clear scope to guide its members. The Terms of Reference
                are reviewed annually to ensure it is up-to-date for students
                and faculty.
                <br />
                <a
                  href="https://515aa62c-ff9e-4092-a247-e0fcaef4b2d1.filesusr.com/ugd/14a9c0_970d39143ef147f4a0a33d460c7fcc62.pdf"
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  SAC Terms of Reference
                </a>{" "}
                <br />
                <br />
                <strong>Contact your SAC</strong>
                <br />
                Mark your question or comment with "attention SAC" and email
                <a href="mailto: nua@ualberta.ca"> nua@ualberta.ca</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
