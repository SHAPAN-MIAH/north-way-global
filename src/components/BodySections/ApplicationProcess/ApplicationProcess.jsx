import React from "react";
import "./ApplicationProcess.css";
import icon1 from "../../../assets/Images/icons/Frame 175 (1).png";
import icon2 from "../../../assets/Images/icons/Frame 175.png";
import icon3 from "../../../assets/Images/icons/Frame 176 (1).png";
import icon4 from "../../../assets/Images/icons/Frame 176.png";
import icon5 from "../../../assets/Images/icons/Frame 177.png";
import icon6 from "../../../assets/Images/icons/Frame 178.png";
import icon7 from "../../../assets/Images/icons/Frame 179.png";
import { RiVisaLine } from "react-icons/ri";

const applicationProcessData = [
  {
    id: 1,
    title: "Clients profile review",
    icon: icon2,
  },
  {
    id: 2,
    title: "Onboarding meeting",
    icon: icon4,
  },
  {
    id: 3,
    title: "University search",
    icon: icon5,
  },
  {
    id: 4,
    title: "Statement Of purpose, cv review and edit",
    icon: icon6,
  },
  {
    id: 5,
    title: "University shortlist",
    icon: icon7,
  },
  {
    id: 6,
    title: "University application",
    icon: icon1,
  },
  {
    id: 7,
    title: "Arranging mock interview",
    icon: icon3,
  },
  {
    id: 8,
    title: "visa application for submission",
    icon: "",
  },
];

const ApplicationProcess = () => {
  return (
    <>
      <div className="application_process_section">
        <div className="container">
          <h1>
            <span>Our</span> Application Process
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            repellendus itaque optio <br /> reprehenderit quis illo id mollitia
            non sapiente porro.
          </p>

          <div className="application_process_content_container">
            {applicationProcessData.map((item, index) => (
              <div key={index} className="application_process_content">
                {item.icon == "" ? (
                  <span>
                    <RiVisaLine />
                  </span>
                ) : (
                  <img src={item.icon} alt="" />
                )}
                 <p>{item.title}</p>
              </div>
            ))}
          <div className="dash_border_top"></div> 
          <div className="dash_border_bottom"></div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationProcess;
