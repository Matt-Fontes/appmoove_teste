import React from "react";
import './card.css';

function Card(props){
    return(
        <div className="cardContainer">
            <div className="recipeImg"></div>
            <div className="recipeName">{props.name}</div>
            <div className="seeRecipe">Ver Receita</div>
        </div>
    );
}

export default Card;