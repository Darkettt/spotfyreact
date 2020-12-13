import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import './styles.css';


function Header() {
 
 
 
 return ( 
 
 <header> 
    
    <nav className="navbar navbar-expand-sm">
    <div className="container">
<div className="navbar-header">
<Link to="/">
            <span className="navbar-logo">Spotify</span>
          </Link>
    </div>
  <ul className="navbar-nav navbar-right">
    <li className="nav-item">
      <NavLink className="nav-link" to="#">Premium</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/faq">Ajuda</NavLink>
    </li>
    
    <li className="nav-item">
      <NavLink className="nav-link"to="#">Baixar</NavLink>
    </li>

    <li role="separator" className="divider">
      
    </li>

    <li className="nav-item">
      <NavLink className="nav-link" to="#" id="header-sign-up">Inscrever-se</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="#" id="header-login-link">Entrar</NavLink>
    </li>
  </ul>

  </div>
</nav>


</header>
      )
}

export default Header;