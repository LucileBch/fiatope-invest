// Importing element to able navigation between pages
import { NavLink } from 'react-router-dom';

// Importing Navbar style sheet
import '../styles/Navbar.css';

// Navbar function displaying navigation menu
// As a child of Burger component, calling prop open in order to put condition on mobile menu display
function Navbar({ open }) {
    return (
        <ul className={`fiatope-header-list ${open ? '' : 'closed'}`}>
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
    );
}

export default Navbar;
