import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/home";
import About from "./components/aboutUs/about";
import Learn from "./components/learn/learn";
import SignUp from "./components/auth/SignUp";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import SignIn from "./components/auth/SignIn";
import selectedArticle from "./components/learn/articles/SelectedArticle";
import PreviewPage from "./components/learn/TopicNames/PreviewPage";
import Articles from "./components/learn/articles/articles";
import Dashboard from "./components/adminPanel/Dashboard";

import { compose } from "redux";
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded
} from "react-redux-firebase";

import { Provider, useSelector } from "react-redux";
import { connect } from "react-redux";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    const { auth } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/learn" component={Learn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={SignIn} />
            <Route
              exact
              path="/:specialityId/:topicId/:Id"
              component={selectedArticle}
            />
            <Route
              exact
              path="/learn/:specialityName"
              component={PreviewPage}
            />
            <Route
              exact
              path="/learn/:specialityName/:topicName"
              component={Articles}
            />
            <Route exact path="/adminpanel" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default compose(connect(mapStateToProps))(App);
