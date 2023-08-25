import React , {useState} from "react";
import Home from "./pages/Home";
import News from "./pages/about/News";
import Projects from "./pages/portfolio/Projects"
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/contact/ContactMe";
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default function App() {
const [progress, setProgress] = useState(0)

  return (
     <>
    {/* //  <LoadingBar
    //     color='red'
    //     height="5px"
    //     progress={progress}
    //     // onLoaderFinished={() => setProgress(0)}
    //   /> */}
      <Router>
     

    <div>
             <div className="" style={{ backgroundColor: "rgba(51,45,45)" }}>
    {/* <Switch> */}
    <Routes>
    <Route index element={<Home/>}></Route>
    <Route path="/api-fetch"element={<News />}></Route>
    <Route path="/home"element={<Home/>}></Route>
    <Route path="/projects"element={<Projects/>}></Route>
    <Route path="/about-me"element={<AboutMe/>}></Route>
    <Route path="/contact-me"element={<ContactMe/>}></Route>
      {/* <Route path="/about"element={<About/>}></Route>
      <Route path="/portfolio"element={<Portfolio/>}></Route>
      <Route path="/about"element={<About/>}></Route>
      <Route path="/about"element={<About/>}></Route> */}
    </Routes>
  {/* </Switch> */}
  </div>
    
        {/* <Particle /> */}
        {/* // style={{background:'black'}} */}
        {/* <ParticlesBackground/> */}
        {/* <Home />
        <About />
        <Portfolio />
        <br />
        <Portfolio1 />
        <Testimional />
        <Contact />
        <Footer /> */}
      </div>
      </Router>
      </>
  );
}
