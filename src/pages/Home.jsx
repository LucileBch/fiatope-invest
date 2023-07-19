// HOME PAGE

// Importing components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Importing assets
import MainPicture from '../assets/image-accueil-fiatope.jpeg';

// Importing CSS Home Page stylesheet
import '../styles/Home.css';

function Home() {
    return (
        <body>
            <Header />
            <main className="fiatope-home-main">
                <section className="fiatope-home-presentation">
                    <img
                        src={MainPicture}
                        alt="groupe de personnes travaillant autour d'une table"
                        className="fiatope-home-image"
                    />
                    <h1 className="fiatope-home-title">
                        Nous faisons prospérer votre entreprise !
                    </h1>
                </section>
                <section className="fiatope-home-informations">
                    <h2>Notre mission</h2>
                    <p>
                        Nous sommes spécialisés dans le financement et
                        l'accompagnement de petites startups africaines à fort
                        potentiel de croissance. Nous avons pour objectif
                        d'aider les porteurs de projets à réaliser leur vision
                        en leur apportant un financement adapté à leur
                        développement, ainsi qu'un accompagnement personnalisé
                        tout au long de leur parcours.
                    </p>
                    <div className="informations-background"></div>
                </section>
            </main>
            <Footer />
        </body>
    );
}

export default Home;
