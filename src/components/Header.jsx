// HEADER COMPONENT

// Importing element to able the navigation between pages
import { NavLink } from 'react-router-dom';

// Importing CSS Header stylesheet
import '../styles/Header.css';

// Importing assets
import Logo from '../assets/logo-fiatope-invest.png';

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
            <ul className="fiatope-header-list">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'fiatope-link-active'
                                : 'fiatope-link-inactive'
                        }
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? 'fiatope-link-active'
                                : 'fiatope-link-inactive'
                        }
                    >
                        Qui sommes-nous ?
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/angels"
                        className={({ isActive }) =>
                            isActive
                                ? 'fiatope-link-active'
                                : 'fiatope-link-inactive'
                        }
                    >
                        Fiatope Angels
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            isActive
                                ? 'fiatope-link-active'
                                : 'fiatope-link-inactive'
                        }
                    >
                        Nos Projets
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;
