import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from ".././Images/logo-02.png";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/my-portfolio" className="social-logo">
              Peter Hodgson
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <small className="website-rights">
            Created by Peter Hodgson 2020
          </small>
          <div className="social-icons">
            <div className="social-icon-link linkedin">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/peter-hodgson-beng-hons-541182a8/"
              >
                <i className="fab fa-linkedin" />{" "}
              </a>
            </div>
            <div className="social-icon-link twitter">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/PeterHo60669811"
              >
                <i className="fab fa-twitter" />{" "}
              </a>
            </div>
            <div className="social-icon-link github">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/PH86"
              >
                <i className="fab fa-github" />{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
