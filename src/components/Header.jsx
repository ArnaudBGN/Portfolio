import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Header.css';

const Header = () => {

return(
<nav className='Header-Main'>
    <NavLink to="/"><img src="/src/assets/Arnaud-BEGIN.png" alt="Developer logo"/></NavLink>
        <NavLink to="/AboutMe">A propos</NavLink>
        <NavLink to="/Projects">Projets</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
    <NavLink to="/EasterEgg"><img src="/src/assets/Arnaud-BEGIN.png" alt="Developer logo"/></NavLink>
</nav>
)
}

export default Header;