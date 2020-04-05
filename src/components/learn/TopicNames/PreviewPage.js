import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import DisplayTopicNames from "./DisplayTopicNames";
import { Redirect } from "react-router-dom";
import $ from "jquery";
import "./css/Preview-page.css";
import { Accordion, Row, Col } from "react-bootstrap";
import Footer from "../../layout/Footer";

const { v4: uuidv4 } = require("uuid");

class PreviewPage extends React.Component {
  state = {
    selected: false,
    loaded: true,
  };

  componentDidMount() {
    $(".arrow-down").on("click", function () {
      // console.log("jgh");

      $(this).toggleClass("down");

      $(".topics-overview").toggleClass("highlight");
    });
  }

  render() {
    const {
      requiredSpeciality,
      TopicNames,
      Specialities,
      auth,
      Articles,
    } = this.props;

    const displayArticle = (article) => {
      // console.log(article.id);

      this.setState({
        SelectedArticle: article,
        selected: true,
      });
      // console.log(this.state);
    };

    console.log(this.props);

    const { SelectedArticle } = this.state;

    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div>
        {this.state.loaded ? (
          <div>
            <div className="speciality-container">
              <br />
              <Row>
                <Col className="topic-ovr-container" lg={4}>
                  <Accordion defaultActiveKey="0">
                    <div className="topics-overview">
                      <Accordion.Toggle
                        className="float-right speciality-dropdown arrow-down"
                        eventKey="0"
                      >
                        &nbsp;
                        <i className="fas list-down  fa-chevron-circle-down"></i>
                      </Accordion.Toggle>

                      <h2>
                        <b>{requiredSpeciality}</b>
                      </h2>
                      <h3 className="overview">Topics Overview</h3>
                    </div>
                    <br />

                    <Accordion.Collapse eventKey="0">
                      <div id="specialities" className="">
                        <div id="" className="Topic-names ">
                          {Specialities &&
                            Specialities.map((item) => {
                              if (item.Name === requiredSpeciality) {
                                return (
                                  <div key={item.id}>
                                    <br />
                                    <DisplayTopicNames
                                      SpecialityId={item.id}
                                      TopicNames={TopicNames}
                                      SpecialityName={requiredSpeciality}
                                      Articles={Articles}
                                      displayArticle={displayArticle}
                                    />
                                    <br />
                                  </div>
                                );
                              }
                            })}
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </Accordion>
                </Col>

                <div className="col-12 article-container col-lg-8">
                  <div id="" className="card-container ">
                    {this.state.selected ? (
                      <div className="card">
                        <a>
                          <div className="">
                            {TopicNames &&
                              SelectedArticle &&
                              TopicNames.map((item) => {
                                if (item.id === SelectedArticle.TopicId) {
                                  return (
                                    <div key={uuidv4()}>
                                      <h1 className="material-icons card-header">
                                        {SelectedArticle.ArticleName}
                                        <br />
                                        <div>
                                          <h3 className="float-right">
                                            {item.Name}
                                          </h3>
                                        </div>
                                      </h1>

                                      <hr />

                                      <div
                                        className="card-no-body"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            SelectedArticle.ArticleContent,
                                        }}
                                      ></div>
                                    </div>
                                  );
                                }
                              })}
                          </div>
                        </a>

                        <div className="">
                          <Link
                            to={
                              "/" +
                              this.state.SelectedArticle.SpecialityId +
                              "/" +
                              this.state.SelectedArticle.TopicId +
                              "/" +
                              this.state.SelectedArticle.id
                            }
                          >
                            <h2 className="link">Read More.....</h2>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="card">
                        <div className="">
                          <div>
                            <h1 className="material-icons card-header">
                              Read This before You start
                            </h1>

                            <br />
                            <hr />
                            <span className="">
                              <div className="card-no-body">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. At, consectetur tempore
                                corrupti maxime fugiat porro vitae aliquid
                                asperiores officiis repellendus hic eos
                                temporibus distinctio praesentium, eveniet eius
                                molestiae eaque quibusdam quaerat! Voluptatibus
                                eveniet dicta dignissimos ad. Consequuntur,
                                maxime, veniam sit nesciunt expedita reiciendis
                                tempore minima accusamus nostrum minus sapiente
                                facere. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ratione ipsam id adipisci ut
                                autem. Nihil maiores a inventore. Odio, et.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quos, libero ducimus? Quaerat
                                earum ab qui consequatur rerum ratione suscipit
                                eum. Aspernatur obcaecati et ullam at. Tempora
                                ea nobis nostrum inventore officia veniam
                                voluptatum numquam quod ad, laudantium
                                recusandae ex quos? Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Mollitia natus
                                accusamus eius laborum, incidunt numquam
                                nostrum, ut culpa iure fugiat ab eligendi
                                voluptate libero sed dolor officia atque enim
                                quas nulla voluptatibus quibusdam, qui sit
                                ipsum. Dolore similique atque vel id, facere
                                labore eos, obcaecati rem eius sint natus
                                eveniet.
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Row>
            </div>
            <Footer />
          </div>
        ) : (
          <div>loading</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { specialityName } = ownProps.match.params;
  return {
    requiredSpeciality: specialityName,
    TopicNames: state.firestore.ordered.TopicNames,
    Specialities: state.firestore.ordered.Specialities,
    auth: state.firebase.auth,
    Articles: state.firestore.ordered.Articles,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "TopicNames" },
    { collection: "Specialities" },
    { collection: "Articles" },
  ])
)(PreviewPage);

//
