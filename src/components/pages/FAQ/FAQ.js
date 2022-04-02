import React from "react";
import "./FAQ.css";

function FAQ() {
  return (
    <>
      <div className="container faq-container">
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
                Frequently Asked Questions
              </h1>
              <p
                className={{
                  lightTextDesc: "home__hero-subtitle dark",
                }}
                style={{ fontSize: "18px" }}
              >
                Are you considering nursing as a profession, and wanting to come
                to the University of Alberta to complete your a Bachelor of
                Science Degree in Nursing? We have a few tips for you to help
                your application processa and make your transition into
                University easier!
                <br />
                <br />
                For more information and clarification, or if your question is
                not listed, please do not hesitate to contact us at
                <a href="mailto: nua@ualberta.ca"> nua@ualberta.ca</a>. We are
                happy to help you!
                <br />
                <br />
                <br />
                <strong>It's My First Day, What Can I Expect?</strong> <br />
                Through eClass, you will find a link to your first class. The
                Course Lead for that class will send out an announcement of
                where you need to be for your first class (this is when that
                tour comes in handy!) Make sure you check eClass often for
                updates from your instructors, and course materials you will
                need to bring to class. Nursing courses involve Context Based
                Learning (CBL), in which the students (in small groups) work
                together with scenarios to identify and research topics that
                will guide their nursing practice. This is often different from
                the type of instruction students are used to! More information
                about CBL and the teaching methods of the Faculty of Nursing can
                be found here. Make sure to attend your classes! Nursing courses
                work on a 6 week timeframe (e.g.- 6weeks of tutorial, and 6
                weeks of clinical = one semester), and therefore a lot of
                information is compressed into a limited number of classes. In
                addition, nursing courses often include mandatory attendence!
                Your instructors are there to guide your group through the
                course material, not to tell you what you need to know. If you
                have questions, ask! It's important to make sure you are on the
                right track! You will have to do research to find out
                information about varying topics. This information needs to be a
                "credible resource", meaning that the information comes from a
                source that is reputable. The most common source used is the
                textbooks that are a required resource for your course, as well
                as nursing journals that you can find on the nursing library
                site! A good rule of thumb for reputable sources is "If you have
                to ask, don't use it"!
                <br />
                <br />
                <strong>What About Extracurricular Activities?</strong> <br />
                The NUA always welcomes new volunteers to help us in planning
                events, holding office hours, and participating on different
                committees. Email us at
                <a href="mailto: nua@ualberta.ca"> nua@ualberta.ca</a> for more
                information, and watch out for emails and eClass updates on
                upcoming elections! In addition, the University of Alberta has
                plenty of opportunities for student involvement! There are over
                300 student groups to join (the largest in Canada), which
                provide plenty of opportunities to volunteer or meet new people!
                If there isn't one you want to join, you could always start your
                own! Check the Student Groups Website for more information on
                the groups available!
                <br />
                <br />
                <strong>
                  How can I opt-out of the Faculty Association Fee?
                </strong>
                <br />
                Faculty Association Membership Fee Opt-Out Forms are available
                for pick-up at the NUA office. The form must be signed by the
                NUA President, VP Finance and the inquiring student. The
                deadline for completion is October 1st of each academic year.
                <br />
                <br />
                <strong>What if I want more information?</strong>
                <br />
                If you want more information,{" "}
                <a
                  href="https://515aa62c-ff9e-4092-a247-e0fcaef4b2d1.filesusr.com/ugd/14a9c0_63195556b3b64f1dbde1153cb6c21c01.pdf"
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  click here
                </a>{" "}
                to download the Student Manual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
