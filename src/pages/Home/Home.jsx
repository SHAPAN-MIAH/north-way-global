// import React from 'react';

import ApplicationProcess from "../../components/BodySections/ApplicationProcess/ApplicationProcess";
import Blogs from "../../components/BodySections/Blogs/Blogs";
import CareersAndIndustry from "../../components/BodySections/CareersAndIndustry/CareersAndIndustry";
import CostOfEducation from "../../components/BodySections/CostOfEducations/CostOfEducation";
import Faq from "../../components/BodySections/FAQ/Faq";
import PopularUniversities from "../../components/BodySections/PopularUniversities/PopularUniversities";
import StudentSpeak from "../../components/BodySections/StudentsSpeak/StudentSpeak";
import UsaAtAGlance from "../../components/BodySections/UsaAtGlance/UsaAtAGlance";
import WhatsStudentSay from "../../components/BodySections/WhatsStudentSay/WhatsStudentSay";
import WhyStudyInUSA from "../../components/BodySections/WhyStudyInUSA/WhyStudyInUSA";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Showcase from "../../components/Showcase/Showcase";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Showcase/>
      <ApplicationProcess/>
      <WhyStudyInUSA/>
      <CareersAndIndustry/>
      <PopularUniversities/>
      <CostOfEducation/>
      <UsaAtAGlance/>
      <WhatsStudentSay/>
      <StudentSpeak/>
      <Faq/>
      <Blogs/>
      <Footer/>
    </>
  );
};

export default Home;