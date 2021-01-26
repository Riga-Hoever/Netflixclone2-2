import React from "react";
import Nav from "./components/Navbar/Nav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Row from "./Row";
import requests from "./requests";
import InfoButton from "./components/MoreInfoButton/InfoButton";

// eigen import //
// import { Series, Films, Nieuw, Lijst, Kijk } from "./pages";
import Series from "./pages/Series";
import Films from "./pages/Films";
import Nieuw from "./pages/Nieuw";
import Lijst from "./pages/Lijst";
import Kijk from "./pages/Kijk";

import Banner from "./components/Banner";
import { FooterContainer } from "./footer/container/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <InfoButton />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Series" component={Series} />
          <Route path="/Films" component={Films} />
          <Route path="/Nieuw" component={Nieuw} />
          <Route path="/lijst" component={Lijst} />
          <Route path="/Kijk" component={Kijk} />
        </Switch>

        <FooterContainer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="app">
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

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

export default App;
