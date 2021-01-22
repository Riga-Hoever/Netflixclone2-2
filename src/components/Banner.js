import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";
import YouTube from "../pages/TestYoutube";
import movieTrailer from "movie-trailer";


function Banner() {
  const [movie, setMovie, ] = useState();
  ////////////////////////////////////////
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
////////////////////////////////////////////////////
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: { 
      enablejsapi: 1,
      modestbranding : 1,
      autoplay: 1,
      controls: 0

    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
       setTrailerUrl("");
    } else {
     movieTrailer(movie?.name || "")
     .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
     })
      .catch((error) => console.log(error));
   }
 };

  function truncate(str, n) {
    //... na 200 karakters in description//
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  console.table(movie);
  return (
    

    <header
         
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backdropPosition: "center center",
      
      }}
    >  
       
      
      {/* Background image */}
      <div className="banner_contents">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} onPlay={this.requestFullscreen()} />}

        {/* title */}
        <h1 className="banner_title">
        {/* <YouTube videoId='-_pgcFQ0l64'/> */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button" onClick={() => handleClick(movie)}>Play</button>
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
