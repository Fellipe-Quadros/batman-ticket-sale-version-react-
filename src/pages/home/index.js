import React, { lazy, Suspense, useState } from "react";
import Header from '../../components/header/header'
import './styles.css'
import Video from '../../assets/BATMAN  _ Trailer 2 Oficial Legendado _ DC FanDome 2021.mp4'
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/menu/sidebar";

function Home(){
    

    return(  
        <>
        <Sidebar/>
        <Header/>        
        <div id="banner"></div>  
        <div id="trailer-conteiner">
            <div className="content">
                <video controls className='trailer'>
                    <source src={Video}/>
                    Your navigator haven`t suport for this video
                </video>
                <div id="sinopse">
                    <p className="description">
                        após dois anos espreitando as ruas como batman, Bruce Waine se encontra nas profundezas mais sombrias de
                        ghotan city. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação
                        da vingaça para população.
                    </p>

                    <button className="button">comprar ingressos</button>
                </div>
            </div>

        </div>
        <Cards/>
        
        <Footer/>      
        </>
    )
}


export default Home;