// REACT APP ROUTER COMPONENT

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing pages to build the routes
import Home from '../pages/Home';
import About from '../pages/About';
import Angels from '../pages/Angels';
import Projects from '../pages/Projects';

// function defining the tree of routes
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Path to go to home page */}
                <Route path="/" element={<Home />} />
                {/* Path to go to who we are page */}
                <Route path="/about" element={<About />} />
                {/* Path to go to fiatope angels page */}
                <Route path="/angels" element={<Angels />} />
                {/* Path to go to projects page */}
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
