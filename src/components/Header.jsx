// HEADER COMPONENT

// Importing element to able the navigation between pages
import { NavLink } from 'react-router-dom';

// Importing assets
import Logo from '../assets/logo-fiatope-invest.png';

function Header() {
    return (
        <header>
            <NavLink to="/">
                <img src={Logo} alt="logo de fiatope invest" />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Qui sommes-nous</NavLink>
                </li>
                <li>
                    <NavLink to="/angels">Fiatope Angels</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projets</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;
