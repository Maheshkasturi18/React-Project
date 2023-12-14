import React, { Component } from "react";
import "./Contactus.css";

export default class Contactus extends Component {
  render() {
    return (
      <section className="contact-us">
        <div className="container py-5 ">
          <div className="row">
            <div className="col-lg-6 p-5">
              <h1>Get In Touch</h1>

              <div className="row border-bottom py-5">
                <div className="col-md-2 mb-4 mb-md-0">
                  <i class="fa-solid fa-location-dot p-3 rounded-circle bg-info text-white fs-5"></i>
                </div>

                <div className="col-md-10">
                  <h6>CORPORATE OFFICE</h6>
                  <p>
                    Empire Industries Limited – Hygiene Care, Empire Complex,
                    414, Senapati Bapat Marg, Lower Parel (W), Mumbai – 400013
                  </p>

                  <h5 className="fw-bold text-center mb-3">Regional Offices</h5>
                  <div className="row">
                    <div className="col ">
                      <p className="border-end  border-black border-2 ">
                        Mumbai
                      </p>
                    </div>
                    <div className="col ">
                      <p className="border-end border-black border-2 ">Delhi</p>
                    </div>
                    <div className="col ">
                      <p className="border-end  border-black border-2 ">
                        Kolkata
                      </p>
                    </div>
                    <div className="col ">
                      <p className="">Bengaluru</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row py-4 border-bottom">
                <div className="col-md-2 ">
                  <i class="fa-solid fa-phone p-3 rounded-circle bg-info text-white fs-5"></i>
                </div>
                <div className="col-md-10 mb-4 mb-md-0">
                  <h6>CALL US</h6>
                  <p>1800 209 2526</p>
                </div>
              </div>

              <div className="row py-4 ">
                <div className="col-md-2 ">
                  <i class="fa-solid fa-envelope p-3 rounded-circle bg-info text-white fs-5"></i>
                </div>

                <div className="col-md-10 mb-4 mb-md-0">
                  <h6>EMAIL US</h6>
                  <p>care@grabbitempire.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <form class=" border border-light p-5 bg-white" action="#!">
                <div className="row mb-4">
                  <label for="Name" className="form-label fw-bold fs-5">
                    Name <span className="text-danger">*</span>
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      id="Name"
                      className="form-control bg-light-subtle"
                      aria-describedby="firstname"
                    />
                    <div id="firstname" className="form-text">
                      First
                    </div>
                  </div>

                  <div className="col">
                    <input
                      type="text"
                      id="Name"
                      className="form-control bg-light-subtle"
                      aria-describedby="lastname"
                    />
                    <div id="lastname" className="form-text">
                      Last
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label for="Contact" className="form-label fw-bold fs-5">
                    Contact Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="Contact"
                    className="form-control bg-light-subtle"
                  />
                </div>

                <div className="mb-4">
                  <label for="Email" className="form-label fw-bold fs-5">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="Email"
                    className="form-control mb-4 bg-light-subtle "
                  />
                </div>

                <div className="mb-4">
                  <label for="subject" className="form-label fw-bold fs-5">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control bg-light-subtle"
                  />
                </div>

                <div className="form-group mb-4">
                  <label for="subject" className="form-label fw-bold fs-5">
                    Comment or Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control  bg-light-subtle"
                    id="exampleFormControlTextarea2"
                    rows="3"
                  ></textarea>
                </div>

                <div className="custom-control  custom-checkbox mb-4 v">
                  <input
                    type="checkbox"
                    className="custom-control-input me-3 mb-3 mb-md-0 bg-light-subtle"
                    id="defaultContactFormCopy"
                    required
                  />
                  <label
                    className="custom-control-label "
                    for="defaultContactFormCopy"
                  >
                    I consent to receive communication from EMPERIA 1900
                    <span className="text-danger">*</span>
                  </label>
                </div>

                <button
                  className="btn btn-outline-info btn-block rounded-5 px-3 py-2 border-2 fw-bold"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="100%"
              title=""
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=emperia+1900&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://www.tabclocktab.com/">clock tab</a>
            <br/>
            <a href="https://www.clock-alarm.com/"> 
            {/* dd */}
            </a>
            <br/>
           
          </div>
        </div>







      </section>
    );
  }
}
