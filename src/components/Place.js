import React from 'react'
import "./style.css";

const Place = (props) => {
    const {name, description, image} =  props;
  return (
    <div className="card place">
            <div className="card-header">
                <img className="card-img" src={image} />
            </div>
            <div className="card-body">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
  )
}

export default Place