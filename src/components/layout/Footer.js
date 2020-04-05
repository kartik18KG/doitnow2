import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className="page-content"></div>
      <footer>
        <div className="footer-container">
          <div className="left-col">
            <span className="logo">DoItNow</span>
            <div className="social-media">
              <a href="#">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
            <p className="rights-text">
              &copy; 2020 DoItNow , All Rights Reserved
            </p>
          </div>
          <div className="right-col">
            <h1>Our Newsletter</h1>
            <div className="border"></div>
            <p>Enter Your Email here to subscribe for Newsletter</p>
            <form action="" className="newsletter-form">
              <input
                type="text"
                className="txtb"
                placeholder="Enter Your Email"
              />
              <input type="submit" value="submit" className="btn" />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
