// PROJECTS SECTION COMPONENT

// Importing components
import CardProject from './CardProject';

// Importing assets
import Bioani from '../assets/projet_bioani.jpeg';

// Importing Projects CSS stylesheet
import '../styles/Projects.css';

// Projects function displaying the Projects section on the page
function Projects() {
    return (
        <section id="section-projects" className="projects-main">
            <h1>Nos projets </h1>
            <CardProject
                content="BIOANI est une jeune société agricole innovante, à fort impact social et environnemental, installé en Côte d’Ivoire, producteur de protéine pour animaux et de fertilisants naturels, le tout à partir de la larve de mouche soldat noir à fortes propriétés nutritives."
                image={
                    <img
                        src={Bioani}
                        alt="photo d'un paysage avec le logo de la société bioani"
                    />
                }
            />
        </section>
    );
}

export default Projects;