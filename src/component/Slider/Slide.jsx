
import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
   
 
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<Arrow/>,
    prevArrow:<Arrow/>,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div className="bg-gradient-to-r from-[#151515] to  h-full">
            <img className="w-full" src="https://i.ibb.co/q0rtkxv/woman-reading-stories-children-23-2147797978.jpg"/>
            <h3>The Best care in Mother</h3>
          </div>
          <div>
            <img className="w-full" src="https://i.ibb.co/8zy2YLd/454545.png"/>
            <h3>2</h3>
          </div>
          <div>
            <img className="w-full" src="https://i.ibb.co/KjwQkyJ/cheerful-toddler-holding-refreshing-blue-water-bottle-outdoors-generated-by-ai-188544-10633.jpg"/>
            <h3>3</h3>
          </div>
          <div>
          <img className="w-full" src="https://i.ibb.co/BgnDDWk/424242.png"/>
            <h3>4</h3>
          </div>
         
        </Slider>
      </div>
  );
};

export default Slide;
   


