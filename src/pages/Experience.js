import "./Experience.css";
import Navbar from "./Navbar";
import pic1Image from "./img/pic1.png"
import pic2Image from "./img/pic2.png"
import pic3Image from "./img/pic3.png"
import pic4Image from "./img/pic4.png"
import pic5Image from "./img/pic5.png"
import pic6Image from "./img/pic6.png"
import ok2Image from "./img/ok2.png"
import ok12Image from "./img/ok12.png"
import rrr111Image from "./img/rrr111.png"
import L1Image from "./img/L1.png"
import L2Image from "./img/L2.jpg"
import L3Image from "./img/L3.jpg"
import L4Image from "./img/L4.jpg"



const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Experience
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow mt-5 p-5">
        <h2>On the Job Training (OJT)</h2>
        <hr/>
        <center>
      <img src={pic1Image} /> <span><h4>Drivers Installation</h4></span>
      <img src={pic2Image} /> <span><h4>Microsoft Installation</h4></span>
      <img src={pic3Image} /> <span><h4>PC Assemble/Disassemble</h4></span>
      <img src={rrr111Image} /> <span><h4>Prenter Cleaner</h4></span>
      </center>
      </div>
    
      <div className="card shadow mt-5 p-5">
      <h2>Thesis Study</h2>
      <hr/>
      <center>
      <img src={pic4Image} /> <span><h4>This our Lettuce</h4></span>
      <img src={pic6Image} /> <span><h4>This our Lettuce</h4></span>
      <img src={ok2Image} /> <span><h4>This our Hardware</h4></span>
      <img src={ok12Image} /> <span><h4>This our Hardware</h4></span>
      </center>
      </div>

      <div className="card shadow mt-5 p-5">
        <h2>Activities</h2>
        <hr/>
        <center>
      <img src={L1Image} /> <span><h4>Making a Website</h4></span>
      <img src={L2Image} /> <span><h4>Create a Bootstrap with JS</h4></span>
      <img src={L3Image} /> <span><h4></h4></span>
      <img src={L3Image} /> <span><h4></h4></span>
      <img src={L4Image} /> <span><h4></h4></span>
      </center>
      </div>

  </>
  );
};

export default Experience;
