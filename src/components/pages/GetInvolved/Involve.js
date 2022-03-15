import React from "react";
import "./Involve.css";

function Involve() {
  return (
    <>
      <div className="container involve-container">
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
                Get Involved
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
              </p>
              <br />
              <br />
              <div class="row">
                <div class="column">
                  <article class="card card__content">
                    <figure class="header"></figure>
                    <main class="card__body">
                      <h1 class="title--primary">Volunteering</h1>
                      <p class="description">
                        Help make Faculty of Nursing events possible!
                      </p>
                    </main>
                    <footer class="footer"></footer>
                  </article>
                </div>
                <div class="column">
                  <article class="card card__content">
                    <figure class="header"></figure>
                    <main class="card__body">
                      <h1 class="title--primary">Meetings</h1>
                      <p class="description">
                        Stay up to date with what's discussed at NUA meetings!
                      </p>
                    </main>
                    <footer class="footer"></footer>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Involve;
