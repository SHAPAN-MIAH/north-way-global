import React from "react";
import banner from "../../../assets/Images/studyInusaBanner.png"
import './WhyStudyInUSA.css';
import { IoStar } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";


const WhyStudyInUSA = () => {
  return (
    <>
      <div className="whyStudyInUsa_section">
        <div className="container">
          <div className="whyStudyInUsa_content_container">
              <img src={banner} alt="" />
          
            <div className="whyStudyInUsa_content">
              <h2>Why Study <span>In USA?</span></h2>

              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-
              </p>


              <h3>Quick facts</h3>
              <ul>
                <li><span><IoStar /></span> USA hosts more than a million international students</li>
                <li><span><IoStar /></span> Over 25% of world’s top 100 universities are in the USA</li>
                <li><span><IoStar /></span> Post-study stay back visas (OPT) up to 3 years for STEM programs</li>
                <li><span><IoStar /></span> Internships (CPT) up to 12 months while studying</li>
                <li><span><IoStar /></span> Merit Based & Need Based Scholarships</li>
              </ul>

              <button>See More <GoArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyStudyInUSA;
