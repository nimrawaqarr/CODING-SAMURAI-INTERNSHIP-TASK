import React from "react";
import movies from "../../../movie.json";
import "./RecentArticles.css";
import { useNavigate } from "react-router-dom";

export default function RecentArticles() {
  const navigate = useNavigate();
  const navigateArticles =()=>{
    navigate('/article')
  }
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div className="container">
            <h2 className="movies-head">BLOGS</h2>
            <div className="movie">
              {movies.slice(0, 4).map((item) => {
                return (
                  <>
                    <div className="movie-div">
                      <img src={item.Poster} alt="" />
                      <div className="movie-content">
                        <p className="movie-title">{item.Title}</p>
                        <p className="year">{item.Year}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <button className="recent-article-btn" onClick={navigateArticles}>Load More</button>
          </div>
        </div>
      </div>
    </>
  );
}
