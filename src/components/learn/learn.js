import React from "react";
import Card from "./learningCards/Card";
import AddCard from "./learningCards/AddCard";
import { connect } from "react-redux";
import { compose } from "redux";

import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import Footer from "../layout/Footer";

const Learn = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div>
      <div className="container learn-container">
        <div className="flex">
          <Card learningCards={props.LearnCards} />
        </div>
        <hr />
        <div className="clear-flex"></div>
        <div className="m-3">
          <AddCard />
        </div>
        <hr />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    LearnCards: state.firestore.ordered.Specialities,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Specialities" }])
)(Learn);
