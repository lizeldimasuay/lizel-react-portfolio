import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/pom1.png"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                About
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow mt-5 p-5">
            <div className="row">
              <div className="col-lg-4">
               <center><img src={myImage}/></center>
            </div>
            <div className="col-lg-8">
              <div className="card shadow mb-3 p-3 ">
              <h4 className="text-secondary">About Me</h4>
             <p>I'm Lizel D. Cabayao Im 23 Years Old Studied In Central Philipphines State University (CPSU) taking a course of Bachelor of Science in Information Technology(BSIT) I have interested to Networking and PC Assemble Disassemble.</p>
              </div>
              <div className="card shadow p-3 ">
              <h4 className="text-secondary">Academic Journey</h4>
             <p>Primary: Galicano Temporosa I Memorial Elementary School  S.Y: 2015-2016<br />Secondary: Caningay National High School (Main)  S.Y: 2018-2019<br /> Tretiary: Central Phillipines State University</p>
              </div>
            </div>
              </div> 
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
