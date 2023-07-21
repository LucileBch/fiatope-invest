// HEADER COMPONENT

// Importing element to able the navigation between pages
import { NavLink } from 'react-router-dom';

// Importing Burger component
import Burger from '../components/Burger.jsx';

// Importing CSS Header stylesheet
import '../styles/Header.css';

// Importing assets
import Logo from '../assets/logo-fiatope-invest.png';

// Header function displaying the header website with logo and navigation
function Header() {
    return (
        <header className="fiatope-header">
            <NavLink to="/">
                <img
                    src={Logo}
                    alt="logo de fiatope invest"
                    className="fiatope-header-logo"
                />
            </NavLink>
            <Burger />
        </header>
    );
}

export default Header;
