import React, { Component } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      //   <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container upp">

            <div>
              <Link className="navbar-brand " to="/">
                <img src="images/logo_img.png" alt="" height="80px" width="160px" />
              </Link>
            </div>

                
            <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
            </button>

            
            <div className="collapse navbar-collapse " id="navbarNav">
                <div className="mx-3 mx-auto">  
                      <ul className="navbar-nav ">
                        <li className="nav-item px-2 py-1  fw-semibold item-list" >
                          <Link className="nav-link  px-lg-3 "   to="/">
                            Home
                          </Link>
                        </li>

                        <li className="nav-item dropdown  px-1 py-1 fw-semibold">
                          <Link
                            className="nav-link dropdown-toggle  "
                            to="/"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            id="services"
                             
                          >
                            About Us
                          </Link>
                          <ul className="dropdown-menu dropdown-content">
                            <li>
                              <Link className="dropdown-item" to="history">
                                History
                              </Link>
                              
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li>
                              <Link className="dropdown-item" to="leadership">
                                Leadership
                              </Link>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li>
                              <Link className="dropdown-item" to="corevalue">
                                Core Values
                              </Link>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li>
                              <Link className="dropdown-item" to="distribution">
                                Distribution
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown  px-1 py-1 fw-semibold ">
                          <Link
                            className="nav-link dropdown-toggle "
                            to="products"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            id="services"
                             
                          >
                            Products
                          </Link>
                          <ul className="dropdown-menu dropdown-content">
                            <li>
                              <Link className="dropdown-item" to="personalcare">
                                Personal Care
                              </Link>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li>
                              <Link className="dropdown-item" to="bathroomcare">
                               Bathroom Care
                              </Link>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li>
                              <Link className="dropdown-item" to="floorcare">
                                Floor & Surface Care
                              </Link>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li>
                              <Link className="dropdown-item" to="generalcare">
                                General Care
                              </Link>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li>
                              <Link className="dropdown-item" to="kitchencare">
                                Kitchen Care
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item px-1 py-1  fw-semibold item-list">
                          <Link to="inovation"   data-toggle="tab" className="nav-link ">
                            Inovation & Technology
                          </Link>
                        </li>

                        <li className="nav-item dropdown px-1  py-1 fw-semibold ">
                          <Link
                            className="nav-link dropdown-toggle "
                            to="/"
                            role="button"
                             
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            id="services"
                          >
                            Media
                          </Link>

                          <ul className="dropdown-menu dropdown-content">
                            <li >
                              <Link className="dropdown-item" to="/">
                                Facebook
                              </Link>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li >
                              <Link className="dropdown-item" to="/">
                                Instagram
                              </Link>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li >
                              <Link className="dropdown-item" to="/">
                                LinkedIn
                              </Link>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li>
                              <Link className="dropdown-item" to="/">
                                Twitter
                              </Link>
                            </li>
                            <li><hr class="dropdown-divider"/></li>
                            <li >
                              <Link className="dropdown-item" to="/">
                                Youtube
                              </Link>
                            </li>
                          </ul>

                        </li>

                 
                        <li className="nav-item px-lg-4 ">
                          <Link to="contactus" className="nav-link py-1">
                            <button
                              type="button" id="button"
                              className="btn btn-sm  px-3 py-2 rounded-pill text-uppercase fw-semibold"
                            >
                              Contact Us
                            </button>
                          </Link>
                        </li>
                      </ul>
              
                </div>
            </div>

            <div>
                  <Link className="navbar-brand m-0 fs-3" to="/">
                    
                    <i class="fa-solid fa-cart-shopping"></i>
                  </Link>
              
            </div>
          
        </div>
      </nav>
      //   </header>
    );
  }
}

export default Navbar;
