import React from "react";
// import Navbar from "../../components/Home/Navbar";

const Portfolio1 = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="text-center">
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
    </>

  );
};

export default Portfolio1;
