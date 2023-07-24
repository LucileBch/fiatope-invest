// CARDVALUE COMPONENT

function CardValue({ content, image }) {
    return (
        <article>
            <p>{content}</p>
            {image}
        </article>
    );
}

export default CardValue;
