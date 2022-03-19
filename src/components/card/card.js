import {React, useEffect, useState} from "react";
import './card.css';
import imgPlaceHolder from '../../images/notFound.png';

function Card(props){

    const [img, setImg] = useState(imgPlaceHolder);

    function checkIfImageExists(url, callback) {
        const img = new Image();
    
        img.src = url;
    
        if (img.complete) {
          callback(true);
        } else {
          img.onload = () => {
            callback(true);
          };
          
          img.onerror = () => {
            callback(false);
          };
        }
    }

    useEffect(() => {
        checkIfImageExists(props.image, (exists) => {
            console.log('rodando: ' + props.image);
            if (exists) {
                setImg(props.image);
            } else {
                console.log('FAIL:' + props.image)
            }
        });
    }, []);
    

    return(
        <div className="cardContainer">
            <div className="recipeImg" style={{backgroundImage: 'url(' + img + ')' }}></div>
            <div className="recipeName">{props.name}</div>
            <div className="seeRecipe">Ver Receita</div>
        </div>
    );
}

export default Card;