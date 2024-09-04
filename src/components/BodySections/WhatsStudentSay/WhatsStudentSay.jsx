import React from "react";
import "./WhatStudentSay.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from "../../../assets/Images/icons/icon-park_quote.png";
import { FaStar } from "react-icons/fa6";
import userImg1 from "../../../assets/Images/18f6eb98687e88b5e15972a56cd9cd56.jpeg";
import userImg2 from "../../../assets/Images/8a59414e752a6a96513730b9dbf36685.jpeg";
import userImg3 from "../../../assets/Images/52c2cc01aa3bc10498c927fd85939dc5.jpeg";

const WhatsStudentSay = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="student_say_section">
        <div className="container">
          <div className="student_say_content">
            <h2>
              <span>What's</span> Our students say
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              assumenda dolor magni <br /> pariatur recusandae rem mollitia,
              earum tempora eligendi tempore eaque.
            </p>

            <div className="student_say_content_slider">
              <Slider {...settings}>
                <div className="slider_item">
                  <img width={30} src={icon} alt="" />
                  <p>
                    We are the representatives of more than 30+ universities in
                    Australian countries and our admission
                  </p>
                  <div className="ratings">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <div className="student">
                    <img src={userImg1} alt="" />
                    <div>
                      <h5>Lisa Dowen</h5>
                      <small>Student</small>
                    </div>
                  </div>
                </div>
                <div className="slider_item">
                  <img width={30} src={icon} alt="" />
                  <p>
                    We are the representatives of more than 30+ universities in
                    Australian countries and our admission
                  </p>
                  <div className="ratings">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="student">
                    <img src={userImg2} alt="" />
                    <div>
                      <h5>Lisa Dowen</h5>
                      <small>Student</small>
                    </div>
                  </div>
                </div>
                <div className="slider_item">
                  <img width={30} src={icon} alt="" />
                  <p>
                    We are the representatives of more than 30+ universities in
                    Australian countries and our admission
                  </p>
                  <div className="ratings">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="student">
                    <img src={userImg3} alt="" />
                    <div>
                      <h5>Lisa Dowen</h5>
                      <small>Student</small>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsStudentSay;
