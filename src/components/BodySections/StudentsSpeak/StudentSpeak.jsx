import React from "react";
import "./StudentSpeak.css";
import img1 from "../../../assets/Images/33bfb801dee838a49255e3ffd2811c72.jpeg";
import img2 from "../../../assets/Images/aa9edb170faca7399c4fe3e6b20d76f9.png";
import img3 from "../../../assets/Images/95f9935c7a8d817bdb47947c042a7378.jpeg";
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const StudentSpeak = () => {
  return (
    <>
      <div className="student_speak_section">
        <div className="student_speak_banner_container">
          <div className="container">
            <h2>
              Student's <span>Speak</span>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              quam <br /> eius amet nobis vel dolor ullam modi fuga quaerat
              tempore?
            </p>
          </div>
        </div>
        <div className="container">
          <div className="student_speak_slider">
            <div className="student_speak_slider_item student_speak_slider_item1">
              <div className="carusel_img">
                <img src={img1} alt="" />
              </div>
              <span><FaPlay /></span>   
              <h3>Rashmi Borah</h3>
              <p>Northeastern University, Boston</p>

            </div>
            <div className="student_speak_slider_item student_speak_slider_item2">
              <div className="carusel_img carusel_img2">
                <img src={img2} alt="" />
              </div>
              <span><FaPlay /></span>
              <h3>Rashmi Borah</h3>
              <p>Northeastern University, Boston</p>

            </div>
            <div className="student_speak_slider_item student_speak_slider_item3">
              <div className="carusel_img">
                <img src={img3} alt="" />
              </div>
              <span><FaPlay /></span>
              <h3>Rashmi Borah</h3>
              <p>Northeastern University, Boston</p>

            </div>
          </div>

          <div className="arrow_container">
          <span className="arrow_left"><FaArrowLeftLong /></span>
          <span className="arrow_right"><FaArrowRightLong /></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSpeak;
