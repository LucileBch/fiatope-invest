// CARDPROJECT COMPONENT

// Importing CSS CardProject stylesheet
import '../styles/CardProject.css';

// Importing component
import Button from '../components/Button';

// Cardproject function in order to add other projects in the future
function CardProject({ title, content, image, link }) {
    return (
        <article className="project-article">
            {image}
            <h3>{title}</h3>
            <p className="project-article-content">{content}</p>
            {/* MISSING LINK FOR NOW */}
            <Button section="projects" label="Découvrir" href={link} />
        </article>
    );
}

export default CardProject;
