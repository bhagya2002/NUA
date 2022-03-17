import React from "react";
import "./Partnership.css";

function Partnership() {
  return (
    <>
      <div className="container partnership-container">
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
                Partnerships
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
                      <h1 class="title--primary">Merchadise</h1>
                      <p class="description">
                        Get some of your favorite merchadise from our store.
                      </p>
                    </main>
                    <footer class="footer"></footer>
                  </article>
                </div>
                <div class="column-left">
                  <article class="card card__content">
                    <figure class="header"></figure>
                    <main class="card__body">
                      <h1 class="title--primary">Grad Photos</h1>
                      <p class="description">
                        Did you just graduate?? Get your pictures taken right
                        here!
                      </p>
                    </main>
                    <footer class="footer"></footer>
                  </article>
                </div>
                <div class="column-right">
                  <article class="card card__content">
                    <figure class="header"></figure>
                    <main class="card__body">
                      <h1 class="title--primary">Textbooks</h1>
                      <p class="description">
                        Do you need help finding a textbook? Look no further!
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

export default Partnership;
