// HOME SECTION COMPONENT

// Importing assets
import MainPicture from '../assets/image_accueil.jpeg';
import Light from '../assets/icone_ampoule.png';
import Earth from '../assets/icone_environnement.png';
import Balance from '../assets/icone_ethique.png';

// Importing CSS Home Page stylesheet
import '../styles/Home.css';

// Importing component
import CardValue from './CardValue';

// Home function displaying the home section elements
function Home() {
    return (
        <section id="#" className="fiatope-home-main">
            <div className="fiatope-home-presentation">
                <img
                    src={MainPicture}
                    alt="groupe de personnes travaillant autour d'une table"
                    className="fiatope-home-image"
                />
                <h1 className="fiatope-home-title">
                    Nous faisons prospérer votre entreprise !
                </h1>
            </div>
            <div className="fiatope-home-mission">
                <h2>Notre mission</h2>
                <p>
                    Nous sommes spécialisés dans le financement et
                    l'accompagnement de petites startups africaines à fort
                    potentiel de croissance. Nous avons pour objectif d'aider
                    les porteurs de projets à réaliser leur vision en les aidant
                    à trouver des financements adaptés à leur développement,
                    ainsi qu'un accompagnement personnalisé tout au long de leur
                    parcours.
                </p>
                <div className="mission-background"></div>
            </div>
        </section>
    );
}

export default Home;
