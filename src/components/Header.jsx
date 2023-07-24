// HEADER COMPONENT

// Importing Burger component
import Burger from '../components/Burger.jsx';

// Importing CSS Header stylesheet
import '../styles/Header.css';

// Importing assets
import Logo from '../assets/logo-fiatope-invest.png';

// Header function displaying the header website with logo and navigation
// Calling Burger component to manage the menu display according to conditions
function Header() {
    return (
        <header className="fiatope-header">
            <a href="#">
                <img
                    src={Logo}
                    alt="logo de fiatope invest"
                    className="fiatope-header-logo"
                />
            </a>
            <Burger />
        </header>
    );
}

export default Header;
