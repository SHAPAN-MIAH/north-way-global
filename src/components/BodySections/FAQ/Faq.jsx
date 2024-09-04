import React, { useState } from "react";
import banner from "../../../assets/Images/70169d4d5d4cb0727c0f58e3b0ce3fe1.png";
import "./Faq.css";

const Faq = () => {
  const [state, setState] = useState(false);
  const showAns = () => {
    setState(true);
  };
  const hideAns = () => {
    setState(false);
  };
  return (
    <>
      <div className="faq_section">
        <div className="container">
          <div className="faq_content_container">
            <div className="faq_content">
              <h2>
                Study in <span>USA FAQ's</span>
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                rerum tenetur facilis qui, <br />
                culpa est impedit perferendis sequi quia magni.
              </p>

              <div className={state == true? "active_ans" : "faq_ans"}>
                <div className="faq_qsn">
                  <h4>Can you work while studying in the United States?</h4>
                  {state == true ? (
                    <span onClick={hideAns}>-</span>
                  ) : (
                    <span onClick={showAns}>+</span>
                  )}
                </div>
                {state == true ? (
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                    rerum tenetur facilis qui, <br />
                    culpa est impedit perferendis sequi quia magni.
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="faq_ans">
                <div className="faq_qsn">
                  <h4>Can you work while studying in the United States?</h4>
                  <span>+</span>
                </div>
              </div>
              <div className="faq_ans">
                <div className="faq_qsn">
                  <h4>Can you work while studying in the United States?</h4>
                  <span>+</span>
                </div>
              </div>
              <div className="faq_ans">
                <div className="faq_qsn">
                  <h4>Can you work while studying in the United States?</h4>
                  <span>+</span>
                </div>
              </div>
              <div className="faq_ans">
                <div className="faq_qsn">
                  <h4>Can you work while studying in the United States?</h4>
                  <span>+</span>
                </div>
              </div>
            </div>
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
