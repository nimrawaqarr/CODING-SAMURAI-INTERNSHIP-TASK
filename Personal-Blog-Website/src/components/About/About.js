import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div className="container">
            <div className="about">
              <h2>
                <span className="about-span">ABOUT </span>
                <span className="us-span">US</span>
              </h2>
              <p className="text">
                A highly motivated and passionate Front End Developer with a
                strong passion for building user-friendly and visually appealing
                web applications using ReactJS and a strong foundation in HTML,
                CSS, and JavaScript. I am confident in my ability to contribute
                to any project and deliver high- quality and user-friendly web
                applications.
              </p>
            </div>
            <div className="accomplishments">
                <div>
                    <img src={'images/working.png'} alt="" />
                    <p className="title">Working Since 2020</p>
                    <p className="accomp-text">After Approx 3 Years in the industry, I have completed Several projects and delivered the quality content.</p>
                </div>
                <div>
                    <img src={'images/freelance-customers.png'} alt="" />
                    <p className="title">100+ Customers</p>
                    <p className="accomp-text">Our 100+ Customers trust my services to power their business websites and add functionality to their online stores.</p>
                </div>
            </div>

            <div className="values">
                <div className="values-div-img">
                <img src={'images/core-values.png'} alt="" className="values-img" />
                </div>
                <div className="values-content">
                    <h2 className="values-title">Our Core Values</h2>
                    <ul>
                        <li>
                        I consider my Porjects and customers as our #1 priority.</li>
                        <li>I don’t settle for average, I am committed to building the BEST.</li>
                        <li>I not just work hard but works SMART. I develop systems that harbor trust through complete transparency.</li>
                        <li>I strive to work for the betterment of the industry and society as a collective unit.</li>
                        <li>I believe in building long-term partnerships to ensure growth and sustainability.</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
