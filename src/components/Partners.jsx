// PARTNERS SECTION COMPONENT

// Importing component
import Button from './Button';

// Importing assets
import Lionstech from '../assets/logo_lionstech.jpg';
import Valleesud from '../assets/logo_vallee_sud.jpeg';
import Sinergi from '../assets/logo_sinergi.jpeg';

// Importing stylesheet
import '../styles/Partners.css';

function Partners() {
    return (
        <section className="section-partners">
            <h2>Nos partenaires</h2>
            <div className="partners-logo">
                <a href="https://www.lionstechinvest.sn/" target="_blank">
                    <img src={Lionstech} alt="logo du partenaire lionstech" />
                </a>
                <a
                    href="https://www.ietp.com/fr/content/a-propos"
                    target="_blank"
                >
                    <img src={Sinergi} alt="logo du partenaire sinergi" />
                </a>
                <a href="https://www.valleesud.fr/fr" target="_blank">
                    <img src={Valleesud} alt="logo du partenaire vallée sud" />
                </a>
            </div>
            <Button
                section="partners"
                label="Devenez partenaires !"
                href="mailto:contact.invest@fiatope.com"
            />
        </section>
    );
}

export default Partners;
