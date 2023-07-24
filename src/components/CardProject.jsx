// CARDPROJECT COMPONENT

// Importing CSS CardProject stylesheet
import '../styles/CardProject.css';

// Importing component
import Button from '../components/Button';

// Cardproject function in order to add other projects in the future
function CardProject({ content, image }) {
    return (
        <article className="project-article">
            {image}
            <p className="project-article-content">{content}</p>
            {/* MISSING LINK FOR NOW */}
            <Button label="Découvrir" href="#" />
        </article>
    );
}

export default CardProject;
