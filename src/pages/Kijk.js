import React from "react";
import './pages.css';
import ReactPlayer from 'react-player';


function Kijk() {
  return (
    <div className="kijk">
      <ReactPlayer
       url="https://youtu.be/luai0p0y2zE"
       controls
       playbackRate = {2}
       width = "896px"
       height = "504px"
      />
      {/* <h1>Kijk opnieuw</h1> */}
    </div>
  );
}

export default Kijk;
