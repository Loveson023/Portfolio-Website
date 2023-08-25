import React  from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import { useEffect } from "react";

const About = () => {
    
  return (
    <>
      <Navbar />
      <div className="container" style={{ height: "500px" }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-8 ">
            <div className="text-center text-white" id="About">
              <p>WHO I AM?</p>
              <h1>
                <strong>About Me</strong>
              </h1>
              <p className="mt-3">
                As a WordPress developer, my expertise lies in building and
                customizing <br />
                WordPress websites and plugins to meet the specific needs of
                clients. <br />I am proficient in programming languages such as
                PHP, HTML, CSS, and <br />
                JavaScript, and have a strong understanding of WordPress core{" "}
                <br />
                functionalities and APIs.
              </p>
              <a href="https://www.linkedin.com/in/lovesonmahesani/">
                <button className="btn btn-success">More</button>
              </a>
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
      <Footer />
    </>
  );
};

export default About;
