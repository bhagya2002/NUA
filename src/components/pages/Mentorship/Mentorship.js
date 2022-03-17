import React from "react";
import "./Mentorship.css";

function Mentorship() {
  return (
    <>
      <div className="container mentor-container">
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
                Mentorship Program
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                <strong>
                  Peer Mentorship Night took place October 10th, 2018
                </strong>
                <br />
                The peer mentorship program is put on by the NUA and matches
                first and second year nursing students with a mentor in their
                third or fourth year. This benefits students in the first two
                years by giving them a supportive person to talk to who has
                already gone through the stresses of nursing school, and
                benefits the older students by giving them someone to pass their
                wisdom on to and to develop leadership skills.
                <br />
                <br />
                If you missed the peer mentorship matching night but would like
                to be involved with the peer mentorship program, please contact
                us at nua@ualberta.ca and our VP Academic will inform you of
                future events or online partnering options.
                <br />
                <br />
                <br />
                <strong>Dear Mentors,</strong> <br />
                Being a mentor is a volunteering experience that you can put on
                your resume! It shows leadership, coaching skills, that you are
                a role model, and that you are also an active, involved member
                of the Nursing Faculty.
                <br />
                <br />
                We need all sorts of mentors - not just necessarily academic.
                Have you had jobs in nursing? Are you an Honors Student? Do you
                know how to balance life and school? Please sign up - everyone
                can help our lovely mentees!
                <br />
                <br />
                It is a way of leaving a legacy. As a mentor, you get to pass
                down your wisdom to the next generation of nursing students. You
                are in a position to make a great difference in another
                student’s life and may even influence their nursing careers to
                come!
                <br />
                <br />
                <br />
                <strong>Dear Mentee,</strong> <br />
                You are never alone during your quest to become a nurse! Need
                support and missed out on the offical mentorship event? Email
                nua@ualberta.ca and we'll try to connect you with a mentor :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentorship;
