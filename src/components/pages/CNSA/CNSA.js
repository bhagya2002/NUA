import React from "react";
import "./CNSA.css";

function CNSA() {
  return (
    <>
      <div className="container CNSA-container">
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
                Canadian Nursing Students' Association
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                <strong>What is the CNSA?</strong> <br />
                The CNSA is the national voice of Canadian nursing students
                which represents nursing students on local, provincial, federal
                and international levels.
                <br />
                <br />
                The goals of the CNSA is to provide different resources to
                Canadian nursing students:
                <ol className="list-padding">
                  <li>They provide leadership opportunities</li>
                  <li>
                    They increase awareness of political issues, and ethical
                    issues to students
                  </li>
                  <li>They strengthen partnerships</li>
                </ol>
                <br />
                <strong>Regions of the CNSA:</strong> <br />
                some pictures here later
                <br />
                <br />
                <br />
                <strong>CNSA Committees:</strong>
                <br />
                CNSA committees are made up of committee directors and members.
                Any member of the CNSA (which includes all U of A nursing
                students) can be a part of a committee. If you would like to be
                more involved with the CNSA, consider joining one of the
                following committees!
                <br />
                <ol className="list-padding">
                  <li>
                    <strong>Community and public health committee</strong>
                    <br />
                    <ul className="list-padding">
                      <li>
                        This committee's mission is to advocate for health
                        protection, promotion and prevention in the public
                        sector and communities. The past committee has conducted
                        research topics to share academically sound information
                        with members. Some of the topics include harm reduction,
                        health promotion, and injury prevention.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Diversity committee</strong>
                    <br />
                    <ul className="list-padding">
                      <li>
                        This committee aims at educating and advocating for
                        peoples belonging to marginalized populations.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Global health committee</strong>
                    <br />
                    <ul className="list-padding">
                      <li>
                        This committee provides resources and support for
                        nursing students who wish to pursue or are interested in
                        global health aspects and advocacy.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Indigenous health advocacy committee</strong>
                    <br />
                    <ul className="list-padding">
                      <li>
                        The committee provide resources and support for students
                        interested in knowing more about indigenous people’s
                        health care.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Research and education committee</strong>
                    <br />
                    <ul className="list-padding">
                      <li>
                        The committee focuses on supporting nursing students in
                        getting involved into research. They showcase scholarly
                        research work, and host national conference. They are
                        the main resource for research opportunities and
                        findings.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Bilingualism and Translation committee</strong>
                    <br />
                    <ul className="list-padding">
                      <li>
                        The committee ensures that bilingual or francophone
                        nursing students receive the support and resources from
                        CNSA to succeed in their academic progress.
                      </li>
                    </ul>
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CNSA;
