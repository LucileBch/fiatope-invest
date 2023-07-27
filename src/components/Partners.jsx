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
                <img src={Lionstech} alt="logo du partenaire lionstech" />
                <img src={Sinergi} alt="logo du partenaire sinergi" />
                <img src={Valleesud} alt="logo du partenaire vallée sud" />
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
