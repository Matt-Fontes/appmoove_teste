import {React, useState} from "react";
import './footer.css';
import axios from "axios";

function Footer(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("sweets");
    const [msg, setMsg] = useState("");

    const [disabledClass, setDisabledClass] = useState('disabled');

    // Verifica se todos os campos estão preenchidos
    function checkFields(){
        if(name && email && date && type && msg){
            setDisabledClass("");
            return true;
        };
        setDisabledClass('disabled');
        return false;
    }

    function handleNameChange(e){
        setName(e.target.value);
        checkFields();
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
        checkFields();
    }

    function handleDateChange(e){
        setDate(e.target.value);
        checkFields();
    }

    function handleTypeChange(e){
        setType(e.target.value);
        checkFields();
    }

    function handleMsgChange(e){
        setMsg(e.target.value);
        checkFields();
    }
    
    function handleSubmit(e){
        if(checkFields()){
            axios.post('https://recipes-api-appmoove.herokuapp.com/contacts', {
                name: name,
                email: email,
                birthday: date,
                type_food: type,
                message: msg
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    return (
        <div className="footerContainer">
            <div className="footerTitle">Contato</div>
            <div className="contactContainer">
                <div className="left">
                    <i className="fal fa-envelope-open-text mailIcon"></i>
                </div>
                <div className="right">
                    
                    <div className="inputContainer">
                        <div className="inputTitle">Nome</div>
                        <input type="text" className="inputField" placeholder="Insira seu nome" onChange={handleNameChange}/>
                    </div>
                    <div className="inputContainer">
                        <div className="inputTitle">Email</div>
                        <input type="text" className="inputField" placeholder="Insira seu email" onChange={handleEmailChange}/>
                    </div>
                    <div className="inputContainer short">
                        <div className="inputTitle">Data de Nascimento</div>
                        <input type="date" className="inputField" placeholder="Data de Nascimento" onChange={handleDateChange}/>
                    </div>
                    <div className="inputContainer short">
                        <div className="inputTitle">Tipo de comida</div>
                        <select className="inputField" name="type" id="type" onChange={handleTypeChange}>
                            <option value="sweets">Sweets</option>
                            <option value="snacks">Snacks</option>
                        </select>
                    </div>

                    <div className="inputContainer">
                        <div className="inputTitle">Mensagem</div>
                        <input type="text" className="inputField large" placeholder="Insira sua mensagem" onChange={handleMsgChange}/>
                    </div>

                    <div className={"enviar " + disabledClass}  onClick={handleSubmit}>Enviar</div>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;