import React from "react";
import "./Blogs.css";
import blogImg1 from "../../../assets/Images/blogimg (1).png";
import blogImg2 from "../../../assets/Images/blogimg (2).png";
import blogImg3 from "../../../assets/Images/blogimg (3).png";
import { CiUser } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { BsCalendar2Date } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";


const Blogs = () => {
  return (
    <>
      <div className="blog_section">
        <div className="container">
          <h2>
            Our Latest <span>Blog</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            exercitationem fuga dolores quia <br />
            reiciendis rerum, ullam accusamus dolor. Facere, commodi.
          </p>

          <div className="blogs_content_container">
          <div className="blogs_content">
            <img src={blogImg1} alt="" />
            <small>
              <BsCalendar2Date /> July 30, 2024{" "}
            </small>
            <h4>Emotional Intelligence in Education Building</h4>

            <div className="theme_comments">
              <p>
                <CiUser /> Back Theme
              </p>
              <p>
                <LiaComments /> 50 Comments
              </p>
            </div>
          </div>
          <div className="blogs_content">
            <img src={blogImg2} alt="" />
            <small>
              <BsCalendar2Date /> July 30, 2024{" "}
            </small>
            <h4>Emotional Intelligence in Education Building</h4>

            <div className="theme_comments">
              <p>
                <CiUser /> Back Theme
              </p>
              <p>
                <LiaComments /> 50 Comments
              </p>
            </div>
          </div>
          <div className="blogs_content">
            <img src={blogImg3} alt="" />
            <small>
              <BsCalendar2Date /> July 30, 2024{" "}
            </small>
            <h4>Emotional Intelligence in Education Building</h4>

            <div className="theme_comments">
              <p>
                <CiUser /> Back Theme
              </p>
              <p>
                <LiaComments /> 50 Comments
              </p>
            </div>
          </div>
          </div>
          <button>
                Browse More Blog <GoArrowRight />
              </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
