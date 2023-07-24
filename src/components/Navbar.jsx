// NAVIGATION BAR COMPONENT

// Importing hook
import { useState } from 'react';

// Importing Navbar style sheet
import '../styles/Navbar.css';

// Navbar function displaying navigation menu
// As a child of Burger component, calling prop "open" to put a display condition on mobile menu display
function Navbar({ open }) {
    // Local state checking the link's index
    const [activeLink, setActiveLink] = useState(null);

    // Function handling click on link
    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <ul className={`fiatope-header-list ${open ? '' : 'closed'}`}>
            <li>
                <a
                    href="#"
                    className={
                        activeLink === 0
                            ? 'fiatope-link-active'
                            : 'fiatope-link-inactive'
                    }
                    // when the link is clicked, the state is updated with index 0
                    onClick={() => handleLinkClick(0)}
                >
                    Accueil
                </a>
            </li>
            <li>
                <a
                    href="#section-nous"
                    className={
                        activeLink === 1
                            ? 'fiatope-link-active'
                            : 'fiatope-link-inactive'
                    }
                    // when the link is clicked, the state is updated with index 1
                    onClick={() => handleLinkClick(1)}
                >
                    Qui sommes-nous ?
                </a>
            </li>
            <li>
                <a
                    href="#section-angels"
                    className={
                        activeLink === 2
                            ? 'fiatope-link-active'
                            : 'fiatope-link-inactive'
                    }
                    // when the link is clicked, the state is updated with index 2
                    onClick={() => handleLinkClick(2)}
                >
                    Fiatope Angels
                </a>
            </li>
            <li>
                <a
                    href="#section-projects"
                    className={
                        activeLink === 3
                            ? 'fiatope-link-active'
                            : 'fiatope-link-inactive'
                    }
                    // when the link is clicked, the state is updated with index 3
                    onClick={() => handleLinkClick(3)}
                >
                    Nos Projets
                </a>
            </li>
        </ul>
    );
}

export default Navbar;
