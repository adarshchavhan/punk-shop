import React, { useState } from 'react'
import './Card.css'

const Card = ({bear}) => {

  return (
    <div className="card">
        <img src={bear?.image_url} alt="bear_image" />
        <div className="text">
            <h3>{bear.name}</h3>
            <p>{bear.tagline}</p>
        </div>

    </div>
  )
}

export default Card