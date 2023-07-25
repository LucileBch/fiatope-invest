// CARDVALUE COMPONENT

// Importing CSS CardValue style sheet
import '../styles/CardValue.css';

function CardValue({ content, image }) {
    return (
        <article className="value-article">
            <p className="value-article-content">
                {content}
                <div className="right-triangle"></div>
            </p>
            {image}
        </article>
    );
}

export default CardValue;
