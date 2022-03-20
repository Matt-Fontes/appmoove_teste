import {React, useState} from "react";
import Header from "../../components/header/header";
import Body from "../../components/body/body";
import Footer from "../../components/footer/footer";
import './main.css';

function Main(){

    const [filterText, setFilterText] = useState("");

    return (
        <div className="main">
            <Header setFilterText={setFilterText}></Header>
            <Body filterText={filterText}></Body>
            <Footer></Footer>
        </div>
    );
}

export default Main;