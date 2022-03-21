import {React, useEffect, useState} from "react";
import './card.css';
import placeHolder from './../../images/notFound.png';
import { Link } from "react-router-dom";

function Card({name, image, data}){    

    function handleCardClick(){
        console.log(data);
        window.scrollTo({
            top: 0
       });
    }

    return(
        <Link to='/receita' state={{data: data}} className="cardContainer"onClick={handleCardClick}>
            <div className="recipeImgContainer" style={{backgroundImage: 'url(' + placeHolder + ')' }}>
                <div className="recipeImg" style={{backgroundImage: 'url(' + image + ')' }}></div>
            </div>
            <div className="recipeName">{name}</div>
            <div className="seeRecipe">Ver Receita</div>
        </Link>
    );
}

export default Card;