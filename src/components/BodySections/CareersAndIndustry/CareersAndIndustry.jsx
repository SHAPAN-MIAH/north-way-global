import React from "react";
import banner from "../../../assets/Images/careerBanner.png";
import { GoArrowRight } from "react-icons/go";
import "./CareersAndIndustry.css";

const CareersAndIndustry = () => {
  return (
    <>
      <div className="careersAndIndustry_section">
        <div className="container">
          <div className="careersAndIndustry_content_container">
            <div className="careersAndIndustry_content">
              <h2>
                 <span>Careers</span> & Industry
              </h2>

              <p>
                One of the most technologically powerful and dynamic countries,
                USA is the largest & most dominant economy globally. Sectors
                that empower this world’s most productive economy include
                Healthcare, Technology, Construction, Retail, Manufacturing,
                Finance & Insurance and Real Estate. Top jobs with high
                remuneration prospects for international students include
                Medicine, Computer & Information Systems Managers, Architectural
                & Engineering Managers and Marketing & Financial Managers.
                Standard of living in the USA is among the highest in the world
                with high per capita income. This nation performs very well in
                many measures of well-being such as income & wealth, health
                status, jobs and earnings, education & skills and environmental
                quality.
              </p>

              <button>
                See More <GoArrowRight />
              </button>
            </div>
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersAndIndustry;
