import React from 'react';
import {push as Menu} from 'react-burger-menu'
import { Link } from 'react-router-dom';
import './styles.css';

const Sidebar = props => {
  return (
    <Menu>
      <Link to="/" className="menu-item">Home</Link>
      <Link to="/contato" className="menu-item">Contato</Link>
      <Link to="/fotos" className="menu-item">Fotos</Link>
      
    </Menu>
  );
}

export default Sidebar;