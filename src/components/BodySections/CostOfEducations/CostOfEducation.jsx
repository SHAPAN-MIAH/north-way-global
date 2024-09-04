import React from "react";
import banner from "../../../assets/Images/costBanner.png";
import './CostOfEducations.css'


const CostOfEducation = () => {
  return (
    <>
      <div className="costOfEducation_section">
        <div className="container">
          <div className="costOfEducation_content_container">
            <img src={banner} alt="" />

            <div className="costOfEducation_content">
              <h2><span>Cost</span> of Education</h2>

              <p>
                In the U.S., tuition fees vary based on the state, the
                university funding model, and the student’s country of origin.
                So, listing an average is a rather difficult task. However,
                thanks to the folks at College Board, they’ve rendered an
                estimate of last year’s average tuition costs, which will
                roughly reflect the next few years.
              </p>

              <ul>
                <li> Total Expenses 41535</li>
                <li> Tuition Fees for one-year (Indicative) 25000</li>
                <li> Living and Accommodation 15000</li>
                <li> Airfare from India to USA 1000</li>
                <li> Visa Fees (Visa & SEVIS) 535</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CostOfEducation;
