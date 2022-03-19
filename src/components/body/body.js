import {React, useState, useEffect} from "react";
import './body.css';
import Card from "../card/card";
import axios from "axios";

function Body(){

    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        // Fetching as receitas
        const apiUrl = 'https://recipes-api-appmoove.herokuapp.com/menu';
        axios.get(apiUrl, {headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }}).then((repos) => {
          const allRepos = repos.data;
          console.log(repos.data);
          setRecipes(repos.data);
        });
    }, [setRecipes]);

    return (
        <div className="bodyContainer">
            <div className="bodyTitle">Receitas</div>
            <div className="cardsContainer">
                {
                    recipes.map(el => (
                        <Card name={el.name} image={el.imageURL}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;