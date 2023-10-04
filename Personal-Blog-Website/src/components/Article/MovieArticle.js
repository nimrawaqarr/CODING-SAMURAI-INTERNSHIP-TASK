import React from 'react'
import "./MovieArticle.css"
import movies from "../../movie.json"

export default function MovieArticle() {
  return (
    <>
      <div className="main">
        <div className="wrapper">
            <div className="container">
                <h2 className="movies-head">BLOGS</h2>
            <div className="movie">
      {movies.map((item) => {
       return(
        <>
        <div className="movie-div">
          <img src={item.Poster} alt="" />
          <div className="movie-content">
          <p className="movie-title">{item.Title}</p>
          <p className="year">{item.Year}</p>
          </div>
        </div>
        </>
       )
      })}
      </div>
            </div>
        </div>
      </div>
    </>
  )
}
