import "./Contact.css";
import Navbar from "./Navbar";

import {FontAwesomeIcon} from  "@fortawesome/react-fontawesome";
import { faMapLocation, faPhoneAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div id="about-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Contact
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5" id="contact">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white">Contact</h1>
                <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        <form>
                            <div className="form-row">
                                <div class="control-group">
                                    <input type="text" className="form-control p-4" id="name" placeholder="Your Name"
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" class="form-control p-4" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control p-4" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-outline-primary" type="submit" id="sendMessageButton">Send
                                    Message</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="container">
                        <div className="row">
                            <h3 className="mt-4"><FontAwesomeIcon className="me-1" icon={faUser} />Lizel Cabayao</h3>
                            <p className="ms-3">BSIT Student</p>

                            <h3 className="mt-4"><FontAwesomeIcon className="me-1" icon={faMapLocation} />Address</h3>
                            <p className="ms-3">Brgy.Caningay</p>

                            <h3 className="mt-4"><FontAwesomeIcon className="me-1" icon={faPhoneAlt} />Contact</h3>
                            <p className="ms-3">0912-345-6789</p>

                            <ul>
                                <li className="ms-3"><a href="https://www.facebook.com/lizel.cabayao/"><FontAwesomeIcon className="me-1 icon-logo" icon={faFacebook} /></a></li>
            
                                
                                <li className="ms-3"><a href=""><FontAwesomeIcon className="me-1 icon-logo" icon={faTiktok} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  );
};

export default Contact;