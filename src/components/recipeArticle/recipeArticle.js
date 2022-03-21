import React from "react";
import { Link } from "react-router-dom";
import './recipeArticle.css';
import placeHolder from './../../images/notFound.png';

function recipeArticle({data}){
    return(
        <div className="recipeContainer">
            <Link to='/' className="goBack">{'<'}</Link>
            <div className="title">{data.name}</div>
            <div className="midContainer">
                <div className="side">
                    <div className="ingredientsText">Ingredients</div>
                    <div className="ingredients">
                        {
                            data.ingredients.map(el => (
                                <div className="ingredient">
                                    <span className="type">{el.type}</span>
                                    <span className="quantity">{el.quantity}</span>
                                    <span className="desc">{el.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="side">
                    <div className="pictureContainer" style={{backgroundImage: 'url(' + placeHolder + ')' }}>
                        <div className="picture" style={{backgroundImage: 'url(' + data.imageURL + ')' }}></div>
                    </div>
                </div>
            </div>
            <div className="botContainer">
                <div className="stepsText">Steps</div>
                <div className="steps">
                    {
                        data.steps.map((el, index) => (
                            <div className="step">
                                <div className="number">{index + 1}.</div>
                                <div className="text">{el}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default recipeArticle;