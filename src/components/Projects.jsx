// PROJECTS SECTION COMPONENT

// Importing components
import CardProject from './CardProject';

// Importing assets
import Bioani from '../assets/projet_bioani.jpeg';
import Zoe from '../assets/projet_zoe.jpeg';
import Agrodeo from '../assets/projet_agrodeogracias.jpeg';
import Fenel from '../assets/projet_fenel.jpeg';
import Rabe from '../assets/projet_rabe.jpeg';
import Arsa from '../assets/projet_arsa.jpeg';
import Mobility from '../assets/projet_digital_mobility.jpeg';
import Nowell from '../assets/projet_nowell.jpeg';

// Importing Projects CSS stylesheet
import '../styles/Projects.css';

// Projects function displaying the Projects section on the page
function Projects() {
    return (
        <section id="section-projects" className="projects-section">
            <h2>Nos projets </h2>
            <div className="projects-display">
                <CardProject
                    title="Bioani"
                    content="BIOANI est une jeune société agricole innovante, à fort impact social et environnemental, installé en Côte d’Ivoire, producteur de protéine pour animaux et de fertilisants naturels, le tout à partir de la larve de mouche soldat noir à fortes propriétés nutritives."
                    image={
                        <img
                            className="project-image"
                            src={Bioani}
                            alt="photo de larve de mouche soldat noir"
                        />
                    }
                    link="https://bioani-farm.com/"
                />
                <CardProject
                    title="Zoe industry"
                    content="Zoe industry est une entreprise burkinabaise qui transforme les plantes médicinales tels que le kinkéliba, la citronnelle, le gingembre sous formes de tisanes, de gélules, ou de poudre. Elle s'adresse principalement aux marchés européens et produit aussi des tisanes pour le marché africain prêt à la consommation."
                    image={
                        <img
                            className="project-image"
                            src={Zoe}
                            alt="photo de deux hommes tenant des boites de thé de la marque zoe"
                        />
                    }
                    link="https://www.facebook.com/people/Th%C3%A9-zo%C3%A9/100063656618776/"
                />
                <CardProject
                    title="Agrodeogracias"
                    content="
                    Depuis quelques années, nous voyons de plus en plus l’essor des jus naturels un peu partout sur le continent, c’est ainsi que AGRODEOGRACIAS une entreprise béninoise spécialisé dans la production et la commercialisation des jus de fruits naturels à vue le jour en 2017 au Bénin. Les jus de fruits naturels ont cette particularité d’être source de bien-être en apportant au corps des valeurs nutritionnels riches en vitamines et en calories."
                    image={
                        <img
                            className="project-image"
                            src={Agrodeo}
                            alt="photo de bouteilles de jus"
                        />
                    }
                />
                <CardProject
                    title="La maison Fenel"
                    content="Art, authenticité, culture et valeur représente l’image exacte de ce qu’incarne la marque Fenel. La Maison Fenel est une entreprise opérant dans le secteur de la mode et de l’artisanat, elle offre à sa clientèle une gamme de produits de luxe variées, confectionnées à partir du Faso Dan Fani, le pagne local, héritage de la culture brukinabè."
                    image={
                        <img
                            className="project-image"
                            src={Fenel}
                            alt="photo d'articles d'artisanat'"
                        />
                    }
                    link="https://www.lamaisonfenel.com/"
                />
                <CardProject
                    title="Madame Rabe"
                    content="Nous connaissons tous l'importance du pigment dans nos accompagnements culinaires. Du pigment sur toutes ses formes, prêt à la consommation, il y'a en pour tout les goûts. Voilà ce que nous proposes Madame Rabè, cette entrepreuneuse ivoirienne, elle transforme et commercialise le pigment dans des bocaux pour l'autoconsommation, c'est ainsi qu'elle nous propose ses gammes de pigment sucré, pour les grillades et pour la cuisson."
                    image={
                        <img
                            className="project-image"
                            src={Rabe}
                            alt="photo de piment avec le logo de madame rabe"
                        />
                    }
                    link="https://www.facebook.com/mumrabe/?_rdc=2&_rdr"
                />
                <CardProject
                    title="Arsa Properties"
                    content="Consommer bio, sain et local n'a jamais été aussi facile. Partant des infusions de thé aux épices près à l'emploie en passant par la farine de manioc. Cette entreprise sénégalaise valorise les aliments locaux tout en leurs présent sur leurs meilleures formes avec leurs gammes variés et leurs packagings originaux. Si vous êtes fan de l'alimentation bio, ce projet vous intéressera suûrement."
                    image={
                        <img
                            className="project-image"
                            src={Arsa}
                            alt="photo d'épices"
                        />
                    }
                    link="https://arsaproperties.com/"
                />
                <CardProject
                    title="Digital mobility"
                    content="Le transport urbain et la livraison des marchandises n'ont jamais été aussi aisé, qu'avec Digital Mobility, votre plateforme camerounaise de transport spécialisé dans le déplacement interurbain. Nous possédons un réseau de moto affilié, de services de livraison à la demande et une
                    application mobile de transport rien que pour vous."
                    image={
                        <img
                            className="project-image"
                            src={Mobility}
                            alt="photo deux hommes sur leur moto"
                        />
                    }
                    link="https://digitalmobility.cm/"
                />
                <CardProject
                    title="Nowell traiteur"
                    content="Manger sain dans vos assiettes, des repas équilibrés et un service traiteur rien que pour vous. Goûts et saveurs sont aux rendez-vous avec cette entreprise sénégalaise de restauration dirigé par Mariama Baldé une diététicienne de longue date. Elle nous propose des plats de qualité afin de nous permettre de mange une combinaison de saveur et de
                    nature."
                    image={
                        <img
                            className="project-image"
                            src={Nowell}
                            alt="photo d'un plate de salade, de fruits avec le logo de nowell traiteur"
                        />
                    }
                    link="https://nowelli.com/"
                />
            </div>
            <div className="projects-background"></div>
        </section>
    );
}

export default Projects;
