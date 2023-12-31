// BUTTON COMPONENT

// Importing CSS Button stylesheet
import '../styles/Button.css';

// Button function using props to be re-usable for all buttons
function Button({ label, href, download, onClick, section }) {
    const buttonLink =
        section === 'projects' ? 'button-link-project' : 'button-link-partner';
    // If prop "href", display a button in <a> tag, sending to the specified URL
    if (href) {
        // If prop "download" is also provided, display a button in <a> tag, allowing to download the linked document
        if (download) {
            return (
                <a href={download} download>
                    <button className="button-download">{label}</button>
                </a>
            );
        }
        // If only "href" is provided, display a regular link
        return (
            <a href={href} target="_blank">
                <button className={buttonLink}>{label}</button>
            </a>
        );
    }
    // If neither "href" nor "download" is provided, display a regular button with onClick event handler
    return <button onClick={onClick}>{label}</button>;
}

export default Button;
