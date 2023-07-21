// FOOTER COMPONENT

// Importing Fontawesome and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

// Importing CSS Footer stylesheet
import '../styles/Footer.css';

// Footer function allowing to display contacts element in a list
// with direct links to phone, email and address
function Footer() {
    return (
        <footer className="fiatope-footer">
            <ul className="fiatope-footer-list">
                <li className="fiatope-footer-bloc">
                    <FontAwesomeIcon
                        icon={faPhoneVolume}
                        className="fiatope-footer-icon"
                    />
                    <a
                        href="tel:33 078 437 358 4"
                        target="_blank"
                        className="fiatope-footer-element"
                    >
                        33 078 437 358 4
                    </a>
                </li>
                <li className="fiatope-footer-bloc">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="fiatope-footer-icon"
                    />
                    <a
                        href="mailto:contact.invest@fiatope.com"
                        target="_blank"
                        className="fiatope-footer-element"
                    >
                        contact.invest@fiatope.com
                    </a>
                </li>
                <li className="fiatope-footer-bloc">
                    <FontAwesomeIcon
                        icon={faHouseChimney}
                        className="fiatope-footer-icon"
                    />
                    <a
                        href="https://www.google.com/maps/place/23+Av.+Lombart,+92260+Fontenay-aux-Roses,+France/@48.7880179,2.2930128,17z/data=!3m1!4b1!4m6!3m5!1s0x47e670b8133f615f:0x683a309c9f1a90b7!8m2!3d48.7880179!4d2.2930128!16s%2Fg%2F11cpnp3k2g?entry=ttu"
                        target="_blank"
                        className="fiatope-footer-element"
                    >
                        23 Avenue Lombart, <br />
                        92260 Fontenay-aux-Roses, France
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
