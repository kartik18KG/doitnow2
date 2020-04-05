import React from "react";
import { connect } from "react-redux";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./navbar.css";
import $ from "jquery";
import { Accordion, Button, Col, Row } from "react-bootstrap";

class Navbar extends React.Component {
  componentDidMount() {
    $("#switch").on("click", () => {
      console.log("switched");
      if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("#switch").removeClass("switched");
      } else {
        $("body").addClass("dark");
        $("#switch").addClass("switched");
      }
    });
  }
  render() {
    const { auth } = this.props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
      <div className="navigation-wrap bg-light start-header start-style">
        <div className="container">
          <Row>
            <Col>
              <nav className="navbar navbar-expand-md navbar-light">
                <Link to="/">
                  <span className="navbar-brand logo  nav-link">DoItNow</span>
                </Link>
                <div id="switch" className="float-right">
                  <div id="circle"></div>
                </div>
                <div className="signed-links">{auth.isLoaded && links}</div>
                <Accordion className="dropdown-accordion">
                  <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    <a
                      className="navbar-toggler"
                      type="button"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </a>
                  </Accordion.Toggle>
                  <Accordion.Collapse
                    className=" "
                    id="navbarSupportedContent"
                    eventKey="5"
                  >
                    <div>{auth.isLoaded && links}</div>
                  </Accordion.Collapse>
                </Accordion>
              </nav>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);

// <Accordion>
//   <Accordion.Toggle
//     className="navbar-toggler"
// as={Button}
// variant="link"
// eventKey="5"
//   >
//     <span className="navbar-toggler-icon"></span>
//   </Accordion.Toggle>
//   <Accordion.Collapse
//     className=" "
//     id="navbarSupportedContent"
//     eventKey="5"
//   >
//     <div>{auth.isLoaded && links}</div>
//   </Accordion.Collapse>
// </Accordion>;

// <button
// className="navbar-toggler"
// type="button"
// data-toggle="collapse"
// data-target="#navbarSupportedContent"
// aria-controls="navbarSupportedContent"
// aria-expanded="false"
// aria-label="Toggle navigation"
// >
//   <span className="navbar-toggler-icon"></span>
// </button>
// <div
//   className="collapse navbar-collapse"
//   id="navbarSupportedContent"
// >
//   {auth.isLoaded && links}
// </div>
