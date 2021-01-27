import React, { useState } from "react";
import ReactPlayer from 'react-player/youtube'
import "./InfoButton.css";


function InfoButton() {

  const [showMovie, setshowMovie] = useState(false)

  const toggleMovie = () => {
    setshowMovie(true)
  }

  return (

    <div className={`${showMovie ? "moreInfo" : "hidden"}`}>
    
      <button onClick={toggleMovie} className="style-btn"> More Info </button>
      
        <div className="showMovie">
        <ReactPlayer link="https://youtu.be/O64Silz-r2w "/>

        <div className="icons">
          <i class="far fa-thumbs-up"></i>
          <i class="far fa-thumbs-down"></i>
        </div>

      </div>
    </div>
  );
}

export default InfoButton;


















