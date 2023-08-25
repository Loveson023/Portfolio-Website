import React from "react";

// import Typed from "typed.js"
// import IMAGES from "../../../public/images";
// import Typewriter from 'typewriter-effect'
// var typewriter = new Typewriter('.auto-type', {
//   strings: ['Hello', 'World'],
//   loop: true,
//   delay: 75,
// });
// var typed = new Typed('.auto-type',{
//   strings : ['React.JS Developer' ,'WordPress Developer' ,'Graphics Designer'],
//   typeSpeed : 50,
//   backSpeed : 50,
//   loop    : true
// })
// Create reference to store the DOM element containing the animation
const Hero = () => {
  return (
    <div className="container mt-3" id="Home">
      <div
        className="card mb-3 bg-dark"
        style={{ backgroundColor: "rgba(45,45,45,45)" }}
      >
        <div className="row g-0 align-items-center">
          <div className="col-md-8 ">
            <div className="card-body text-white" style={{}}>
              <h3>Hey,</h3>
              <h3>Iam LOVE RATHORE</h3>
              <div className="animated-text">
                I'm a &nbsp; <br />
                <span></span>
              </div>
              <div className="mt-5">
                <a
                  className="btn btn-success"
                  href="../../images/resume.pdf"
                  role="button"
                  download
                >
                  Download CV
                </a>
                <a href="https://www.linkedin.com/in/lovesonmahesani/">
                  <button
                    className="btn btn-success"
                    style={{ marginLeft: "12px" }}
                  >
                    Hire Me
                  </button>
                </a>
              </div>
              <div
                style={{
                  marginLeft: "13px",
                  marginTop: "9px",
                  cursor: "pointer",
                }}
              >
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook mx-3"></i>
                <i className="fa-brands fa-github "></i>
                <i className="fa-brands fa-linkedin mx-3"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="../../images/profile.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
  // typed.destroy();
};

export default Hero;
