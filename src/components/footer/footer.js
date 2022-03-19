import {React, useState} from "react";
import './footer.css';

function Footer(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("sweets");
    const [msg, setMsg] = useState("");

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handleDateChange(e){
        setDate(e.target.value);
    }

    function handleTypeChange(e){
        setType(e.target.value);
    }

    function handleMsgChange(e){
        setMsg(e.target.value);
    }
    
    function handleSubmit(e){
        
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

                    <div className="enviar" onClick={handleSubmit}>Enviar</div>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;