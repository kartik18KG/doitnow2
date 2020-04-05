import React from "react";
import "./css/aboutUs.css";
import { Row, Col } from "react-bootstrap";
import $ from "jquery";

const AboutUs = () => {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (window.scrollY > 1550) {
      $(".profile-card").addClass("profile-card-anim");
    }
  }
  return (
    <div className="about-us-container">
      <div>
        <div className="about-us-heading">
          <h2>
            About <span>Us</span>
          </h2>
        </div>
        <div className="about-us-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
          dolore odit, neque itaque iure quas mollitia nihil cumque rem harum
          consequuntur consectetur. Autem fugit, doloribus sint enim error sequi
          quo rem minima magni excepturi expedita mollitia recusandae harum
          alias repellendus, sit voluptate facilis similique at in asperiores
          sunt inam saepe qui. Nisi minima ipsa illo tempore quod enim eum
          quidem?
        </div>
      </div>
      <div className="profile-cards">
        <Row>
          <Col lg={6}>
            <aside className="profile-card ">
              <header>
                <img src="" alt="" />
                <h1>Priya</h1>
                <h2>Hello!</h2>
              </header>
              <div className="profile-bio">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  earum, nisi porro aliquam deserunt hic culpa cupiditate
                  blanditiis natus maiores und
                </p>
                <ul className="social-icons list-unstyled list-inline">
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </Col>

          <Col lg={6}>
            <aside className="profile-card">
              <header>
                <img src="" alt="" />
                <h1>Kartik</h1>
                <h2>Hello!</h2>
              </header>
              <div className="profile-bio">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  earum, nisi porro aliquam deserunt hic culpa cupiditate
                  blanditiis natus maiores und
                </p>
                <ul className="social-icons list-unstyled list-inline">
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
