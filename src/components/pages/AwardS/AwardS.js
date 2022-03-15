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
              </p>
              <div class="container">
                <div class="column-center">
                  <article class="card card__content">
                    <figure class="header"></figure>
                    <main class="card__body">
                      <h1 class="title--primary">Student Choice Awards</h1>
                      <p class="description">
                        Each year students get an opportunity to submit their
                        picks for outstanding clinical, lab, seminar and
                        foundational course instructors. For their dedication,
                        recipients receive the highly anticipated Student Choice
                        Awards.
                        <br />
                        Stay-tuned for communication each winter term!
                      </p>
                    </main>
                    <footer class="footer"></footer>
                  </article>
                </div>
                <div class="column-left">
                  <article class="card card__content">
                    <figure class="header"></figure>
                    <main class="card__body">
                      <h1 class="title--primary">
                        Rachael Longridge Memorial Scholarship
                      </h1>
                      <p class="description">
                        A scholarship created for students emulating Rachael's
                        passion and commitment to nursing as to foster and
                        reward committed, empathetic and motivated nursing
                        students to achieve their goals; and make a difference
                        just as Rachael did in many of her patient’s lives.
                      </p>
                    </main>
                    <footer class="footer"></footer>
                  </article>
                </div>
                <div class="column-right">
                  <article class="card card__content">
                    <figure class="header"></figure>
                    <main class="card__body">
                      <h1 class="title--primary">NUA Leadership Scholarship</h1>
                      <p class="description">
                        The NUA Leadership Scholarship is aimed towards nursing
                        students who are active and instrumental on campus and
                        in the greater Edmonton community regarding nursing and
                        leadership.
                      </p>
                    </main>
                    <footer class="footer"></footer>
                  </article>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AwardS;
