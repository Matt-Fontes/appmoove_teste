import React from "react";
import Header from "../../components/header/header";
import Body from "../../components/body/body";
import Footer from "../../components/footer/footer";
import './main.css';

function Main(){
    return (
        <div className="main">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default Main;