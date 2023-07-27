// APP general page

// Importing components to build the page display
import Header from '../components/Header';
import Home from '../components/Home';
import Value from '../components/Value';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Angels from '../components/Angels';
import Footer from '../components/Footer';

// function defining the tree of routes
function App() {
    return (
        <div>
            <Header />
            <Home />
            <Value />
            <Projects />
            <Team />
            <Angels />
            <Footer />
        </div>
    );
}

export default App;
