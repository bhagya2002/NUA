import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "./Newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="container newsletter-container">
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
                NUA Monthly Newsletter
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                The NUA distributes the monthly newsletter to all undergraduate
                nursing students via your UAlberta email. See below for our
                spring newsletter.
                <br />
                <br />
                Want something featured in the newsletter so you can reach out
                to your fellow classmates? Contact us and we'll make sure to get
                you/your student group/organization/etc. information in the next
                upcoming newsletter.
                <br />
                <br />
              </p>
              <div class="row">
                <div class="column">
                  <div class="sub-main">
                    <button to="/" class="news-button">
                      <span>September Newsletter</span>
                    </button>
                  </div>
                </div>
                <div class="column">
                  <div class="sub-main">
                    <button to="/" class="news-button">
                      <span>Octobe Newsletter</span>
                    </button>
                  </div>
                </div>
                <div class="column">
                  <div class="sub-main">
                    <button to="/" class="news-button">
                      <span>November Newsletter</span>
                    </button>
                  </div>
                </div>
                <div class="column">
                  <div class="sub-main">
                    <button to="/" class="news-button">
                      <span>December Newsletter</span>
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="column">
                  <div class="sub-main">
                    <button to="/" class="news-button">
                      <span>January Newsletter</span>
                    </button>
                  </div>
                </div>
                <div class="column">
                  <div class="sub-main">
                    <button to="/" class="news-button">
                      <span>February Newsletter</span>
                    </button>
                  </div>
                </div>
                <div class="column">
                  <div class="sub-main">
                    <button to="/" class="news-button">
                      <span>March Newsletter</span>
                    </button>
                  </div>
                </div>
                <div class="column">
                  <div class="sub-main"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
