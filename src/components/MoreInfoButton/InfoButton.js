import React from "react";
import video from "./movies/Heelal.mp4";

function InfoButton() {
  return (
    <div>
      <video autoPlay muted loop>
        (
        <source src={video} type="video/mp4" />
      </video>
      )
      <div className="moreInfo">
        <button className="custom-btn" />
      </div>
    </div>
  );
}

export default InfoButton;
