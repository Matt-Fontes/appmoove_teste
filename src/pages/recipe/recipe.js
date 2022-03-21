import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RecipeArticle from "../../components/recipeArticle/recipeArticle";

function Recipe(){

    const location = useLocation();
    const {data} = location.state;

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <RecipeArticle data={data}></RecipeArticle>
    );
}

export default Recipe;