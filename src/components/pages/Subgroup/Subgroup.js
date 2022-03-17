import React from "react";
import "./Subgroup.css";

function Subgroup() {
  return (
    <>
      <div className="container subgroup-container">
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
                Subgroups
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                Replace this text for production. Keep it here as a placeholder
                for now. This needs to be this long to avoid any errors, not
                sure why yet.
              </p>

              <br />
              <div class="container">
                <div class="column-center">
                  <article class="card card__content">
                    <figure class="header"></figure>
                    <main class="card__body">
                      <h1 class="title--primary">FCNS</h1>
                      <p class="description">
                        Add some description here for the production level app.
                      </p>
                    </main>
                    <footer class="footer"></footer>
                  </article>
                </div>
                <div class="column-left">
                  <article class="card card__content">
                    <figure class="header"></figure>
                    <main class="card__body">
                      <h1 class="title--primary">BSCN</h1>
                      <p class="description">
                        Add some description here for the production level app.
                      </p>
                    </main>
                    <footer class="footer"></footer>
                  </article>
                </div>
                <div class="column-right">
                  <article class="card card__content">
                    <figure class="header"></figure>
                    <main class="card__body">
                      <h1 class="title--primary">Resources</h1>
                      <p class="description">
                        Add some description here for the production level app.
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

export default Subgroup;
