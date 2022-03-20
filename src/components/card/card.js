import {React, useEffect, useState} from "react";
import './card.css';
import placeHolder from './../../images/notFound.png';

function Card(props){    

    return(
        <div className="cardContainer">
            <div className="recipeImgContainer" style={{backgroundImage: 'url(' + placeHolder + ')' }}>
                <div className="recipeImg" style={{backgroundImage: 'url(' + props.image + ')' }}></div>
            </div>
            <div className="recipeName">{props.name}</div>
            <div className="seeRecipe">Ver Receita</div>
        </div>
    );
}

export default Card;