import React from "react";
import "./pages.css";

import Banner from "../components/Banner";
import Row from "../Row";
import requests from "../requests";

import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";



function Films() {
  return (
    <div className="app <br/>">
      <Banner />
      <YouTube />

      

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>

    
  );
}

export default Films;
