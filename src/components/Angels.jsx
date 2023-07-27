// ANGELS COMPONENT SECTION

// Importing component
import Button from '../components/Button';

// Importing assets
import Angel1 from '../assets/angels1.jpg';
//  /!\ HERE IMPORT BROCHURE DOCUMENT /!\
import Brochure from '../assets/brief.pdf';

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
            />{' '}
            {/* CHANGE HERE THE RIGHT DOCUMENT */}
        </section>
    );
}

export default Angels;
