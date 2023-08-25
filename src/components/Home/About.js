import React from "react";
// import Navbar from "../components/Home/Navbar";

const About = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="text-center text-white" id="About">
      <p>WHO I AM?</p>
      <h1>
        <strong>About Me</strong>
      </h1>
      <p className="mt-3">
        As a WordPress developer, my expertise lies in building and customizing{" "}
        <br />
        WordPress websites and plugins to meet the specific needs of clients.{" "}
        <br />
        I am proficient in programming languages such as PHP, HTML, CSS, and{" "}
        <br />
        JavaScript, and have a strong understanding of WordPress core <br />
        functionalities and APIs.
      </p>
      <a href="https://www.linkedin.com/in/lovesonmahesani/">
      <button className="btn btn-success">More</button>
      </a>
    </div>
    </>

  );
};

export default About;
