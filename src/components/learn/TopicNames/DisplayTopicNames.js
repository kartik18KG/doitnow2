import React from "react";
import $ from "jquery";
import AddTopicName from "./AddTopicName";
import DeleteButton from "../DeleteButton";
import UpdateTopicName from "./UpdateTopicName";
import AddArticle from "../articles/addArticle";
import UpdateArticle from "../articles/updateArticle";
import DeleteArticle from "../DeleteButton";
import "./css/Article-names.css";
import { Accordion, Button } from "react-bootstrap";

class DisplayTopicNames extends React.Component {
  render() {
    const { SpecialityId, TopicNames, Articles, displayArticle } = this.props;
    console.log(TopicNames);

    //We can't put space in any topic name
    return (
      <div className="">
        {TopicNames &&
          TopicNames.map(item => {
            if (SpecialityId === item.SpecialityId) {
              return (
                <div
                  className="p-0 speciality-topic-container m-1 "
                  key={item.id}
                >
                  <h4 className="float-left topicName">{item.Name}</h4>
                  <Accordion>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      className=" float-right  arrow-down"
                      eventKey={item.Name}
                    >
                      <i
                        type="button"
                        onClick={() => {
                          $(".article-dwn").toggleClass("rotate");
                        }}
                        className="fas article-dwn fa-chevron-circle-down"
                      ></i>
                    </Accordion.Toggle>

                    <div className="">
                      <div className="float-right">
                        <DeleteButton
                          collectionName="TopicNames"
                          DocId={item.id}
                          size="small"
                        />
                      </div>
                      <div className="clearflex"></div>
                      <div className="float-right">
                        <UpdateTopicName Topic={item} />
                      </div>
                      <div className="clearflex"></div>
                      <div className="float-right">
                        <AddArticle
                          SpecialityId={item.SpecialityId}
                          TopicId={item.id}
                        />
                      </div>
                    </div>
                    <br />
                    <hr />
                    <Accordion.Collapse eventKey={item.Name}>
                      <div>
                        <ol className="">
                          {Articles &&
                            Articles.map(article => {
                              if (item.id == article.TopicId) {
                                return (
                                  <div className="read-icon " key={article.id}>
                                    <br />
                                    <br />

                                    <div className="row">
                                      <div className=" read col-10">
                                        <div className="item">
                                          <a
                                            type="button"
                                            onClick={() => {
                                              displayArticle(article);
                                            }}
                                            className="display-article"
                                          >
                                            <li className="article-name m-0">
                                              {article.ArticleName}
                                            </li>
                                          </a>
                                          <a
                                            type="button"
                                            onClick={() => {
                                              displayArticle(article);
                                            }}
                                            className="fa-pull-right mr-4 pr-2"
                                          >
                                            <span className="">
                                              <i className=" pt-2 article-read fas fa-book-reader"></i>
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <div className=" col-2">
                                        <div className="update-delete float-right">
                                          <div>
                                            <DeleteArticle
                                              collectionName="Articles"
                                              DocId={article.id}
                                              size="small"
                                            />
                                          </div>
                                          <div>
                                            <UpdateArticle Article={article} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              } else {
                                return null;
                              }
                            })}
                        </ol>
                      </div>
                    </Accordion.Collapse>
                  </Accordion>

                  <br />
                </div>
              );
            }
          })}
        <AddTopicName SpecialityId={SpecialityId} />
      </div>
    );
  }
}

export default DisplayTopicNames;
