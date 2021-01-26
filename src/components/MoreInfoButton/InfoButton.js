
import React from 'react'
import video from "./movies/Heelal.mp4"

function InfoButton() {
    return (
        <video autoPlay muted loop>(
            <source src= {video} type="video/mp4" />
        </video>

  
    )
}

export default InfoButton
