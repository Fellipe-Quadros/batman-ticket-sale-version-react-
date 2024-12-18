import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css'
import Sidebar from "../../components/menu/sidebar";
function Contato(){
    return(
        <>
       <Sidebar/>    
       <Header/>
        <div id="body">
            <div id="main-conteiner">
                <div className="sub-conteiner">
                    <div id="tittle">
                        <h1 id="h1">Fale conosco</h1>
                    </div>
                    <div className="input">
                        <label for='Name'></label>
                        <input  type='text' name='Nome' placeholder="Seu Nome"/>
                    </div>
                    <div className="input">
                        <label for='email'></label>
                        <input  type='text' name='Email' placeholder="coloque um email valido"/>
                    </div>

                    <div className="input">
                        <label for='text'></label>
                        <input type='text' name='Titulo' placeholder="titulo"/>
                    </div>

                    <div className="input">
                        <textarea name='assunto' type='text' rows={10} placeholder="Description"></textarea>
                    </div>

                    <button className="button">Send</button> 
                </div>
            </div>

        </div>
            <Footer/>
        </>
    )
}


export default Contato;