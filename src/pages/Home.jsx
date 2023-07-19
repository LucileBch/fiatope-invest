// HOME PAGE

// Importing components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Importing assets
import MainPicture from '../assets/image-accueil-fiatope.jpeg';

function Home() {
    return (
        <body>
            <Header />
            <main>
                <img
                    src={MainPicture}
                    alt="groupe de personnes travaillant autour d'une table"
                />
                <h1>Nous faisons prospérer votre entreprise !</h1>
                <h2>Notre mission</h2>
                <p>
                    Nous sommes spécialisés dans le financement et
                    l'accompagnement de petites startups africaines à fort
                    potentiel de croissance. Nous avons pour objectif d'aider
                    les porteurs de projets à réaliser leur vision en leur
                    apportant un financement adapté à leur développement, ainsi
                    qu'un accompagnement personnalisé tout au long de leur
                    parcours.
                </p>
            </main>
            <Footer />
        </body>
    );
}

export default Home;
