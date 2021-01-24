import React, { useState, useEffect } from "react";
// import axios from "../axios";
// import requests from "../requests";
import Backend from "../Backend";

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      // const request = await axios.get(requests.fetchNetflixOriginals);
      // setMovie(
      //   request.data.results[
      //     Math.floor(Math.random() * request.data.results.length - 1)
      //   ]
      // );
      // return request;

      const response = await Backend.fetchMovies(550);
      setMovie(response.data);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    //... na 200 karakters in description//
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdropPath}")`,
        backdropPosition: "center center",
      }}
    >
      {/* Background image */}
      <div className="banner_contents">
        {/* title */}
        {/* <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1> */}
        <img
          className="banner_movielogo"
          src={movie?.hdmovielogo[0].url}
          alt={movie?.title + "logo"}
        />

        {/* 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">Meer informatie </button>
        </div>

        {/* description */}
        <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
