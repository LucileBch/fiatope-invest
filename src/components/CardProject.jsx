// CARDPROJECT COMPONENT

// Importing component
import Button from '../components/Button';

// Importing CSS CardProject stylesheet
import '../styles/CardProject.css';

// Cardproject function in order to add other projects in the future
function CardProject({ content, image }) {
    return (
        <article>
            {image}
            <p>{content}</p>
            {/* MISSING LINK FOR KNOW */}
            <Button label="Découvrir" href="#" />
        </article>
    );
}

export default CardProject;
