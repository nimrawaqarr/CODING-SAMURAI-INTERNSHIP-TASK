import React from "react";
import "./Reviews.css";

//for swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Reviews() {
  return (
    <>
      <div className="main reviews-section">
        <div className="wrapper reviews-wrapper">
          <Swiper
            style={{
              "--swiper-pagination-color": "#fa8c36",
            }}
            autoHeight
            spaceBetween={100}
            pagination={{
              // el: ".pagination-links",
              clickable: true,
            }}
            modules={[Pagination]}
            className=""
          >
            <SwiperSlide>
              <section className="reviews-container">
                <div className="reviews-text">
                  <h2 className="reviews-text-head">
                    What they’re talking About Us
                  </h2>
                  <img src={'images/stars.png'} alt="" id="reviews-rating" />
                  <p className="reviews-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="reviewer-name-profession">
                    <p className="reviewer-name">Sara Albert</p>
                    <p className="reviewer-post">Pakistan</p>
                  </div>
                </div>
                <div className="reviews-image">
                  <img src={'images/reviewerImage.png'} alt="" id="reviewer-image" />
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="reviews-container">
                <div className="reviews-text">
                  <p className="reviews-text-head">
                    What they’re talking About Company
                  </p>
                  <img src={'images/Homepage/stars.png'} alt="" id="reviews-rating" />
                  <p className="reviews-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="reviewer-name-profession">
                    <p className="reviewer-name">Sara Albert</p>
                    <p className="reviewer-post">America</p>
                  </div>
                </div>
                <div className="reviews-image">
                  <img src={'images/reviewerImage.png'} alt="" id="reviewer-image" />
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="reviews-container">
                <div className="reviews-text">
                  <p className="reviews-text-head">
                    What they’re talking About Company
                  </p>
                  <img src={'images/stars.png'} alt="" id="reviews-rating" />
                  <p className="reviews-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="reviewer-name-profession">
                    <p className="reviewer-name">Sara Albert</p>
                    <p className="reviewer-post">Australia</p>
                  </div>
                </div>
                <section className="reviews-image">
                  <img src={'images/reviewerImage.png'} alt="" id="reviewer-image" />
                </section>
              </section>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
