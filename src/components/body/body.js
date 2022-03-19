import React from "react";
import './body.css';
import Card from "../card/card";

function Body(){
    return (
        <div className="bodyContainer">
            <div className="bodyTitle">Receitas</div>
            <div className="cardsContainer">
                <Card name="Crock Pot Roast"></Card>
                <Card name="Crock Pot Roast"></Card>
                <Card name="Crock Pot Roast"></Card>
                <Card name="Crock Pot Roast"></Card>
                <Card name="Crock Pot Roast"></Card>
            </div>
        </div>
    );
}

export default Body;