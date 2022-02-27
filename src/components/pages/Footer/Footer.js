import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Council Members</Link>
            <Link to="/">Newsletter</Link>
            <Link to="/">Office Hourse</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">FAQs</Link>
          </div>
          <div className="footer-link-items">
            <h2>Get Involved</h2>
            <Link to="/">Calendar</Link>
            <Link to="/">Meeting Minutes</Link>
            <Link to="/">Volunteering</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Council</h2>
            <Link to="/">Meet the Team</Link>
            <Link to="/">Resources</Link>
            <Link to="/">Mentorship</Link>
            <Link to="/">Partnerships</Link>
          </div>
          <div className="footer-link-items">
            <h2>Subgroups</h2>
            <Link to="/">FCNS</Link>
            <Link to="/">BSCN</Link>
            <Link to="/">Resources</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img
                src="img/nua_logo.png"
                alt="logo"
                className="navbar-logo-img"
              />
              {/* <MdFingerprint className="navbar-icon" /> */}
              NUA
            </Link>
          </div>
          <small className="website-rights">NUA © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={"#"}
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
