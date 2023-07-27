// ANGELS COMPONENT SECTION

// Importing component
import Button from '../components/Button';

// Importing assets
import Angel1 from '../assets/angels1.jpg';
//  /!\ HERE IMPORT BROCHURE DOCUMENT /!\
import Brochure from '../assets/brief.pdf';
import Angel2 from '../assets/angels2.jpg';
import Graphique from '../assets/graphique.png';

// Importing CSS stylesheet
import '../styles/Angels.css';

// Angels function display Fiatope Angels section
function Angels() {
    return (
        <section id="section-angels">
            <img
                src={Angel1}
                alt="photo d'une business woman"
                className="angels-image"
            />
            <div className="angels-us">
                <h2> Qui sommes-nous ?</h2>
                <p>
                    Fiatope Angels est une initiative innovante et ambitieuse
                    qui vise à mobiliser des personnes aux quatre coins du monde
                    désireuses d'investir dans les entreprises que nous
                    accompagnons. Il s'agit de deux mécanismes :
                </p>
                <p>
                    -Un club d’investissement au sens de la loi française, qui
                    sera composé d'un maximum de 20 personnes, qui soutiendront
                    financièrement ( en capital ) chaque année trois à quatre
                    startups à fort potentiel de rentabilité.
                </p>
                <p>
                    -Une communauté plus large de personnes passionnées et
                    engagées dans l'entreprenariat africain, désirant être
                    formées aux rouages de l’investissement sur le continent.
                </p>
                <h3>
                    Que vous soyez expert ou novice en investissement, nous nous
                    adaptons !
                </h3>
            </div>
            <div className="angels-goals">
                <h2>Nos objectifs ?</h2>
                <div className="goals">
                    <p>
                        Fédérer et réunir une communauté agissante, pour être
                        force de frappe dans le financement de belles pépites.
                    </p>
                    <p>
                        Construire une expertise collective afin de prendre des
                        décisions d'investissement plus éclairées.
                    </p>
                    <p>
                        Connecter les porteurs de projets à des soutiens à même
                        de les accompagner financièrement et techniquement.
                    </p>
                </div>
            </div>
            <div className="angels-reasons">
                <h2>4 bonnes raisons d'y adhérer!</h2>
                <ul>
                    <li>
                        Découvrir (grâce aux sessions de pitches
                        d’entrepreneurs) de beaux projets innovants, à fort
                        impact et ayant une activité soutenue .
                    </li>
                    <li>
                        Investir directement dans des startups qui se réalisent
                        dans différents domaines comme l'agro-alimentaire, la
                        santé, l'éducation, la technologie et les énergies
                        renouvelables.
                    </li>
                    <li>
                        Rejoindre des personnes qui partagent des valeurs de
                        progrès aux parcours riches et attachées à l’idée de
                        croissance pour l'Afrique.
                    </li>
                    <li>
                        Rester à l'affût des dernières actualités et tendances
                        dans le monde de l'entrepreneuriat africain grâce à
                        notre newsletter.
                    </li>
                </ul>
            </div>
            <Button
                label="Télécharger la brochure"
                href={Brochure}
                download={Brochure}
            />
            {/* CHANGE HERE THE RIGHT DOCUMENT */}
            <div className="angels-steps">
                <img
                    src={Angel2}
                    alt="photo de trois femmes faisant du crochet"
                    className="angels-steps-img"
                />
                <h3>
                    Chez Fiatope Invest, nous vous accompagnons vers une levée
                    de fonds participative !
                </h3>
                <p>
                    Nous avons un programme de préparation à l'investissement
                    dont l'objectif est d'emmener votre entreprise vers un
                    financement participatif (en capital) en 08 étapes :
                </p>
                <img
                    src={Graphique}
                    alt="graphique représentant les étapes du processus de préparation à l'investissement"
                    className="angels-steps-graphique"
                />
                <p>
                    Nous mettons à votre disposition notre vaste réseau de
                    partenaires et d'investisseurs notamment à travers Fiatope
                    Angels.
                </p>
            </div>
            <div className="angels-criterias">
                <h2>Critères de sélection</h2>
                <div className="goals">
                    <p>Fort impact social et environnemental.</p>
                    <p>Entreprise innovante et en amorçage.</p>
                    <p>Solide modèle économique.</p>
                    <p>Très bonne connaissance du secteur.</p>
                    <p>Beau Profil de l’entrepreneur et de l’équipe.</p>
                    <p>Développement commercial soutenu.</p>
                </div>
            </div>
            <Button
                label="Télécharger la brochure"
                href={Brochure}
                download={Brochure}
            />
            <p className="pitch">
                Envoyer nous votre pitch de présentation :
                <a href="mailto:contact.invest@fiatope.com">
                    contact.invest@fiatope.com
                </a>
            </p>
        </section>
    );
}

export default Angels;
