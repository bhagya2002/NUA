import React from "react";
import "./Involve.css";

function Involve() {
  return (
    <>
      <div className="container about-container">
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
              <ul class="cards">
                <li>
                  <a href="" class="card">
                    <img
                      src="https://static.wixstatic.com/media/14a9c0_b7c33fb81dd0467195e0fa30102ae0e2~mv2.jpg/v1/fill/w_540,h_615,al_c,q_80/14a9c0_b7c33fb81dd0467195e0fa30102ae0e2~mv2.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        {/* <img
                          class="card__thumb"
                          src="https://i.imgur.com/7D7I6dI.png"
                          alt=""
                        /> */}
                        <div class="card__header-text">
                          <h3 class="card__title">Volunteer</h3>
                        </div>
                      </div>
                      <p class="card__description">
                        Help make Faculty of Nursing events possible!
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" class="card">
                    <img
                      src="https://static.wixstatic.com/media/14a9c0_eed97c211f754a0d8862710b65e6d777~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_920,h_1048,al_c,q_85,usm_0.66_1.00_0.01/14a9c0_eed97c211f754a0d8862710b65e6d777~mv2_d_3024_4032_s_4_2.jpg"
                      class="card__image"
                      alt=""
                    />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg
                          class="card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        {/* <img
                          class="card__thumb"
                          src="https://i.imgur.com/sjLMNDM.png"
                          alt=""
                        /> */}
                        <div class="card__header-text">
                          <h3 class="card__title">Meetings</h3>
                        </div>
                      </div>
                      <p class="card__description">
                        Stay up to date with what's discussed at NUA meetings!
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Involve;
