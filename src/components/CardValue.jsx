// CARDVALUE COMPONENT

// Importing CSS CardValue style sheet
import '../styles/CardValue.css';

function CardValue({ content, image }) {
    return (
        <article className="value-article">
            <div className="value-article-content">
                {content}
                <div className="right-triangle"></div>
            </div>
            {image}
        </article>
    );
}

export default CardValue;
