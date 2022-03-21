import {React, useState, useEffect} from "react";
import './body.css';
import Card from "../card/card";
import axios from "axios";

function Body({filterText}){

    // Vetor com todas receitas
    const [recipes, setRecipes] = useState([]);

    // Vetor com receitas filtradas
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    // Executa quando a pagina carrega
    useEffect(() => {
        // Fetching as receitas
        const apiUrl = 'https://recipes-api-appmoove.herokuapp.com/menu';
        axios.get(apiUrl, {headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }}).then((repos) => {
            console.log(repos.data);

            setRecipes(repos.data);
            setFilteredRecipes(repos.data);
        });

    }, [setRecipes, setFilteredRecipes]);
    
    // Executa toda vez que filterText é alterado 
    useEffect(() => {

        // Filtro de receitas
        let arr = [];
        recipes.map(el => {
            if(el.name.toLowerCase().includes(filterText.toLowerCase()))
                arr.push(el);
        });
        setFilteredRecipes(arr);

    }, [filterText]);

    return (
        <div className="bodyContainer">
            <div className="bodyTitle">Receitas</div>
            <div className="cardsContainer">
                {
                    filteredRecipes.map((el, index) => (
                        <Card name={el.name} image={el.imageURL} data={el} key={index}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;