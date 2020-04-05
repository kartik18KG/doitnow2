import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/home.css";

class Home extends Component {
  render() {
    console.log(this.props.user);

    return (
      <div className="home-container">
        <section className="floatingHero">
          <div className="floatingHero-container">
            <img
              src="https://luna1.co/57d9b6.png"
              alt=""
              className="floatingHero-image -two -floatingDelay"
            />
            <img
              src="https://luna1.co/2070ee.png"
              alt=""
              className="floatingHero-image -three -floating"
            />
            <img
              src="https://luna1.co/fda860.png"
              alt=""
              className="floatingHero-image -four -floatingDelay"
            />

            <header className="floatingHero-header">
              <p className="floatingHero-label">This is...</p>

              <h1 className="floatingHero-headline ">DO IT NOW</h1>

              <p className="floatingHero-description">
                DoItNow is a free to use platform , that saves you from the
                hassle of finding resources to learn from ...
              </p>

              <NavLink to="/learn">
                <div className="video-play -coral -small -pulse"></div>
              </NavLink>
            </header>
          </div>
        </section>
        <section className="hero">
          <div className="hero-box-container">
            <NavLink to="/about" className="hero-box">
              <span className="hero-box__circle hero-box__circle--blue"></span>
              <h2 className="hero-box__title">What is DoItNow?</h2>
              <p className="hero-box__body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                omnis animi laboriosam eius quod laborum culpa at excepturi
                veniam labore reiciendis, aperiam accusamus nam! Et pariatur
                sapiente accusantium quisquam nihil?
              </p>
            </NavLink>
            <NavLink to="/about/#aboutus" className="hero-box">
              <span className="hero-box__circle hero-box__circle--green"></span>
              <h2 className="hero-box__title">Who are We ?</h2>
              <p className="hero-box__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                optio voluptatibus natus. Quasi eos adipisci non. Minus soluta
                sed natus dolore, esse quasi, necessitatibus at, molestias
                pariatur voluptatum hic voluptates!
              </p>
            </NavLink>
            <NavLink to="/learn" className="hero-box">
              <span className="hero-box__circle hero-box__circle--orange"></span>
              <h2 className="hero-box__title">Start Learning ..</h2>
              <p className="hero-box__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quaerat fuga beatae repellendus magni reiciendis praesentium
                itaque aspernatur necessitatibus! Iusto qui exercitationem
                accusamus voluptatem ratione possimus odio obcaecati! At,
                quidem.
              </p>
            </NavLink>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

// <div className="section full-height">
//   <div className="absolute-center">
//     <div className="section">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <h1>
//               <span>T</span>
//               <span>H</span>
//               <span>I</span>
//               <span>S</span>
//               <br />
//               <span>Is</span>
//               <br />
//               <span>Do</span>
//               <span>It</span>
//               <span>Now</span>
//             </h1>
//             <br />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
