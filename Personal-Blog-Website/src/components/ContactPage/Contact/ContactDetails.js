import React, { useState } from "react";
import "./ContactDetails.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comment, setComment] = useState("");
  return (
    <>
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <div className="main">
        <div className="wrapper">
          <div className="contact-us">
            <div className="address-details-section">
              <h2 className="contact-info-head">Contact Information</h2>
              <p className="contact-info-des">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going a new normal
                that from generation
              </p>

              {/* Left Contact Div */}

              <div className="address-details">
                <img
                  src={"images/globe.png"}
                  alt=""
                  className="address-detail-image"
                />
                <div>
                  <h3 className="address-detail-title">Our Address</h3>
                  <p className="address-detail-des">
                   ABC ABC ABC
                  </p>
                </div>
              </div>

              <div className="address-details">
                <img
                  src={"images/mail.png"}
                  alt=""
                  className="address-detail-image"
                />
                <div>
                  <h3 className="address-detail-title">Email</h3>
                  <p className="address-detail-des">Info@abc.com</p>
                </div>
              </div>

              <div className="address-details">
                <img
                  src={"images/phone.png"}
                  alt=""
                  className="address-detail-image"
                />
                <div>
                  <h3 className="address-detail-title">Contact</h3>
                  <p className="address-detail-des">+92 000 456 7890</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2 className="contact-form-head">Have Any Questions</h2>
              <p className="contact-form-des">
                Feel free to contact us through Twitter or Facebook if you
                prefer!
              </p>

              <form action="">
                <div className="name-email">
                  <input
                    type="text"
                    className="name-input"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <input
                    type="email"
                    className="email-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Website"
                  className="website-input"
                  value={website}
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                />

                <textarea
                  rows={6}
                  placeholder="Comments"
                  className="comments-input"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
                <ReCAPTCHA id="captcha" sitekey="6LdOSSkoAAAAAFJponyepwUSUYVhUNtB6gBQZNCl"
                />
                
                {/* <img className="recaptcha" src={'images/Contact/recaptcha.png'} alt="" /> */}

                <button className="discovery-button contact-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
