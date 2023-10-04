import "./Article.css";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function Articles() {
  return (
    <>
      <div className="main article-main">
        <div className="banner">
          <picture className="banner-image">
            <source
              media="(max-width: 400px)"
              srcSet={"images/consultancy-banner-400.png"}
              className="head-image"
            />
            <source
              media="(max-width: 767px)"
              srcSet={"images/consultancy-banner-767.png"}
              className="head-image"
            />
            <img
              src={"images/consultancy-banner.png"}
              className="head-image"
              alt=""
            />
          </picture>
        <div className="overlay">
          <div className="icon-about">
            <HomeOutlinedIcon className="home-icon" />
            <span className="arrow">&#8594;</span>
            <p className="banner-about-text">Blogs</p>
          </div>

          <h1 className="banner-head">My Blogs</h1>
        </div>
      </div>
        </div>
    </>
  );
}
