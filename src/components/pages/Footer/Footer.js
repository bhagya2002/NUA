import React from "react";
import "./Footer.css";
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
            <Link to="/about-us">
              <h2>About Us</h2>
            </Link>
            <Link to="/council-member">Council Members</Link>
            <Link to="/newsletter">Newsletter</Link>
            <Link to="/">Office Hours</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/faq">FAQs</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/get-involved">
              <h2>Get Involved</h2>
            </Link>
            <Link to="/">Calendar</Link>
            <Link to="/">Meeting Minutes</Link>
            <Link to="/volunteer">Volunteering</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/council">
              <h2>Council</h2>
            </Link>
            <Link to="/">Meet the Team</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/">Mentorship</Link>
            <Link to="/">Partnerships</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/subgroups">
              <h2>Subgroups</h2>
            </Link>
            <Link to="/fcns">FCNS</Link>
            <Link to="/bscn">BSCN</Link>
            <Link to="/resources">Resources</Link>
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
            <a
              className="social-icon-link"
              href="https://www.facebook.com/nua.ualberta/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className="social-icon-link"
              href="https://www.instagram.com/nua_ualberta/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className="social-icon-link"
              href="https://twitter.com/nua_ualberta"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
