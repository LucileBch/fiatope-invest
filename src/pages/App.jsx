// APP general page

// Importing components to build the page display
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

// function defining the tree of routes
function App() {
    return (
        <div>
            <Header />
            <Home />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
