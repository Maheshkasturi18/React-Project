import React, { Component } from "react";
// import Slider from "react-slick";
// import { baseUrl } from "./config";
import "./Ourvision.css";

export default class Ourvision extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide p-0"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="images/our_vision_img1.png" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="images/our_vision_img2.png" class="d-block w-100 h-80"  alt="..." />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
/*
{
   <div className="col-lg-6">
            <h3>Our Vision</h3>
            <p>
              To promote public health and hygiene by providing leading hygiene
              care solutions that enable individuals and communities to maintain
              a healthy and safe environment.
            </p>
            <a href="/">Read More</a>
            </div> 
}*/
