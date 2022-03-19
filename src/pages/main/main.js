import React from "react";
import Header from "../../components/header/header";
import Body from "../../components/body/body";
import './main.css';

function Main(){
    return (
        <div className="main">
            <Header></Header>
            <Body></Body>
        </div>
    );
}

export default Main;