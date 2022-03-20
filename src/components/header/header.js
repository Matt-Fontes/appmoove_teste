import React, { useState } from 'react';
import './header.css';
import '../../fontawesome/css/all.css'; // Icones
import '../../fontawesome/alt/css/all.css';

function Header({setFilterText}){

    const [fieldText, setFieldText] = useState("");

    function handleTextChange(e){
        setFieldText(e.target.value);
    }

    function handleSearch(){
        setFilterText(fieldText);
    }

    return(
        <div className="headerContainer">
            <div className="middleContainer">
                <span className="slogan">Encontre a receita que procura</span>
                <div className="searchBoxContainer">
                    <input type="text" className='searchBox' placeholder='Buscar Receita' onChange={handleTextChange}/>
                    <i class="far fa-search searchIcon" onClick={handleSearch}></i>
                </div>
            </div>
        </div>
    );
}

export default Header;