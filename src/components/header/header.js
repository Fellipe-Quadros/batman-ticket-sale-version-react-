import React from "react";
import './styles.css';
import { Link} from "react-router-dom";
import Logo from '../../assets/logobat.jpg'


function Header() {

    return(
        <header>
            <img id='logo' src={Logo} />

            <nav className="nav-web">
                <ul>
                    <Link style={{textDecoration: 'none'}} to ='/' >
                        <li>Home</li>                
                    </Link>
                    
                   <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <li>Fotos</li>
                   </Link>
                   
                    
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                        <li>Contatos</li>                    
                    </Link>

                </ul>
            </nav>
        </header>
    )
}


export default Header