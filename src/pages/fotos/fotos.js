import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/menu/sidebar";
import Footer from "../../components/footer/footer";
import './styles.css'

function Fotos(){
    return(
        <>       
            <Header/>
            <Sidebar/>

                <div className="fotos-conteiner">

                    <h1>CENAS</h1>
                   
                    <div className="cards">
                        <div className="card-fotos1"></div>
                        <div className="card-fotos2"></div>  
                        <div className="card-fotos3"></div>  
                        <div className="card-fotos4"></div>  
                        <div className="card-fotos5"></div>  
                        <div className="card-fotos6"></div>                        
                    </div>

                        
                </div>
          
            
            <Footer/>
        </>
    )
}


export default Fotos;