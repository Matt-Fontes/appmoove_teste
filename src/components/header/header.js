import React from 'react';
import './header.css';
import '../../fontawesome/css/all.css'; // Icones
import '../../fontawesome/alt/css/all.css';

function Header(){
    return(
        <div className="headerContainer">
            <div className="middleContainer">
                <span className="slogan">Encontre a receita que procura</span>
                <div className="searchBoxContainer">
                    <input type="text" className='searchBox' placeholder='Buscar Receita'/>
                    <i class="far fa-search searchIcon"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;