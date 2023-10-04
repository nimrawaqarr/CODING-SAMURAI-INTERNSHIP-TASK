import React from 'react'
import "./Banner.css"

export default function Banner() {
  return (
    <>
       <div className="main banner-main">
        <div className="banner-image">
          {/* <img src={"images/Banner.png"} alt="" className="bg-image" /> */}
          <picture>
            <source media="(max-width:600px)" srcSet={'images/Banner-mobile.png'}/>
            <img src={'images/Banner.png'} alt="" className="bg-image" />
          </picture>
        </div>
        <div className="image-overlay">
          <div className="wrapper">
            <div className="container banner-container">
            <div className="banner-content">
              <div className="digital-home">
                <p>A new home for Digital Bloggers</p>
              </div>
              <div className="banner-title">
                <p>
                  <span className="banner-name">Blog </span>
                  <span className="banner-name-space">Website</span>
                </p>
              </div>
              <div className="banner-text">
                <p className="banner-des">
                  Bring your passions & ideas to life with fun. With us you don't feel
                  any stress of work!
                </p>
              </div>
              <button className="banner-btn">Request Blog</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
