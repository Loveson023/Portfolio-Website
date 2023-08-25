import React from "react";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Portfolio from "../components/Home/Portfolio";
import Portfolio1 from "../components/Home/Portfolio1";
import Testimional from "../components/Home/Testimional";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";
export default function Home() {
  return (
    <>
      <div className=""></div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <br />
      <Portfolio1 />
      <Testimional />
      <Contact />
      <Footer />
    </>
  );
}
