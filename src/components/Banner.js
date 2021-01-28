import React, { useState, useEffect } from "react";
import Backend from "../Backend";
import ReactPlayer from 'react-player';

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  const [play, setPlay] = useState();
  useEffect(() => {
    async function fetchData() {
      // const request = await axios.get(requests.fetchNetflixOriginals);
      // setMovie(
      //   request.data.results[
      //     Math.floor(Math.random() * request.data.results.length - 1)
      //   ]
      // );
      // return request;

      const response = await Backend.fetchMovies(335984);
      setMovie(response.data);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    //... na 200 karakters in description//
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function playTrailer() {
    setPlay(true);
  }

  function toggleColor() {
    const nav = document.querySelector(".nav_container");
    nav.style.background = "green";
  }

  function onPlayerReady(event) {
    event.target.playVideo();
    event.target.h.requestFullscreen();
    console.log(arguments);
  }
  console.log(movie);

  function playing() {
    setPlay(true);
  }

  return (
    <header className="banner">
          <div className='player-wrapper'>
            <ReactPlayer  
              className='react-player'
              url={`https://youtu.be/${movie?.youtubeKey}`}
              // light={`https://image.tmdb.org/t/p/original${movie?.backdropPath}`}
              controls={false}
              playbackRate = {1}
              width = "100%"
              height = "100%"
              muted={true}
              loop={true}
              config={{
                youtube: {
                  playerVars: {
                    disable: 0,
                    autoplay: 1,
                    playsinline: 1,
                    showinfo: 0,
                    rel: 0,
                    iv_load_policy: 3,
                    fs: 0,
                  }
                } 
              }}
              onPlay={toggleColor}
 

/>
          </div>
      
      <div className="banner_contents">
        <img
          className="banner_movielogo"
          src={movie?.logoUrl}
          alt={movie?.title + "logo"}
        />
        <div className="banner_buttons">
          <button className="banner_button" onClick={playTrailer}>Play</button>
          <button className="banner_button">Meer informatie</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
      </div>

      <div className="banner_fadeBottom"/>

    </header>
    
  );
}
export default Banner;
