import React from "react";
import "./PopularUniversities.css";
import icon1 from "../../../assets/Images/icons/image 17.png";
import icon2 from "../../../assets/Images/icons/image 17 (1).png";
import icon3 from "../../../assets/Images/icons/image 17 (2).png";
import { GoArrowRight } from "react-icons/go";

const popularUniversitiesData = [
  {
    id: 1,
    title: "University of Connecticut, Connecticut(Public Ivy)",
    icon: icon1,
  },
  {
    id: 2,
    title: "Arizona State University, Phoenix, Arizona",
    icon: icon2,
  },
  {
    id: 3,
    title: "University of California, Riverside, California",
    icon: icon3,
  },
  {
    id: 4,
    title: "University of Connecticut, Connecticut(Public Ivy)",
    icon: icon1,
  },
  {
    id: 5,
    title: "Arizona State University, Phoenix, Arizona",
    icon: icon2,
  },
  {
    id: 6,
    title: "University of California, Riverside, California",
    icon: icon3,
  },
];

const PopularUniversities = () => {
  return (
    <>
      <div className="popular_universities_section">
        <div className="container">
          <h2>
            <span>Popular</span> Universities
          </h2>

          <div className="popular_universities_content_container">
            {popularUniversitiesData.map((item, index) => (
              <div key={index} className="popular_universities_content">
                <img src={item.icon} alt="" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <button>View More <GoArrowRight /></button>

        </div>
      </div>
    </>
  );
};

export default PopularUniversities;
