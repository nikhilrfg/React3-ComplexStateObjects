import React from "react";

export default function Star(props){
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    const buttonLabel = props.isFilled ? "Unmark as favorite" : "Mark as favortie"
    return (
        <button
            onClick={props.handleClick} 
            aria-label={buttonLabel}
            aria-pressed={props.isFilled}
            className="card--favorite-button"
        >
        <img 
            src={`images/${starIcon}`} 
            alt="star icon."
            className="card--favorite"
            // onClick={toggleFavorite}
             
        /> 
        </button>
    )
}