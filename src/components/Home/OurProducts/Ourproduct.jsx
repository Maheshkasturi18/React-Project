import React, { Component } from "react";
import Slider from "react-slick";
import "./Ourproduct.css"

export default class Ourproduct extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true,
           autoplaySpeed: 4000,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          autoplaySpeed: 4000,     
          }
        },
        
      ]
    };
    return (
      <div className="product-bg p-4">
        <center className="text-uppercase fs-4 fw-semibold mb-4">Our Products</center>
        <div className="container p-3">
        <Slider {...settings}>
          <div>
            <img src="images/our_product_img1.jpeg" className="img-fluid p-2"  alt="" />
          </div>
          <div>
          <img src="images/our_product_img2.jpg" className="img-fluid p-2"  alt="" />
          </div>
          <div>
          <img src="images/our_product_img3.jpg" className="img-fluid p-2"  alt="" />
          </div>
          <div>
          <img src="images/our_product_img4.jpg" className="img-fluid p-2"  alt="" />
          </div>
          <div>
          <img src="images/our_product_img5.jpg" className="img-fluid p-2"  alt="" />
          </div>
          <div>
          <img src="images/our_product_img6.jpg" className="img-fluid p-2"  alt="" />
          </div>
          <div>
          <img src="images/our_product_img1.jpeg"  className="img-fluid p-2" alt="" />
          </div>
          <div>
          <img src="images/our_product_img8.jpg" className="img-fluid p-2"  alt="" />
          </div>
          <div>
          <img src="images/our_product_img9.jpg" className="img-fluid p-2"  alt="" />
          </div>
          <div>
          <img src="images/our_product_img5.jpg" className="img-fluid p-2"  alt="" />
          </div>
          
        </Slider>
        </div>
      </div>
    );
  }
}