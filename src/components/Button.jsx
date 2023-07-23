// BUTTON COMPONENT

// Importing

// Button function to be re-usable for all buttons
function Button({ label, onClick, href, download }) {
    if (href) {
        return (
            <a href={href}>
                <button>{label}</button>
            </a>
        );

        if (download) {
            return (
                <a href={download}>
                    {' '}
                    <button>{label}</button>
                </a>
            );
        }
        return <button onClick={onClick}> {label} </button>;
    }
}

export default Button;
