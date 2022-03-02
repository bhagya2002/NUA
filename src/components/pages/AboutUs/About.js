import React from "react";
import "./About.css";

function About() {
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
                About Us
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
                The NUA provides academic advocacy, coordinates social events,
                addresses issues and concerns that affect nursing students, and
                connects students to the campus community, as well as the
                national body of nursing students through the Canadian Nursing
                Students' Association (CNSA).
                <br />
                <br />
                The NUA acts to fulfill the academic, social, and political
                needs of nursing students. We are the official voice and
                representation of nursing students on the University of Alberta
                campuses through the Students' Union, General Faculties Council,
                Faculty of Nursing, and the Council of Faculty Associations.
                {/* Role of the NUA */}
                <br />
                <br />
                <strong>Role of the NUA:</strong> <br />
                <ul>
                  <li>
                    Connect students with faculty members through informal and
                    formal venues and communications
                  </li>
                  <li>Organize social and sporting events</li>
                  <li>Represents students on various University committees</li>
                  <li>
                    Offers volunteer activities and opportunities including
                    local and international levels of involvement
                  </li>
                  <li>
                    Collects and addresses student concerns, and reports them
                    via the Student Advisory Council
                  </li>
                  <li>
                    Offers involvement in national level organizations,
                    including the Canadian Nursing Students' Association
                  </li>
                  <li>Supports students with online resources</li>
                  <li>
                    Liaisons with partnered organizations including Second
                    Chance CPR and grad photographers
                  </li>
                </ul>
                {/* Our Mission */}
                <br />
                <br />
                <strong>Our Mission:</strong> <br />
                To create social and academic opportunities through student
                involvement with the Faculty of Nursing and the University of
                Alberta. Our Vision:
                <ul>
                  <li>
                    To provide unity among all undergraduate students in the
                    Faculty of Nursing
                  </li>
                  <li>
                    To promote interest and participation on campus, in the
                    Faculty of Nursing, and in professional activities
                  </li>
                  <li>
                    To provide an official channel for student-faculty
                    communication
                  </li>
                </ul>
                {/* Regarding Academics */}
                <br />
                <strong>Regarding Academics:</strong>
                <br /> Academic concerns and interests can be brought forward to
                your <strong>VP Academic</strong>,
                <strong> Brett Gleeson </strong>
                at
                <strong> gleeson1@ualberta.ca</strong>. Whether you would like
                to recognize a successful change to your program, are facing a
                student appeal, or just do not know where to find the form for
                that exam you missed, we will ensure that your inquiry is dealt
                with properly or provide you with the appropriate contact
                information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <HeroSection {...homeObjThree} /> */}
    </>
  );
}

export default About;
