import "./Home.css";
import Navbar from "./Navbar";
import myImage from "./img/2.jpg-removebg-preview.png"

const Home = () => {
  return (
    <>
      <Navbar />
     <div className="wrapper">
      <div className="overlay"> 
      <div className="container1">


      <div id="home-info">
      
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 lizel">
              <h3 className=" display-3 text-center  pt-5 mb-5">
                I'm Lizel D. Cabayao 
              </h3> 
              <h4 className="text-center text-center mt-5">Studied In Central Philipphines State University</h4>
              <ul>
              </ul>
               <center>
                <a href="/about" className="btn btn-brand shadow">
                  Show More
                </a>
               </center>
            </div>
            <div className="col-lg-6 img">
               <img src={myImage}/>
            </div>
          </div>
        </div>
      </div>
      <section>
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
</section>
        </div>
       </div>
      </div>

      
    </>
  );
};

export default Home;
