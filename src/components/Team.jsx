// TEAM SECTION COMPONENT

// Importing component
import CardTeam from './CardTeam';

// Importing assets
import Picture1 from '../assets/photo_equipe_1.jpeg';
import PictureB from '../assets/photo_equipe_perma.jpeg';
import PictureC from '../assets/photo_equipe_perma.jpeg';
import Picture2 from '../assets/photo_equipe_2.jpeg';
import Picture3 from '../assets/photo_equipe_3.jpeg';
import Picture4 from '../assets/photo_equipe_4.jpeg';
import Picture5 from '../assets/photo_equipe_5.jpeg';
import Picture6 from '../assets/photo_equipe_6.jpeg';
import Picture7 from '../assets/photo_equipe_7.jpeg';
import Picture8 from '../assets/photo_equipe_8.jpeg';
import Picture9 from '../assets/photo_equipe_9.jpeg';

// Importing CSS Team stylesheet
import '../styles/Team.css';

// Team function displaying paragraphs and team pictures
function Team() {
    return (
        <section id="section-nous">
            <div className="team-informations">
                <h2>Qui sommes nous ?</h2>
                <p>
                    FIATOPE INVEST est né de la plateforme de financement
                    participatif par dons, Fiatope, qui a été lancée en 2015 et
                    qui continue d'être très active. À ce jour, nous avons
                    financé 25 projets dans 8 pays, avec un impact total
                    dépassant les 110 000 euros. Cependant, nous avons constaté
                    que certaines personnes ne souhaitent pas uniquement faire
                    des dons, mais préfèrent investir dans des projets à valeur
                    ajoutée et obtenir un retour sur leur investissement.
                </p>
            </div>
            <div className="team-solution">
                <h2>Notre solution</h2>
                <p className="solution-first-paragraph">
                    Notre solution consiste à investir dans des petites et
                    moyennes entreprises africaines solides et prometteuses.
                    Nous avons la grande ambition de mobiliser la diaspora
                    africaine, les épargnants européens et nord-américains ainsi
                    que les personnes locales pour en faire des acteurs
                    financiers majeurs capables de catalyser les économies
                    africaines.
                </p>
                <p>
                    L'investissement dans les PME et les start-ups reste un défi
                    que les pays africains n'adressent pas de manière adéquate,
                    que ce soit du côté des gouvernements, du secteur financier
                    ou du secteur privé. De plus, les fonds d'investissement
                    présents sur le continent préfèrent financer des tickets
                    plus élevés par rapport aux besoins de la plupart des PME et
                    start-ups. Enfin, les micro-finances proposent des solutions
                    limitées pour répondre aux besoins de levée de fonds des
                    entrepreneurs. C'est ici que FIATOPE INVEST souhaite combler
                    ce vide.
                </p>
            </div>
            <div className="team-pictures">
                <h2>Notre équipe permanente</h2>
                <div className="pictures-people">
                    <CardTeam
                        image={<img src={Picture1} alt="photo d'Eric Ntonfo" />}
                        name="Eric Ntonfo, Fondateur et manager"
                    />
                    <CardTeam
                        image={
                            <img
                                src={PictureB}
                                alt="photo de Léticia Allache"
                            />
                        }
                        name="Léticia Allache, Chargée de relations
                        investisseurs"
                    />
                    <CardTeam
                        image={
                            <img
                                src={PictureC}
                                alt="photo de Gerardine Ngankeu"
                            />
                        }
                        name="Gerardine Ngankeu, Chargée d'investissements"
                    />
                </div>

                <h2>Notre comité projets et orientations</h2>
                <div className="pictures-people">
                    <CardTeam
                        image={<img src={Picture1} alt="photo d'Eric Ntonfo" />}
                        name="Eric Ntonfo"
                    />
                    <CardTeam
                        image={
                            <img src={Picture2} alt="photo de Gaétane Tiako" />
                        }
                        name="Gaétane Tiako"
                    />
                    <CardTeam
                        image={
                            <img src={Picture3} alt="photo de Jessica Dogbé" />
                        }
                        name="Jessica Dogbé"
                    />
                    <CardTeam
                        image={
                            <img
                                src={Picture4}
                                alt="photo de Sarah Delplanque"
                            />
                        }
                        name="Sarah Delplanque"
                    />
                    <CardTeam
                        image={
                            <img
                                src={Picture5}
                                alt="photo de Benjamin Ngongang"
                            />
                        }
                        name="Benjamin Ngongang"
                    />
                    <CardTeam
                        image={
                            <img src={Picture6} alt="photo de Teddy Kossoko" />
                        }
                        name="Teddy Kossoko"
                    />
                    <CardTeam
                        image={
                            <img src={Picture7} alt="photo de Neia Monteiro" />
                        }
                        name="Neia Monteiro"
                    />
                    <CardTeam
                        image={
                            <img
                                src={Picture8}
                                alt="photo de Youssouf Camara"
                            />
                        }
                        name="Youssouf Camara"
                    />
                    <CardTeam
                        image={
                            <img
                                src={Picture9}
                                alt="photo de Laurence Elong Mbassi"
                            />
                        }
                        name="Laurence Elong Mbassi"
                    />
                </div>
            </div>
        </section>
    );
}

export default Team;
