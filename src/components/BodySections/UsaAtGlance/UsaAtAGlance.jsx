import React from "react";
import "./UsaAtaGlance.css";

const UsaAtAGlance = () => {
  return (
    <>
      <div className="usaAtaGlance_section">
        <div className="container">
          <h2><span>USA</span> At a Glance</h2>
          <div className="usaAtaGlance_content_container">
            <div className="usaAtaGlance_content">
              <div className="title">Course Duration</div>
              <div className="des">
                4 Years (Bachelor's) <br /> 2 Years (Master's)
              </div>
              <div className="title">Language Proficiency</div>
              <div className="des">
                IELTS-6+, TOEFL-70+, <br /> Duolingo-90+, PTE-50+
              </div>
              <div className="title">Air Ticket</div>
              <div className="des">100000 to 150000 BDT</div>
            </div>
            <div className="usaAtaGlance_content">
              <div className="title">Intake</div>
              <div className="des">
                January, May <br />
                September
              </div>
              <div className="title">Tution Fee (Yearly)</div>
              <div className="des">10000 to 55000 (USD)</div>
              <div className="title">Processing Time</div>
              <div className="des">9-12 Months</div>
            </div>
            <div className="usaAtaGlance_content">
              <div className="title">Application Fee</div>
              <div className="des">40 to 200 (USD)</div>
              <div className="title">Living Cost (Yearly)</div>
              <div className="des">10000 to 18000 (USD)</div>
              <div className="title">Part Time Work</div>
              <div className="des">20 HRS (per week)</div>
            </div>
            <div className="usaAtaGlance_content">
              <div className="title">Requirements</div>
              <div className="des">
                GRE/GMAT + IELTS/TOEFL/PTE, Academics-Above 55%
              </div>
              <div className="title">Visa Application</div>
              <div className="des">
                160 (USD) <br /> SEVIS Fee 350 (USD)
              </div>
              <div className="title">Post Study Work Permit</div>
              <div className="des">
                12 Month For All Programs, 12 Month+ 24 Months Extension For
                STEM (Science, Tech, Engg & Maths)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsaAtAGlance;
