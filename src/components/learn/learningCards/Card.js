import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import DeleteButton from "../DeleteButton";
import UpdateCard from "./UpdateCard";

import $ from "jquery";
import "./card2.css";

const { v4: uuidv4 } = require("uuid");
class Card extends React.Component {
  render() {
    const { learningCards, isAdmin } = this.props;
    console.log(isAdmin);
    return (
      <div className="learn-container">
        <div className="container pt-4">
          <div className="row">
            {learningCards &&
              learningCards.map((item) => {
                console.log(item);
                return (
                  <div key={uuidv4()} className="col-lg-6">
                    <div className="card">
                      <div className="imgBx">
                        <img className="image" src={item.imageUrl} />
                      </div>
                      <div className="contentBx">
                        <h2> {item.Name}</h2>
                        <div className="color">
                          {isAdmin === true ? (
                            <UpdateCard currentCard={item} />
                          ) : null}
                          {isAdmin === true ? (
                            <DeleteButton
                              collectionName="Specialities"
                              DocId={item.id}
                              size="small"
                            />
                          ) : null}
                        </div>
                        <NavLink to={"/learn/" + item.Name}>
                          <div className="button">
                            <span>Start Now</span>
                            <svg>
                              <polyline
                                className="o1"
                                points="0 0, 150 0, 150 55, 0 55, 0 0"
                              ></polyline>
                              <polyline
                                className="o2"
                                points="0 0, 150 0, 150 55, 0 55, 0 0"
                              ></polyline>
                            </svg>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.admin.isAdmin,
  };
};

export default connect(mapStateToProps)(Card);

// <div class="card">
//   <div class="imgBx">
//     <img
//       class="image"
//       src="https://insanelab.com/wp-content/uploads/2019/01/web-development-trends-2018-header-1.jpg"
//     />
//   </div>
//   <div class="contentBx">
//     <h2>Web Development</h2>
//     <div class="color">
//       <span>
//         <i className="fa fa-edit"></i>
//       </span>

//       <span>
//         <i className="fa fa-trash"></i>
//       </span>
//     </div>
//     <a id="startNow" href="#">
//       Start Now
//     </a>
//   </div>
// </div>;

{
  /* <div className="container pt-4">
        <div className="row">
          {learningCards &&
            learningCards.map(item => {
              console.log(item);
              return (
                <div className="col-lg-6">
                  <div class="card__collection clear-fix">
                    <div class="cards cards--two">
                      <img
                        src={item.imageUrl}
                        className="card-img-top"
                        alt=""
                      />
                      <span class="cards--two__rect"></span>
                      <span class="cards--two__tri"></span>
                      <h3>
                        <b className="speciality-name"> {item.Name}</b>
                      </h3>

                      <ul class="cards__list">
                        <li>
                          <NavLink
                            to={"/learn/" + item.Name}
                            className="start_now"
                          >
                            <h5 className="link2">Start Now!!</h5>
                          </NavLink>
                        </li>
                        {isAdmin === true ? (
                          <UpdateCard currentCard={item} />
                        ) : null}
                        {isAdmin === true ? (
                          <DeleteButton
                            collectionName="Specialities"
                            DocId={item.id}
                          />
                        ) : null}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div> */
}
