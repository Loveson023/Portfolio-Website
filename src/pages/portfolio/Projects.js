import React from "react";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Home/Footer";

const Portfolio = () => {
  return (
    <>
    <Navbar/>
    <div
      className="text-center text-white"
    //   style={{ marginTop: "200px" }}
      id="Portfolio"
    >
      <p>RECENT WORK</p>
      <h1>
        <strong>Potfolio</strong>
      </h1>
      <div className="container" style={{ marginTop: "23px" }}>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card border-primary">
              <div
                className="card-body text-white bg-dark "
                style={{ background: "dark" }}
              >
                <img
                  className="img-thumbnail"
                  src="../../images/portfolio1.jpg"
                  alt="..."
                />
                <h5 className="card-title">React Projects</h5>
                {/* <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p> */}
                <a href="https://mahesani.com/posh/" className="btn btn-success">
                  Live Demo
                </a>
                <a href="https://www.linkedin.com/in/lovesonmahesani/" className="btn btn-success mx-3">
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div
                className="card-body text-white bg-dark"
                style={{ background: "darkslategray" }}
              >
                <img
                  src="../../images/portfolio2.jpg"
                  className="img-thumbnail"
                  alt="..."
                />

                <h5 className="card-title">WordPress Development</h5>
                {/* <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p> */}
                <a href="https://tilalalghaf-specialist.ae/elan-phase-one/" className="btn btn-success">
                  Live Demo
                </a>
                <a href="https://www.linkedin.com/in/lovesonmahesani/" className="btn btn-success mx-3">
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-5 mb-3">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div
                className="card-body text-white bg-dark"
                style={{ background: "darkslategray" }}
              >
                <img
                  src="../../images/portfolio3.jpg"
                  className="img-thumbnail"
                  alt="..."
                />
                <h5 className="card-title">Graphics Designing</h5>
                {/* <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p> */}
                <a href="https://loverathore.linkst.ar/" className="btn btn-success">
                  Live Demo
                </a>
                <a href="https://www.linkedin.com/in/lovesonmahesani/" className="btn btn-success mx-3">
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div
                className="card-body text-white bg-dark"
                style={{ background: "darkslategray" }}
              >
                <img
                  src="../../images/portfolio4.jpg"
                  className="img-thumbnail"
                  alt="..."
                />

                <h5 className="card-title">UI/UX Design</h5>
                {/* <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p> */}
                <a href="https://loverathore.linkst.ar/" className="btn btn-success">
                  Live Demo
                </a>
                <a href="https://www.linkedin.com/in/lovesonmahesani/" className="btn btn-success mx-3">
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Portfolio;
