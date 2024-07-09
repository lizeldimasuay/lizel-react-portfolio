import "./Portfolio.css";
import Navbar from "./Navbar";
import D1Image from "./img/D1.png"
import cabayao5Image from "./img/cabayao5.png"
import b2Image from "./img/b2.png"
import pic0Image from "./img/pic0.png"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Portfolio
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="row mt-5">
            <h3>Projects</h3>
            <hr />
          <div className="col">
          <img className="one" src={D1Image} />
          <h4 className="mt-5">Calculator Project</h4>
          </div>
          <div className="col">
          <img className="two" src={cabayao5Image} />
          <h4 className="mt-5">My React Project</h4>
          </div>
          <div className="col">
          <img className="three" src={b2Image} />
          <h4 className="mt-5">Final Frontend Project</h4>
          </div>
          <div className="col">
          <img className="four" src={pic0Image} />
          <h4 className="mt-5">Thesis Project</h4>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
