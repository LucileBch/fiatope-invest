// Importing useState hook
import { useState } from 'react';

// Importing Navbar component
import Navbar from '../components/Navbar.jsx';

// Importing CSS Burger style sheet
import '../styles/Burger.css';

// Burger function allowing, on click, to show or not the menu for mobile display
function Burger() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setOpen(!open)}>
                {open ? (
                    <span className="header-burger">
                        <div className="header-burger-cross1" />
                        <div className="header-burger-cross2" />
                        <div className="header-burger-cross3" />
                    </span>
                ) : (
                    <span className="header-burger">
                        <div className="header-burger-line" />
                        <div className="header-burger-line" />
                        <div className="header-burger-line" />
                    </span>
                )}
            </div>
            <Navbar open={open} />
        </div>
    );
}

export default Burger;
