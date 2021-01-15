import React from "react";
import "./pages.css";

import Banner from "../components/Banner";
import Row from "../Row";
import requests from "../requests";



function Films() {
  return (
    <div className="app <br/>">
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      {/* <h1>Mijn lijst </h1>

      <h1>Top 10 van films in Nederland vandaag </h1>

      <h1>Trending </h1>

      <h1>Thrillers </h1>

      <h1>Netflix Orgiginals </h1> */}
    </div>
  );
}

export default Films;
